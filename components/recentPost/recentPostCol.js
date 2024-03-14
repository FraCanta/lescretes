import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDate } from "../../utils/utils";
import { Icon } from "@iconify/react";
const RecentPostCol = ({ post }) => {
  return (
    <div className="w-full flex items-center ">
      <div className="w-[95%]  flex flex-col justify-between divide-y divide-second">
        <small className=" text-main py-2 fxl:text-base">
          {getDate(post?.date)}
        </small>
        <Link
          href={`/notizie/${post?.slug}`}
          title={`${post?.title?.rendered}`}
        >
          <p
            className="font-bold text-main capitalize text-[1.4rem] lg:text-3xl leading-[1.8rem] xl:text-xl fxl:text-3xl 3xl:text-4xl py-2"
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          ></p>
        </Link>
      </div>
    </div>
  );
};

export default RecentPostCol;
