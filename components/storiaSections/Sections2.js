import Image from "next/image";
import React from "react";
import Coccinella from "@/public/assets/coccinella.webp";
import Babbo from "@/public/assets/babbo.webp";
import Coto from "@/public/assets/coteau4.webp";
const Sections2 = () => {
  return (
    <div className="w-full  flex-col xl:flex-row items-center flex my-[70px]">
      <div className="w-full xl:w-[25%] xl:h-[50vh] relative aspect-square">
        <Image
          className="object-cover object-right h-full"
          fill
          src={Coccinella}
          alt="coccinella"
        />
      </div>

      <div className="w-full xl:w-[50%] aspect-square xl:h-[60vh] xl:aspect-video relative ">
        <Image
          className="object-cover h-full xl:rounded-sm"
          fill
          src={Babbo}
          alt="Costantino Charrère"
        />
      </div>
      <div className="w-full xl:w-[25%] aspect-square xl:h-[50vh] relative">
        <Image
          className="object-cover object-left h-full"
          fill
          src={Coto}
          alt="Torre medioevale"
        />
      </div>
    </div>
  );
};

export default Sections2;
