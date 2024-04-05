import { getPosts } from "@/utils/wordpress";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notizie = ({ post }) => {
  return (
    <>
      <Head>
        <title>Notizie e Press</title>
      </Head>
      <div className="w-[90%] mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-20 py-20">
        {post?.map((p, index) => {
          const featuredMedia =
            p?.["_embedded"]?.["wp:featuredmedia"][0]?.["source_url"];
          return (
            <div key={index} className="flex flex-col gap-6 border p-2">
              <div className="relative h-[300px]">
                <Image
                  src={featuredMedia}
                  className="h-auto  w-full aspect-square object-cover"
                  fill
                  alt={p.title.rendered}
                />
              </div>
              <Link
                href={`/notizie/${p?.slug}`}
                title={`${post?.title?.rendered}`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: p?.title?.rendered }}
                  className="text-[20px] text-main"
                ></div>
              </Link>
              <div
                dangerouslySetInnerHTML={{ __html: p?.excerpt?.rendered }}
                className="text-main"
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notizie;

export async function getServerSideProps(context) {
  const { locale, query, req, res } = context;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // let { page, categories } = query;
  // page === undefined && (page = 1);
  // categories === undefined && (categories = 0);
  // const itemPerPage = 6;

  // const tags = await getTags();
  // const idLocale = await getTagId(locale); // recupera id della lingua attuale
  const post = await getPosts();
  // const myTag = await getTagId("miaographics");
  // const myTag = 133;

  // const filteredPosts = post
  //   .filter((el) => el?.tags?.includes(myTag))
  //   .filter((el) => {
  //     const filterParams =
  //       parseInt(categories) !== 0
  //         ? el?.categories.includes(parseInt(categories))
  //         : el;
  //     return filterParams;
  //   }); //elimino i post per sideffect
  // const paginationTrim = filteredPosts.slice(
  //   (page - 1) * itemPerPage,
  //   itemPerPage * page
  // );
  // const category = await getCategories(locale); //categorie nella lingua attuale
  // const media = await getMedia();
  // console.log(category);
  let obj;
  // switch (locale) {
  //   case "it":
  //     obj = translationIT;
  //     break;

  //   case "en":
  //     obj = translationEN;
  //     break;
  //   case "fr":
  //     obj = translationFR;
  //     break;
  //   default:
  //     obj = translationIT;
  //     break;
  // }

  // console.log(locale);

  return {
    props: {
      post: post,
    },
  };
}
