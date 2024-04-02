import Image from "next/image";
import React from "react";

const Hero = ({ img, text }) => {
  return (
    <div className="flex flex-col gap-6 xl:gap-20 xl:py-20 w-full mx-auto mt-14">
      <h1 className="w-full px-2 sm:px-4 lg:px-0 xl:w-[60%] mx-auto text-center text-main text-[34px] sm:text-[35px] leading-[45px] md:text-[56px] font-bold md:leading-[66px]">
        {text}
      </h1>
      {img ? (
        <div className="w-full aspect-square xl:h-[90vh] relative">
          <Image
            src={img}
            fill
            priority="true"
            alt="degustazione image"
            className="object-cover "
          />
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
