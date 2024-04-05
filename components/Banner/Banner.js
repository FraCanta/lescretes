import Link from "next/link";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
import React from "react";
import CtaWhite from "../Cta/CtaWhite";
import CtaOutline from "../Cta/CtaOutline";

const Banner = ({ img, title, paragraph, btn1, btn2, link1, link2 }) => {
  return (
    <div className="w-full min-h-screen lg:min-h-[80vh] fxl:min-h-[60vh]  py-[48px] 2xl:py-0  bg-main flex flex-wrap  items-center relative">
      <div className="grid grid-cols-1 2xl:grid-cols-2 w-[90%] mx-auto items-center justify-center h-full gap-10">
        <div className="relative h-[300px] lg:h-[450px]">
          <Image src={img} fill className="object-cover rounded-xl" alt="img" />
        </div>

        <div className="flex flex-col h-full justify-center gap-8 relative lg:w-[90%] mx-auto ">
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[32px] xl:text-[40px] font-bold fxl:text-5xl xl:w-[95%]">
              {title}
            </h3>
            <p className="text-white text-[20px] lg:w-[90%] fxl:text-2xl">
              {paragraph}
            </p>
            <div className="items-center gap-[28.76px] flex flex-col lg:flex-row w-full h-full z-40">
              <div className="w-full lg:w-max h-full flex justify-center">
                <CtaWhite link={`${link1}`}>{btn1}</CtaWhite>
              </div>
              <div className="w-full lg:w-max h-full flex justify-start">
                {link2 ? (
                  <CtaOutline link={`${link2}`}>{btn2}</CtaOutline>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[65%] h-[250px] lg:h-[300px] absolute bottom-0 right-0 ">
        <Image
          src={Pattern}
          fill
          className="object-cover lg:object-contain opacity-10  mix-blend-luminosity"
        />
      </div>
    </div>
  );
};

export default Banner;
