import Image from "next/image";
import React from "react";
import Family from "@/public/assets/family.webp";
import Rifugio from "@/public/assets/rifugio.webp";
import Terroir from "@/public/assets/coteau2.webp";
import Link from "next/link";

const Sections2 = ({ translation }) => {
  return (
    <div className="w-full min-h-screen py-[90px] 3xl:py-[10rem]  gap-[50px] flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col gap-4 3xl:gap-10">
        <h2 className="text-3xl font-bold text-main md:text-5xl 3xl:text-7xl ">
          {translation?.title}
        </h2>
        <p className="text-lg 2xl:w-2/3 3xl:w-3/4 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal text-main/80">
          {translation?.descrizione}
        </p>
      </div>
      <div className="w-[90%] mx-auto gap-[20px] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 h-[300px] md:h-[680.75px] 3xl:h-[70vh] relative ">
          <Link
            href="/la-famiglia-charrere"
            title="Storia della Famiglia Charrère"
          >
            <Image
              src={Family}
              alt="famiglia charrere"
              fill
              className="object-cover object-left-top rounded-sm "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />

            <h3 className="text-center text-white text-[25px] md:text-3xl fxl:text-5xl font-bold  leading-[33.60px] right-6 bottom-6 absolute justify-start items-center gap-2.5 flex">
              {translation?.family}
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
            <Link href="/il-rifugio-del-vino" title="Il rifugio del vino">
              <Image
                src={Rifugio}
                alt="Il rifugio del vino"
                fill
                className="object-cover rounded-sm bg-main/20 bg-opacity-20"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <h3 className="text-white text-[25px] md:text-3xl font-bold fxl:text-5xl  leading-[33.60px] right-6 bottom-6 absolute justify-start items-center gap-2.5 flex">
                {translation?.rifugio}
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
            <Link href="/il-terroir" title="Il terroir">
              <Image
                src={Terroir}
                alt="il terroir"
                fill
                className="object-cover object-top rounded-sm"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <h3 className="text-white text-[25px] md:text-3xl fxl:text-5xl font-bold  leading-[33.60px] right-6 bottom-6 absolute justify-start items-center gap-2.5 flex">
                {translation?.terroir}
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
