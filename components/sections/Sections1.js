import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sections1 = () => {
  return (
    <div className="w-full justify-start gap-[3rem] flex flex-col bg-pattern h-full pb-14 lg:pb-0  xs:pt-[350px] sm:pt-[380px] md:pt-[150px] lg:pt-[380px] fxl:pt-[500px] items-center ">
      <div className="flex w-[90%] mx-auto">
        <h1 className="md:w-[85%]  text-[#4A4A49] text-[35px] md:text-5xl leading-none 2xl:text-6xl font-semibold 2xl:leading-[61.83px]">
          Una tradizione vinicola di famiglia: passione e montagna dal 1800
        </h1>
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto gap-6">
        <div className="relative flex items-center flex-col md:flex-row justify-between gap-6">
          <Image
            alt=""
            width={500}
            height={500}
            className="w-[357px] h-[292.74px] rounded-tl-[17.02px] rounded-tr-[17.02px] rounded-bl-[17.02px] rounded-br-[17.02px] object-cover"
            src="/assets/hand.jpg"
          />
          <div className="w-full h-full flex items-center md:w-[33%]  text-[5vw] lg:text-[1.5vw] fxl:text-[1.2vw] leading-9">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
          </div>

          <div className="justify-between md:justify-end w-full lg:w-1/3 h-full items-center gap-4 md:gap-[28.80px] flex ">
            <div className="px-6 py-4  bg-[#4A4A49] rounded-[48px] justify-start items-center flex">
              <Link
                href="/vini"
                className="text-center text-white text-sm md:text-[21.60px] font-bold leading-snug flex items-center"
              >
                I nostri vini{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>
            </div>
            <div className="px-6 py-4  border-2 border-[#4A4A49] rounded-[48px] justify-start items-center gap-[9.60px] flex">
              <Link
                href="/storia"
                className="text-center text-sm md:text-[21.60px] font-bold leading-snug "
              >
                La nostra storia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections1;
