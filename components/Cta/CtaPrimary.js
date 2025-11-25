import Link from "next/link";
import React from "react";

const CtaPrimary = ({ link, children, title }) => {
  return (
    <Link
      href={link}
      title={title}
      className="uppercase font-bold py-2.5 px-6 2xl:py-3 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-base    3xl:text-3xl rounded-[32px] shadow text-white hover:transition-all bg-main flex items-center gap-2"
    >
      {children}
    </Link>
  );
};

export default CtaPrimary;
