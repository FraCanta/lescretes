import React from "react";

const HeroHome3 = ({ translation }) => {
  return (
    <div className="w-[90%] h-full flex-col lg:justify-end items-start flex mx-auto py-20">
      <h1 className="w-full text-white font-bold xs:text-[45px] xs:leading-[45px] sm:text-[55px]  md:text-8xl lg:text-[40px] 2xl:text-[80px]  fxl:text-[80px] 3xl:text-[120px] ">
        {translation?.title}
      </h1>
    </div>
  );
};

export default HeroHome3;
