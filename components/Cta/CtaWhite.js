import Link from "next/link";
import React from "react";

const CtaWhite = ({ link, children, title }) => {
  return (
    <Link
      title={title}
      href={link}
      className="text-center  font-bold py-2.5 px-6 2xl:py-3 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-xl 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-main hover:transition-all  bg-white w-full max-w-max"
    >
      {children}
    </Link>
  );
};

export default CtaWhite;
