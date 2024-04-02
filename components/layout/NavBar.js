import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/public/logo/logo.png";
import Mobile from "./mobile";
import CtaPrimary from "../Cta/CtaPrimary";
const NavBar = ({ translation }) => {
  const { locale } = useRouter();

  return (
    <header className="relative">
      <nav className="h-[60px] md:h-[100px] lg:h-[70px] xl:h-[90px] fxl:h-[100px] 3xl:h-[180px] 4xl:h-[250px] 3xl flex w-full items-center justify-between relative z-[999999] nav-scroll ">
        <div className="flex w-[90%] mx-auto justify-between items-center ">
          <div className="flex-1">
            <Link href={`/`} title="Home Page">
              <Image
                src={Logo}
                alt="logo"
                className="w-[85px] md:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[100px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
              />
            </Link>
          </div>

          <div className="xl:flex items-center  hidden capitalize flex-1 font-black text-[#4A4A49]">
            <div className="w-full flex items-center justify-end">
              <Link
                href={`/`}
                title="Scopri chi sono e cosa posso fare per te"
                className="mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.home}
              </Link>

              <Link
                href={`/storia`}
                title="Ecco tutti i miei servizi"
                className="mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.storia}
              </Link>
              <Link
                href={`/vini`}
                title="Guarda tutti i miei casi studio"
                className="mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.vini}
              </Link>
              <Link
                href={`/degustazioni`}
                title="I miei articoli"
                className="mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.degustazioni}
              </Link>
              {/* <Link
                href={`/notizie`}
                title="I miei articoli"
                className="mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.news}
              </Link> */}
              <Link
                href={`/cosmesi`}
                title="I miei articoli"
                className="text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.cosmesi}
              </Link>
            </div>
          </div>
          <div className="xl:flex items-center justify-end flex-1  hidden font-black">
            <Link
              href={`/areaDownload`}
              title="I miei articoli"
              className="flex items-center gap-1 3xl:gap-2 mr-[2.35rem] 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
            >
              {translation?.[locale]?.download}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 3xl:w-8 3xl:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </Link>
            <CtaPrimary link="/contatti">
              {translation?.[locale]?.contatti}
            </CtaPrimary>
          </div>
          <div className="text-main flex items-center justify-end py-1 xl:hidden ">
            <Mobile translation={translation} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
