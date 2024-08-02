import React from "react";
import Image from "next/image";
const HeroHome2 = ({ img, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-full mx-auto"></div>
      <div className="relative w-full mb-10 aspect-square lg:h-[80vh] 3xl:h-full">
        <Image src={img} fill className="object-cover h-full xl:object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-main/50"></div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-center">
          <h1 className="w-[90%] 2xl:w-[80%] mx-auto  text-white font-black text-4xl  md:text-5xl xl:text-7xl 3xl:text-8xl ">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroHome2;
