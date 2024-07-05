import Link from "next/link";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
import React from "react";
import CtaWhite from "../Cta/CtaWhite";
import CtaOutline from "../Cta/CtaOutline";

const Banner = ({ img, title, paragraph, btn1, btn2, link1, link2 }) => {
  return (
    <div className="w-full min-h-screen md:min-h-[70vh] lg:h-full fxl:min-h-[60vh] bg-main flex flex-wrap  items-center relative">
      <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="relative h-full aspect-square">
          <Image
            src={img}
            fill
            className="object-cover w-full h-full"
            alt="img"
          />
        </div>

        <div className="flex flex-col h-full justify-center gap-8 relative lg:w-[90%] mx-auto ">
          <div className="flex flex-col gap-6 w-[90%] mx-auto">
            <h3 className="text-white text-3xl xl:text-[40px] font-bold fxl:text-5xl xl:w-[95%] 3xl:text-6xl">
              {title}
            </h3>
            <p className="text-white/80 text-xl md:text-2xl 2xl:text-xl 2xl:w-[90%] fxl:text-2xl 3xl:text-4xl 3xl:leading-normal">
              {paragraph}
            </p>
            <div className="items-center gap-[28.76px] flex flex-col md:flex-row w-full h-full z-40">
              <div className="flex justify-center w-full h-full lg:w-max">
                <CtaWhite link={`${link1}`}>{btn1}</CtaWhite>
              </div>
              <div className="flex justify-start w-full h-full lg:w-max">
                {link2 ? (
                  <CtaOutline link={`${link2}`}>{btn2}</CtaOutline>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[65%] h-[250px] lg:h-[300px] xl:h-[45%] absolute bottom-0 right-0 ">
        <Image
          src={Pattern}
          fill
          className="object-cover lg:object-contain opacity-10 mix-blend-luminosity"
        />
      </div>
    </div>
  );
};

export default Banner;
