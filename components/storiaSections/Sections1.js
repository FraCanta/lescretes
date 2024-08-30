import Image from "next/image";
import React from "react";

const Sections1 = ({ translation }) => {
  return (
    <div className="w-[90%] flex-col justify-start items-start gap-[50px] md:gap-20 fxl:gap-20 flex mx-auto lg:my-20 ">
      {translation.paragrafi.map((p, i) => {
        return (
          <div
            className="flex flex-col items-start justify-start gap-8"
            key={i}
          >
            <h2 className="text-4xl font-bold text-main md:text-5xl fxl:text-6xl 3xl:text-7xl">
              {p.title}
            </h2>
            {p.descrizione.map((el, j) => {
              return (
                <div
                  className="flex flex-col gap-4 text-lg font-normal text-main/80 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal"
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
      <div className="w-full h-[0.08rem] bg-main/20"></div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {translation.paragrafi2.map((p, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-8"
              key={i}
            >
              <h2 className="text-4xl font-bold text-main md:text-5xl fxl:text-6xl 3xl:text-7xl">
                {p.title}
              </h2>
              {p.descrizione.map((el, j) => {
                return (
                  <div
                    className="flex flex-col gap-4 text-lg font-normal text-main/80 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal"
                    key={j} // Aggiunta della key per l'elemento interno
                  >
                    <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="relative w-full h-full aspect-square">
          <Image
            src="/assets/nonno.webp"
            alt="nonno"
            fill
            className="object-cover object-top rounded-sm"
          />
        </div>
      </div>
      <div className="w-full h-[0.08rem] bg-main/20"></div>

      <div>
        {translation.paragrafi3.map((p, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-8"
              key={i}
            >
              <h2 className="text-4xl font-bold text-main md:text-5xl fxl:text-6xl 3xl:text-7xl">
                {p.title}
              </h2>
              {p.descrizione.map((el, j) => {
                return (
                  <div
                    className="flex flex-col gap-4 text-lg font-normal text-main/80 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal"
                    key={j} // Aggiunta della key per l'elemento interno
                  >
                    <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sections1;
