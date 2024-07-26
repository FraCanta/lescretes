import Link from "next/link";
import React from "react";

const CtaOutlineBrown = ({ link, children, title }) => {
  return (
    <Link
      href={link}
      title={title}
      className="flex items-center text-xl  gap-2 text-main  w-full max-w-max text-center  md:text-xl font-bold leading-snug py-2.5 px-6 2xl:py-3 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main hover:bg-main hover:text-white"
    >
      {children}
    </Link>
  );
};

export default CtaOutlineBrown;
