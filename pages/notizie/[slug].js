import React from "react";
import {
  getPosts,
  getTagId,
  getSlugs,
  getPost,
  getCategories,
} from "@/utils/wordpress";
import { getDate } from "@/utils/utils";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import RecentPostCol from "@/components/recentPost/recentPostCol";
import Head from "next/head";
import { parse } from "dom-parser-react";
import { decodeHtml } from "../../utils/utils";

const SinglePost = ({ post, recent }) => {
  const contents = parse(post.title.rendered, {
    createElement: React.createElement,
    Fragment: React.Fragment,
  });
  const recentPostCol = recent.map((p, i) => {
    const featuredMedia = p?.["_embedded"]?.["wp:featuredmedia"][0];
    return (
      <RecentPostCol
        post={p}
        featuredMedia={featuredMedia}
        key={i}
        id={p?.id}
      />
    );
  });
  return (
    <>
      <Head>
        <title>{contents}</title>
      </Head>
      <div className="w-[90%] mx-auto my-12 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[70%]">
          <h3 className="text-center text-main text-xl md:text-2xl fxl:text-3xl 3xl:text-5xl font-medium uppercase  ">
            {post?.["_embedded"]?.["wp:term"][0][0]?.name}
          </h3>

          <div
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
            className="text-main"
          ></div>
          <div className="flex w-full items-center gap-2">
            <div className="relative w-8 h-8 ">
              <Image
                src={post?.["_embedded"]?.["author"][0]?.["avatar_urls"][96]}
                alt="user avatar"
                fill
                className="rounded-full object-cover"
              />
            </div>

            <p className=" text-pink md:text-lg fxl:text-2xl flex !font-[400] py-10">
              Pubblicato il {getDate(post?.date)}
            </p>
          </div>
        </div>

        <div className="lg:w-[30%]">{recentPostCol}</div>
      </div>
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params, locale }) {
  const post = await getPost(params?.slug);
  const idLocale = await getTagId(locale); // recupera id della lingua attuale
  const allPosts = await getPosts(idLocale);

  //   const modifiedContent = post?.content?.rendered?.replace(
  //     "data-src-fg",
  //     "src"
  //   );
  //   const featuredMedia = post?.["_embedded"]?.["wp:featuredmedia"][0];

  //   let obj;
  //   switch (locale) {
  //     case "it":
  //       obj = translationIT;
  //       break;

  //     case "en":
  //       obj = translationEN;
  //       break;
  //     default:
  //       obj = translationIT;
  //       break;
  //   }

  return {
    props: {
      post: post,
      recent: allPosts
        ?.filter((el) => el.id !== post.id)
        .sort((a, b) => a?.date > b?.date),
    },
    revalidate: 10, // In seconds
  };
}
