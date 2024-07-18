import Image from "next/image";
import React from "react";
import Degustazioni from "@/public/assets/degustazioni.webp";
const HeroHome = ({ title }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-6 mx-auto xl:gap-10 xl:py-20">
        <h1 className="w-[90%] xl:w-[80%] mx-auto text-center text-main text-[35px] leading-[45px] md:text-[56px] font-bold md:leading-[66px]">
          {title}
        </h1>
        {/* <div className="w-full h-[40vh] xl:h-[80vh] relative">
          <Image
            src={Degustazioni}
            fill
            priority="true"
            alt="degustazione image"
            className="object-cover object-right-[20px] xl:object-contain"
          />
        </div> */}
      </div>
    </>
  );
};

export default HeroHome;
