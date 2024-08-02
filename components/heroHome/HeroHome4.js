import React from "react";
import Image from "next/image";
const HeroHome4 = ({ img, title }) => {
  return (
    <>
      <div className="w-full mx-auto flex-col justify-center gap-[28.8px] flex  py-[25px] md:py-[80px] 3xl:py-0">
        <h1 className="w-[90%] 2xl:w-[80%] mx-auto  text-main font-black text-4xl  md:text-5xl xl:text-6xl 3xl:text-8xl">
          {title}
        </h1>
        {/* <p className="text-main text-base lg:text-[21.60px] font-normal leading-9">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p> */}
      </div>
      <div className="relative aspect-square lg:h-screen  w-full lg:w-[90%] 3xl:h-full ">
        <Image
          src={img}
          fill
          className="object-cover h-full rounded-tl-lg xl:object-contain"
        />
      </div>
    </>
  );
};

export default HeroHome4;
