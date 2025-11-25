import Image from "next/image";
import React from "react";

const Sections1 = ({ translation }) => {
  return (
    <div className="w-[90%] flex-col justify-start items-start gap-[50px] md:gap-20 fxl:gap-20 flex mx-auto my-20 ">
      <div>
        {translation.paragrafi2.map((p, i) => {
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
                    className="flex flex-col gap-4 text-lg font-normal text-main/80 md:text-xl fxl:text-xl 3xl:text-4xl 3xl:leading-normal"
                    key={j} // Aggiunta della key per l'elemento interno
                  >
                    <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* <div className="relative w-full h-full aspect-square">
          <Image
            src="/assets/nonno.webp"
            alt="nonno"
            fill
            className="object-cover object-top rounded-sm"
          />
        </div> */}
      </div>

      <div className="w-full h-[0.08rem] bg-main/20"></div>

      <div>
        {translation.paragrafi3.map((p, i) => {
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
      </div>
    </div>
  );
};

export default Sections1;
