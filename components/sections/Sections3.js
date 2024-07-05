import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
import CtaWhite from "../Cta/CtaWhite";
import CtaOutline from "../Cta/CtaOutline";
const Sections3 = ({ translation }) => {
  return (
    <>
      <div className="w-[90%] mx-auto relative py-[50px] lg:p-[120px] z-[9999]">
        <div className="inline-flex flex-col items-center justify-start w-full h-full gap-10 py-10">
          <h2 className="w-full lg:w-[80%] 2xl:w-full  fxl:w-[65%] 3xl:text-7xl  lg:text-center text-white text-3xl md:text-5xl lg:text-5xl fxl:text-[60px] font-bold ">
            {translation?.title}
          </h2>
          <p className="lg:w-[60%] xl:w-[95%] fxl:w-[60%] 3xl:w-[75%] lg:text-center text-white/80 text-xl md:text-2xl 2xl:text-xl  fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-regular">
            {translation?.descrizione}
          </p>
          <div className="justify-center items-center gap-[28.76px] flex flex-col md:flex-row w-full h-full">
            <div className="flex justify-center w-full h-full lg:w-max">
              <CtaWhite link="/contatti" title="Per info e contatti">
                {translation.book}
              </CtaWhite>
            </div>
            <div className="flex justify-center w-full h-full lg:w-max">
              <CtaOutline link="/degustazioni" title="Pagina degustazioni">
                {translation.scopri}
              </CtaOutline>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[100%] mx-auto h-[450px] md:h-[600px] lg:h-[650px] fxl:h-[650px] 3xl:h-[65vh]  degustazione"></div>
      <div className="w-full h-[400px] md:h-[600px] fxl:h-[800px] absolute bottom-40 left-0">
        <Image
          src={Pattern}
          fill
          alt="Il pattern"
          className="object-cover object-center opacity-10 mix-blend-luminosity"
        />
      </div>
    </>
  );
};

export default Sections3;
