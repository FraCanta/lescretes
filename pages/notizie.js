import { getPosts } from "@/utils/wordpress";
import Image from "next/image";
import React from "react";

const Notizie = ({ post }) => {
  console.log(post?.["_embedded"]?.["wp:featuredmedia"][0]);
  return (
    <div className="w-[90%] mx-auto min-h-screen grid grid-cols-4 gap-8 py-20">
      {post?.map((p, index) => {
        const featuredMedia = p?.["_embedded"]?.["wp:featuredmedia"][0];
        return (
          <div key={index} className="relative">
            <Image
              src={
                featuredMedia?.["media_details"]?.sizes?.full?.["source_url"]
              }
              className="h-[400px]  w-full object-cover"
              fill
            />
            <h4
              dangerouslySetInnerHTML={{ __html: p?.title?.rendered }}
              className="text-[20px]"
            ></h4>
          </div>
        );
      })}
    </div>
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
