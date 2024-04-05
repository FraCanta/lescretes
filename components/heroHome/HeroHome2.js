import React from "react";
import Image from "next/image";
const HeroHome2 = ({ img, title }) => {
  return (
    <>
      <div className="w-full mx-auto flex-col justify-center gap-[28.8px] flex  py-[25px] md:py-[80px] ">
        <h1 className="w-[90%] 2xl:w-[80%] mx-auto  text-main font-black text-4xl  md:text-5xl xl:text-6xl">
          {title}
        </h1>
        {/* <p className="text-main text-base lg:text-[21.60px] font-normal leading-9">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p> */}
      </div>
      <div className="relative aspect-square lg:h-screen w-full lg:w-[50%]">
        <Image
          src={img}
          fill
          className="object-cover  xl:object-contain h-full "
        />
      </div>
    </>
  );
};

export default HeroHome2;
