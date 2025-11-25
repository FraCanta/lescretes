import Link from "next/link";
import React from "react";

const CtaOutline = ({ link, children, title }) => {
  return (
    <Link
      href={link}
      title={title}
      className="w-full uppercase flex items-center justify-center lg:w-max-content text-center  text-white text-base font-bold leading-snug py-2.5 px-6 2xl:py-3 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8  f 3xl:text-3xl rounded-[32px] border-2 border-white hover:bg-white hover:text-main transition-all max-w-max"
    >
      {children}
    </Link>
  );
};

export default CtaOutline;
