import Link from "next/link";
import React from "react";

const CtaPrimary = ({ link, children }) => {
  return (
    <Link
      href={link}
      title="I miei articoli"
      className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 xl:text-[1rem] 2xl:text-[1.2rem]  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow  text-white hover:transition-all  bg-[#4A4A49]"
    >
      {children}
    </Link>
  );
};

export default CtaPrimary;
