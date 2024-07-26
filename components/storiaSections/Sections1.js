import React from "react";

const Sections1 = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-screen  flex-col justify-start items-start gap-[50px] md:gap-20 fxl:gap-20 flex mx-auto mt-20 xl:mt-0">
      {translation.paragrafi.map((p, i) => {
        return (
          <div
            className="flex flex-col items-start justify-start gap-8"
            key={i}
          >
            <h2 className="text-3xl font-bold text-main md:text-5xl fxl:text-6xl 3xl:text-7xl">
              {p.title}
            </h2>
            {p.descrizione.map((el, j) => {
              return (
                <div
                  className="flex flex-col gap-4 text-xl font-normal text-main md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal"
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
  );
};

export default Sections1;
