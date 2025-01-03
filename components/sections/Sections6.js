import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pattern from "@/public/assets/pattern.png";
import Cosmesi from "@/public/assets/cosmesi.webp";
import CtaWhite from "../Cta/CtaWhite";
import CtaOutlineBrown from "../Cta/CtaOutlineBrown";

const Sections6 = ({ translation }) => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-[90%] mx-auto">
      <div className="w-full h-full aspect-square">
        <Image
          className="object-cover w-full h-full rounded-sm"
          width={500}
          height={500}
          src={Cosmesi}
          alt="DeVin Cosmesi"
        />
      </div>
      <div className="relative flex flex-col justify-center w-full gap-6 xl:h-full lg:p-8 2xl:p-20">
        <h2 className="w-full  text-main text-3xl md:text-6xl 2xl:text-[64px] fxl:text-[80px] font-bold 3xl:text-7xl">
          {translation.title}
        </h2>
        <div className="w-full ">
          <p className="text-lg font-normal text-main/80 fxl:text-2xl 3xl:text-4xl 3xl:leading-normal">
            {translation.descrizione}
          </p>
        </div>
        <div className="max-w-max z-[99999]">
          <CtaOutlineBrown link="/cosmesi">
            {translation.button}
          </CtaOutlineBrown>
        </div>
        {/* <div className="w-full h-[150px] lg:h-[350px] 3xl:h-[40%] absolute bottom-0 left-0">
          <Image
            src={Pattern}
            fill
            className="object-cover opacity-10 mix-blend-luminosity"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Sections6;
