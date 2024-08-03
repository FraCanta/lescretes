import Image from "next/image";
import React from "react";

const Hero = ({ img, text, alt }) => {
  return (
    <div className="flex flex-col w-full gap-6 mx-auto xl:gap-20 xl:py-20 mt-14">
      <h1 className="w-full px-2 sm:px-4 lg:px-0 xl:w-[60%] mx-auto text-center text-main text-[34px] sm:text-[35px] leading-[45px] md:text-[56px] font-bold md:leading-[66px] 3xl:text-8xl">
        {text}
      </h1>
      {img ? (
        <div className="w-full aspect-square xl:h-[90vh] relative">
          <Image
            src={img}
            fill
            alt={alt}
            className="object-cover object-bottom w-auto h-auto"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
