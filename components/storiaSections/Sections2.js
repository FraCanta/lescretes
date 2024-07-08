import Image from "next/image";
import React from "react";
import Coccinella from "@/public/assets/coccinella.jpg";
import Babbo from "@/public/assets/babbo.webp";
import Coto from "@/public/assets/coteau4.webp";
const Sections2 = () => {
  return (
    <div className="w-full h-[65vh] flex-col xl:flex-row items-center flex my-[70px]">
      <div className="w-full xl:w-[25%] h-[70vh] xl:h-[50vh] relative">
        <Image
          className="object-cover object-right h-full"
          fill
          src={Coccinella}
        />
      </div>

      <div className="w-full xl:w-[50%] h-[100vh] xl:h-full relative ">
        <Image className="object-cover h-full xl:rounded-lg" fill src={Babbo} />
      </div>
      <div className="w-full xl:w-[25%] h-[70vh] xl:h-[50vh] relative">
        <Image className="object-cover object-left h-full" fill src={Coto} />
      </div>
    </div>
  );
};

export default Sections2;
