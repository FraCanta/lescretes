import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pattern from "@/public/assets/pattern3.png";
import Cosmesi from "@/public/assets/cosmesi.jpg";

const Sections6 = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full  min-h-screen 2xl:h-full flex flex-col gap-6 p-8 2xl:gap-14 2xl:p-20 justify-center   relative">
        <h2 className="w-full  text-white text-[40px] 2xl:text-[64px] fxl:text-[80px] font-bold leading-[55.37px]">
          Non solo Vino
        </h2>
        <div className="w-full  text-white 2xl:text-[21.67px] fxl:text-[28px] font-normal  leading-9">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </div>
        <div className="max-w-max z-[99999]">
          <Link
            href="/cosmesi"
            className="text-center capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-main hover:transition-all  bg-white w-full flex items-center"
          >
            Scopri la nostra cosmesi
          </Link>
        </div>
        <div className="w-full h-[150px] lg:h-[350px] absolute bottom-0 left-0">
          <Image
            src={Pattern}
            fill
            className="object-cover opacity-10  mix-blend-luminosity"
          />
        </div>
      </div>
      <div className="w-full  h-screen 2xl:h-full ">
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
