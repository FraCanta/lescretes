import Link from "next/link";
import React from "react";

const CtaOutlineBrown = ({ link, children, title }) => {
  return (
    <Link
      href={link}
      title={title}
      className="flex items-center uppercase gap-2 text-main  w-full max-w-max text-center  text-base font-bold leading-snug py-2.5 px-6 2xl:py-3 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8  fxl:text-xl 3xl:text-2xl rounded-[32px] border-2 border-main hover:bg-main hover:text-white"
    >
      {children}
    </Link>
  );
};

export default CtaOutlineBrown;
