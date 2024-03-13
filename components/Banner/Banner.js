import Link from "next/link";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
import React from "react";

const Banner = ({ img, title, paragraph, btn1, btn2, link1, link2 }) => {
  return (
    <div className="w-full min-h-screen lg:min-h-[70vh]  py-[48px] 2xl:py-0  bg-main flex flex-wrap  items-center relative">
      <div className="grid grid-cols-1 2xl:grid-cols-2 w-[90%] mx-auto items-center justify-center h-full gap-10">
        <div className="relative h-[300px] lg:h-[450px]">
          <Image src={img} fill className="object-cover rounded-xl" alt="img" />
        </div>

        <div className="flex flex-col h-full justify-center gap-8 relative w-[90%] mx-auto ">
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[32px] xl:text-[40px] font-bold leading-11 xl:w-[95%]">
              {title}
            </h3>
            <p className="text-white text-[20px] w-[80%]">{paragraph}</p>
            <div className="items-center gap-[28.76px] flex flex-col lg:flex-row w-full h-full z-40">
              <div className="w-full lg:w-max h-full flex justify-center">
                <Link
                  href={`${link1}`}
                  className="text-center capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-main hover:transition-all  bg-white w-full"
                >
                  {btn1}
                </Link>
              </div>
              <div className="w-full lg:w-max h-full flex justify-start">
                {link2 ? (
                  <Link
                    href={`${link2}`}
                    className="w-full lg:w-max-content text-center text-white lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-white"
                  >
                    {btn2}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[65%] h-[250px] lg:h-[350px] absolute bottom-0 right-0 ">
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
