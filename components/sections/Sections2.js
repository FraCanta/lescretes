import Image from "next/image";
import React from "react";
import Family from "@/public/assets/family.jpg";
import Rifugio from "@/public/assets/rifugio.jpg";
import Terroir from "@/public/assets/terroir.jpg";
import Link from "next/link";
const Sections2 = () => {
  return (
    <div className="w-full min-h-screen py-[90px] 3xl:py-[10rem]  gap-[50px] flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col gap-4 3xl:gap-10">
        <h2 className="text-main text-3xl md:text-5xl 3xl:text-7xl  font-bold ">
          Passione e innovazione da oltre 200 anni
        </h2>
        <p className="2xl:w-2/3 3xl:w-3/4 text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal">
          La storia della famiglia Charrère ha inizio nel 1750 e vive ancora
          oggi con grande rispetto delle tradizioni e dei valori tramandati nel
          tempo. L’attenzione all’innovazione e la cura del territorio sono il
          motore di un’azienda che mette anima e cuore nella viticoltura.
        </p>
      </div>
      <div className="w-[90%] mx-auto gap-[20px] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 h-[300px] md:h-[680.75px] 3xl:h-[70vh] relative ">
          <Link href="/storia" className="">
            <Image
              src={Family}
              alt=""
              fill
              className="object-cover rounded-lg object-left-top "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />

            <h3 className="text-center text-white text-[25px] md:text-3xl fxl:text-5xl font-bold  leading-[33.60px] right-6 bottom-6 absolute justify-start items-center gap-2.5 flex">
              La famiglia Charrère
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#ffff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </h3>
          </Link>
        </div>
        <div className="flex-col justify-start items-start gap-[20px] flex lg:w-1/2">
          <div className="w-full h-[321.17px] lg:h-full relative">
            <Link href="/rifugio" className="">
              <Image
                src={Rifugio}
                alt=""
                fill
                className="object-cover rounded-lg bg-main/20 bg-opacity-20"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <h3 className="text-white text-[25px] md:text-3xl font-bold fxl:text-5xl  leading-[33.60px] right-6 bottom-6 absolute justify-start items-center gap-2.5 flex">
                Il Rifugio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffff"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </h3>
            </Link>
          </div>
          <div className="h-[321.17px] lg:h-full w-full relative">
            <Link href="/terroir" className="">
              <Image
                src={Terroir}
                alt=""
                fill
                className="object-cover rounded-lg object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <h3 className="text-white text-[25px] md:text-3xl fxl:text-5xl font-bold  leading-[33.60px] right-6 bottom-6 absolute justify-start items-center gap-2.5 flex">
                Il Terroir
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffff"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections2;
