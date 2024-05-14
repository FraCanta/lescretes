import React from "react";

const Sections1 = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-screen  flex-col justify-start items-start gap-[50px] md:gap-20 fxl:gap-20 flex mx-auto mt-20 xl:mt-0">
      {translation.paragrafi.map((p, i) => {
        return (
          <div
            className="flex-col justify-start items-start gap-8 flex"
            key={i}
          >
            <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold 3xl:text-7xl">
              {p.title}
            </h2>
            {p.descrizione.map((el, i) => {
              return (
                <div className=" text-main text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal flex flex-col gap-4">
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
