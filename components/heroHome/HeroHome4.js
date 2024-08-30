import React from "react";
import Image from "next/image";
const HeroHome4 = ({ img, title }) => {
  return (
    <>
      <div className="w-full mx-auto flex-col  gap-[28.8px] flex  py-[25px] md:py-[80px] 3xl:py-0">
        <h1 className="w-[90%] 2xl:w-[80%] mx-auto  text-main font-black text-4xl  md:text-5xl xl:text-[3.4rem] 3xl:text-8xl">
          {title}
        </h1>
        <p className="text-main/80 text-base lg:text-[21.60px] font-normal leading-normal w-[90%] 2xl:w-[80%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
      </div>
      <div className="relative w-full rounded-tl-sm aspect-square lg:h-screen 3xl:h-full">
        <Image
          src={img}
          fill
          className="object-cover h-full xl:object-cover object-[20%_0%]"
        />
      </div>
    </>
  );
};

export default HeroHome4;
