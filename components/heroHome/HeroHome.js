import Image from "next/image";
import React from "react";
import Degustazioni from "@/public/assets/degustazioni.png";
const HeroHome = () => {
  return (
    <>
      <div className="flex flex-col gap-6 xl:gap-10 xl:py-20 xl:w-[90%] mx-auto">
        <h1 className="xl:w-[60%] mx-auto text-center text-main text-[35px] leading-[45px] xl:text-[56px] font-bold xl:leading-[66px]">
          Entra nel mondo Les Crêtes per degustare i nostri vini.
        </h1>
        <div className="w-full h-[40vh] xl:h-[80vh] relative">
          <Image src={Degustazioni} fill className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default HeroHome;
