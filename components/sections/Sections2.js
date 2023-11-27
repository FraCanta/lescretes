import Image from "next/image";
import React from "react";
import Family from "@/public/assets/family.jpg";
import Rifugio from "@/public/assets/rifugio.jpg";
import Terroir from "@/public/assets/terroir.jpg";
import Link from "next/link";
const Sections2 = () => {
  return (
    <div className="w-full min-h-screen py-[90px]  gap-[50px] flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col gap-4">
        <h2 className="text-main text-[30px] lg:text-[2.880vw] font-bold  lg:leading-[55.20px]">
          Siamo storia e futuro
        </h2>
        <p className="lg:w-1/2 text-[4.5vw] md:text-[2.5vw] lg:text-[1.3vw] leading-8 lg:leading-9">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.{" "}
        </p>
      </div>
      <div className="w-[90%] mx-auto gap-[38px] flex flex-col lg:flex-row">
        <div className="lg:w-2/3 h-[300px] md:h-[680.75px] relative ">
          <Image
            src={Family}
            alt=""
            fill
            className="object-cover rounded-3xl object-left-top "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <Link
            href="/storia"
            className="right-6 bottom-6 absolute justify-start items-center gap-2.5 inline-flex"
          >
            <h3 className="text-center text-white text-[25px] font-bold  leading-[33.60px]">
              La nostra famiglia
            </h3>
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
          </Link>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] flex lg:w-1/2">
          <div className="w-full h-[321.17px] relative">
            <Image
              src={Rifugio}
              alt=""
              fill
              className="object-cover rounded-3xl bg-main/20 bg-opacity-20"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Link
              href="/storia"
              className="right-6 bottom-6 absolute justify-start items-center gap-2.5 inline-flex"
            >
              <h3 className="text-white text-[25px] font-bold  leading-[33.60px]">
                Il Rifugio
              </h3>
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
            </Link>
          </div>
          <div className="h-[321.17px] w-full relative">
            <Image
              src={Terroir}
              alt=""
              fill
              className="object-cover rounded-3xl object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Link
              href="/storia"
              className="right-6 bottom-6 absolute justify-start items-center gap-2.5 inline-flex"
            >
              <h3 className="text-white text-[25px] font-bold  leading-[33.60px]">
                Il Terroir
              </h3>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections2;
