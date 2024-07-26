import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pattern from "@/public/assets/pattern3.png";
import Cosmesi from "@/public/assets/cosmesi.webp";
import CtaWhite from "../Cta/CtaWhite";

const Sections6 = ({ translation }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-[60vh]  xl:h-full flex flex-col gap-6 p-8 md:gap-14 2xl:gap-14 2xl:p-20 justify-center   relative">
        <h2 className="w-full  text-white text-[40px] md:text-6xl 2xl:text-[64px] fxl:text-[80px] font-bold 3xl:text-7xl">
          {translation.title}
        </h2>
        <div className="w-full ">
          <p className="text-xl font-normal text-white fxl:text-2xl 3xl:text-4xl 3xl:leading-normal">
            {translation.descrizione}
          </p>
        </div>
        <div className="max-w-max z-[99999]">
          <CtaWhite link="/cosmesi">{translation.button}</CtaWhite>
        </div>
        <div className="w-full h-[150px] lg:h-[350px] 3xl:h-[40%] absolute bottom-0 left-0">
          <Image
            src={Pattern}
            fill
            className="object-cover opacity-10 mix-blend-luminosity"
          />
        </div>
      </div>
      <div className="w-full h-full aspect-square">
        <Image
          className="object-cover w-full h-full"
          width={500}
          height={500}
          src={Cosmesi}
        />
      </div>
    </div>
  );
};

export default Sections6;
