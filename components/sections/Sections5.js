import Image from "next/image";
import React from "react";
import Pattern from "@/public/assets/pattern3.png";
import Eco from "@/public/assets/eco.png";
const Sections5 = () => {
  return (
    <>
      <div className="w-[90%] mx-auto h-full relative grid grid-cols-1 2xl:grid-cols-2 py-[48px] 2xl:py-0 gap-10 2xl:gap-0">
        <div className="flex flex-col h-full justify-between gap-8 ">
          <div className="flex flex-col gap-2">
            <div className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="42"
                viewBox="0 0 25 47"
                fill="none"
              >
                <path
                  d="M12.512 36.4608C17.7674 36.4608 22.7288 32.0139 22.7288 21.3561C22.7288 10.6984 12.512 2.09863 12.512 2.09863C12.512 2.09863 2.33203 10.7351 2.33203 21.3561C2.33203 32.0139 7.29341 36.4608 12.512 36.4608Z"
                  stroke="#4A4A49"
                  strokeWidth="2.70961"
                  strokeLinecap="round"
                />
                <path
                  d="M12.5121 2.87012C12.5121 2.87012 8.984 27.677 16.6282 45.4645"
                  stroke="#4A4A49"
                  strokeWidth="2.70961"
                  strokeLinecap="round"
                />
                <path
                  d="M12.5117 29.0739C12.5117 29.0739 17.0321 28.0816 17.7304 22.5322"
                  stroke="#4A4A49"
                  strokeWidth="2.70961"
                  strokeLinecap="round"
                />
                <path
                  d="M7.10938 21.4663C7.10938 21.4663 8.72642 26.0602 11.593 26.4644"
                  stroke="#4A4A49"
                  strokeWidth="2.70961"
                  strokeLinecap="round"
                />
                <path
                  d="M12.5117 19.0778C12.5117 19.0778 14.3125 19.4821 15.6723 14.7412"
                  stroke="#4A4A49"
                  strokeWidth="2.70961"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-[25px] 2xl:text-[40px] text-white font-black">
              Sostenibilità
            </h3>
            <p className="text-[16px] lg:text-[20px] text-white font-medium w-full 2xl:w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              sem leo.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#4a4a49"
                className="w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="text-[25px] 2xl:text-[40px] text-white font-black">
              Impegno
            </h3>
            <p className="text-[16px] 2xl:text-[20px] text-white font-medium w-full 2xl:w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
              sem leo.{" "}
            </p>
          </div>{" "}
        </div>
        <div className="w-full h-[350px] 2xl:h-[500px] relative z-[999]">
          <Image
            src={Eco}
            alt=""
            fill
            className="object-cover rounded-[30px]"
          />
        </div>
      </div>
      <div className="w-full h-[350px] lg:h-[300px] fxl:h-[350px] absolute bottom-0  2xl:-left-[420px]">
        <Image
          src={Pattern}
          fill
          className="w-full object-cover 2xl:object-contain opacity-10 object-left mix-blend-luminosity "
        />
      </div>
    </>
  );
};

export default Sections5;
