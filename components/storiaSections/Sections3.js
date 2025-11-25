import Image from "next/image";
import React from "react";
import View from "@/public/assets/coteau3.webp";
const Sections3 = ({ translation }) => {
  return (
    <div className="w-[90%]  flex-col justify-start items-start gap-10  md:gap-20 xl:gap-[50px] fxl:gap-20 flex mx-auto">
      {/* <div className="flex flex-col gap-10">
        <h3 className="text-4xl font-bold text-main md:text-5xl xl:text-5xl fxl:text-6xl 3xl:text-7xl">
          {translation.title}
        </h3>
        {translation.descrizione.map((el, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-8 text-lg font-normal text-main/80 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal "
              key={i}
            >
              <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
            </div>
          );
        })}
      </div> */}

      <div className="w-full h-[0.08rem] bg-main/20"></div>

      {/* <div className="flex-col justify-start items-start gap-[50px] md:gap-10 flex fxl:gap-20">
        <h3 className="text-4xl font-bold text-main md:text-5xl xl:text-5xl fxl:text-6xl 3xl:text-7xl">
          {translation.title2}
        </h3>
        <div className="relative aspect-square xl:h-[70vh] w-full">
          <Image
            className="object-cover w-full rounded-sm "
            fill
            src={View}
            alt="vista"
          />
        </div>
        {translation.descrizione2.map((el, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-8 text-lg font-normal text-main/80 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal "
              key={i}
            >
              <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
            </div>
          );
        })}
      </div> */}
      {translation.paragrafi.map((p, i) => {
        return (
          <div
            className="flex flex-col items-start justify-start gap-8"
            key={i}
          >
            <h2 className="text-3xl font-bold text-main md:text-5xl 3xl:text-7xl">
              {p.title}
            </h2>
            {p.descrizione.map((el, j) => {
              return (
                <div
                  className="flex flex-col gap-4 text-lg font-normal text-main/80 md:text-xl 3xl:text-4xl 3xl:leading-normal"
                  key={j} // Aggiunta della key per l'elemento interno
                >
                  <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="relative w-full h-full aspect-video">
        <Image
          src="/assets/ele_ele.webp"
          alt="nonno"
          fill
          className="object-cover rounded-sm"
        />
      </div>
    </div>
  );
};

export default Sections3;
