import Link from "next/link";
import React from "react";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
import CtaWhite from "../Cta/CtaWhite";
import CtaOutline from "../Cta/CtaOutline";
const Sections3 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto relative py-[50px] lg:p-[120px] z-[9999]">
        <div className="w-full h-full  flex-col justify-start items-center gap-[28.76px] inline-flex">
          <h2 className="w-full lg:w-[60%] xl:w-[100%]  fxl:w-[65%] 3xl:text-[100px] 3xl:leading-[1.2] lg:text-center text-white text-[30px] md:text-4xl lg:text-[2.880vw] fxl:text-[60px] font-bold  leading-10  lg:leading-normal fxl:leading-[65px]">
            A Les Crêtes sorseggi i nostri vini immerso nel relax{" "}
          </h2>
          <p className="lg:w-[60%] xl:w-[95%] fxl:w-[60%] lg:text-center text-white text-xl lg:text-[21.57px] fxl:text-2xl 3xl:text-[35px] font-regular  leading-normal">
            Entrando si potrà vivere un’esperienza sensoriale, con una zona
            dedicata alle essenze e una biblioteca con libri della Valle d’Aosta
            e del vino, tutto questo in un luogo in cui potersi accomodare,
            leggere, bere un bicchiere ed osservare il panorama.
          </p>
          <div className="justify-center items-center gap-[28.76px] flex flex-col lg:flex-row w-full h-full">
            <div className="w-full lg:w-max h-full flex justify-center">
              <CtaWhite link="/contatti">Prenota subito</CtaWhite>
            </div>
            <div className="w-full lg:w-max h-full flex justify-center">
              <CtaOutline link="/degustazioni">Scopri di più</CtaOutline>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[100%] mx-auto h-[450px] md:h-[600px] lg:h-[500px] fxl:h-[650px] 3xl:h-[65vh]  degustazione"></div>
      <div className="w-full h-[400px] lg:h-[600px] fxl:h-[800px] absolute bottom-40 left-0">
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
