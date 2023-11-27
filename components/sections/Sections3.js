import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
const Sections3 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto relative py-[50px] lg:p-[120px] z-[9999]">
        <div className="w-full h-full  flex-col justify-start items-center gap-[28.76px] inline-flex">
          <h2 className="w-full lg:w-[55%] text-center text-white text-[35px] lg:text-[43.15px] fxl:text-[50px] font-bold  leading-[55.13px]">
            A Les Crêtes sorseggi i nostri vini immerso nel relax{" "}
          </h2>
          <p className="lg:w-[50%] text-center text-white lg:text-[21.57px] font-regular leading-9">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <div className="justify-center items-center gap-[28.76px] flex flex-col lg:flex-row w-full h-full">
            <div className="w-full lg:w-max h-full flex justify-center">
              <Link
                href="/contatti"
                className="text-center capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-main hover:transition-all  bg-white w-full"
              >
                Prenota subito
              </Link>
            </div>
            <div className="w-full lg:w-max h-full flex justify-center">
              <Link
                href="/degustazioni"
                className="w-full lg:w-max-content text-center text-white lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-white"
              >
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto h-[450px] lg:h-[400px] fxl:h-[700px] rounded-tl-[30px] rounded-tr-[30px] degustazione"></div>
      <div className="w-full h-[400px] lg:h-[600px] absolute bottom-0 left-0">
        <Image
          src={Pattern}
          fill
          className="object-cover opacity-10 object-center mix-blend-luminosity"
        />
      </div>
    </>
  );
};

export default Sections3;
