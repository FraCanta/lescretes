import React from "react";
import Tabs from "./Tabs";

const Sections4 = ({ translation, tabs }) => {
  return (
    <>
      <div className="w-full  flex flex-col gap-4 py-[50px] lg:py-[90px] min-h-screen justify-center ">
        <div className="w-[90%] mx-auto flex flex-col gap-6">
          <h2 className="text-main text-4xl md:text-5xl  lg:text-[43.12px] fxl:text-[55px] 3xl:text-7xl font-bold  ">
            {translation.title}
          </h2>
          <p
            className="lg:w-[90%] text-main/80 text-lg  fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal"
            dangerouslySetInnerHTML={{ __html: translation.descrizione }}
          ></p>
        </div>

        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default Sections4;
