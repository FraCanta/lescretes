import React from "react";
import Tabs from "./Tabs";

const Sections4 = ({ tabs }) => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col gap-4 py-[50px] lg:py-[90px] min-h-screen justify-center ">
        {" "}
        <h2 className="text-main text-[35px] leading-[36px] lg:text-[43.12px] font-bold  lg:leading-[55.10px]">
          I nostri vini di eccellenza
        </h2>
        <p className="lg:w-[60%] text-main lg:text-[21.56px] font-normal leading-9">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.{" "}
        </p>
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default Sections4;
