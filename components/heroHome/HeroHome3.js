import React from "react";

const HeroHome3 = ({ translation }) => {
  return (
    <div className="w-[90%] h-full flex-col lg:justify-end items-start flex mx-auto py-20">
      <h1 className="w-full text-white font-bold xs:text-[45px] xs:leading-[45px] sm:text-[55px]  md:text-[80px] lg:text-[40px] 2xl:text-[80px]  fxl:text-[80px] 3xl:text-[120px] ">
        {translation?.title}
      </h1>
      {/* <p className="xl:w-[60%] 2xl:w-[40%] lg:w-[40%] fxl:w-[50%] lg:text-center text-main text-base md:text-[25px] md:leading-[40px] lg:text-[18px] fxl:text-[25px] 3xl:text-[40px] font-normal leading-9 3xl:leading-[60px]">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam neque ultrices.
      </p> */}
      {/* <div className="lg:justify-center w-full  h-full items-center gap-4 md:gap-[28.80px] flex ">
        <div className="px-6 py-4 3xl:px-12 3xl:py-6 bg-[#4A4A49] rounded-[48px] justify-start items-center flex">
          <Link
            href="/vini"
            className="text-center text-white text-sm md:text-[25px] 2xl:text-[18px] fxl:text-[25px] 3xl:text-[35px] font-bold leading-snug flex items-center gap-2"
          >
            I nostri vini{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 3xl:w-8 3xl:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
        <div className="px-6 py-4 3xl:px-12 3xl:py-6  border-2 border-[#4A4A49] rounded-[48px] justify-start items-center gap-[9.60px] flex">
          <Link
            href="/storia"
            className="text-center text-sm md:text-[25px] 2xl:text-[18px] fxl:text-[25px] 3xl:text-[35px] font-bold leading-snug "
          >
            La nostra storia
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default HeroHome3;
