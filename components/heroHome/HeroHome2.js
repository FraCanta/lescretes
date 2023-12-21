import React from "react";
import Image from "next/image";
const HeroHome2 = ({ img, title }) => {
  return (
    <>
      <div className="w-full mx-auto flex-col justify-center gap-[28.8px] flex  py-[25px] lg:py-[80px]">
        <h1 className="w-[90%] xl:w-[80%] mx-auto  text-main font-black text-[32.64px] md:text-[60px] leading-[42.4px] md:leading-[65px]">
          {title}
        </h1>
        {/* <p className="text-main text-base lg:text-[21.60px] font-normal leading-9">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p> */}
      </div>
      <div className="relative h-screen w-full">
        <Image src={img} fill className="object-cover xl:object-contain " />
      </div>
    </>
  );
};

export default HeroHome2;
