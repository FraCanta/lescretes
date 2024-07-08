import Image from "next/image";
import React from "react";
import View from "@/public/assets/coteau3.webp";
import Link from "next/link";
const Sections3 = ({ translation }) => {
  return (
    <div className="w-[90%]  flex-col justify-start items-start gap-10  md:gap-20 xl:gap-[50px] fxl:gap-20 flex mx-auto">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl font-bold text-main md:text-5xl xl:text-5xl fxl:text-6xl 3xl:text-7xl">
          {translation.title}
        </h3>
        {translation.descrizione.map((el, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-8 text-xl font-normal text-main/80 md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal "
              key={i}
            >
              <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
            </div>
          );
        })}
      </div>

      <div className="flex-col justify-start items-start gap-[50px] md:gap-10 flex fxl:gap-20">
        <h3 className="text-3xl font-bold text-main md:text-5xl xl:text-5xl fxl:text-6xl 3xl:text-7xl">
          {translation.title2}
        </h3>
        <div className="relative aspect-square xl:h-[70vh] w-full">
          <Image className="object-cover w-full rounded-lg " fill src={View} />
        </div>
        {translation.descrizione2.map((el, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-8 text-xl font-normal text-main/80 md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal "
              key={i}
            >
              <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sections3;
