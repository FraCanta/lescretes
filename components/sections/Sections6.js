import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pattern from "@/public/assets/pattern3.png";
import Cosmesi from "@/public/assets/cosmesi.jpg";
import CtaWhite from "../Cta/CtaWhite";

const Sections6 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-[60vh]  xl:h-full flex flex-col gap-6 p-8 md:gap-14 2xl:gap-14 2xl:p-20 justify-center   relative">
        <h2 className="w-full  text-white text-[40px] md:text-6xl 2xl:text-[64px] fxl:text-[80px] font-bold leading-[55.37px]">
          Non solo Vino
        </h2>
        <div className="w-full  ">
          <p className="text-white text-xl md:text-2xl 2xl:text-xl fxl:text-2xl font-normal">
            DeVin propone una formula cosmetica innovativa, naturale e efficace,
            derivata da estratti biologici delle montagne, per soddisfare le
            esigenze di chi cerca prodotti naturali ad alte prestazioni.
          </p>
        </div>
        <div className="max-w-max z-[99999]">
          <CtaWhite link="/cosmesi">Scopri La Nostra Cosmesi</CtaWhite>
        </div>
        <div className="w-full h-[150px] lg:h-[350px] absolute bottom-0 left-0">
          <Image
            src={Pattern}
            fill
            className="object-cover opacity-10  mix-blend-luminosity"
          />
        </div>
      </div>
      <div className="w-full aspect-square  h-full">
        <Image
          className="w-full h-full object-cover"
          width={500}
          height={500}
          src={Cosmesi}
        />
      </div>
    </div>
  );
};

export default Sections6;
