import Link from "next/link";
import React from "react";

const CtaOutline = ({ link, children, title }) => {
  return (
    <Link
      href={link}
      title={title}
      className="w-full flex items-center justify-center lg:w-max-content text-center capitalize text-white text-xl font-bold leading-snug py-2.5 px-6 2xl:py-3 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-white hover:bg-white hover:text-main transition-all"
    >
      {children}
    </Link>
  );
};

export default CtaOutline;
