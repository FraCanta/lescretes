import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/public/logo/logo.png";
import Mobile from "./mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const NavBar = ({ translation }) => {
  const { locale, pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="relative">
      <nav className="h-[60px] md:h-[100px] lg:h-[70px] xl:h-[90px] fxl:h-[100px] 3xl:h-[180px] 4xl:h-[250px] 3xl flex w-full items-center justify-between relative z-[999999] nav-scroll ">
        <div className="flex w-[90%] mx-auto justify-between items-center">
          <div>
            <Link href={`/`} title="Torna all'homepage di Les Crêtes" as="/">
              <Image
                src={Logo}
                alt="Logo di Les Crêtes"
                className="w-[85px] md:w-[150px] lg:w-[110px] xl:w-[130px] 2xl:w-[120px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
                priority
              />
            </Link>
          </div>
          <div className="xl:flex items-center hidden font-black text-[#4A4A49] ">
            <div className="flex items-center gap-8">
              <div className="group">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className=" text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular flex items-center"
                >
                  {translation?.[locale]?.storia.name}{" "}
                  <Icon icon="ei:chevron-down" className="w-6 h-6" />
                </button>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute top-0 left-0 right-0 mt-[80px] w-full h-[50vh]  bg-white  transition-all p-6"
                    >
                      <div className="w-[90%] mx-auto grid grid-cols-2 justify-center h-full items-center ">
                        <div className="flex flex-col gap-6 text-2xl">
                          {translation?.[locale]?.storia.sottomenu.map(
                            (item, index) => (
                              <div
                                key={index}
                                className="cursor-pointer"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                              >
                                <Link href={item.link} title={item.title}>
                                  {item.name}
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                        <div className="relative flex justify-end w-full h-full py-6">
                          {hoveredItem !== null && (
                            <Image
                              src={
                                translation?.[locale]?.storia.sottomenu[
                                  hoveredItem
                                ].imgSrc
                              }
                              alt={
                                translation?.[locale]?.storia.sottomenu[
                                  hoveredItem
                                ].name
                              }
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href={`/i-vini`}
                title="I nostri vini"
                className="text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.vini}
              </Link>
              <Link
                href={`/le-degustazioni`}
                title="Le nostre degustazioni"
                className={`text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center${
                  pathname === "/i-vini"
                    ? "underline underline-offset-4 decoration-main"
                    : ""
                }`}
              >
                {translation?.[locale]?.degustazioni}
              </Link>

              <Link
                href={`/cosmesi`}
                title="La nostra cosmesi"
                className="text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
              >
                {translation?.[locale]?.cosmesi}
              </Link>
            </div>
          </div>

          <div className="items-center justify-end hidden gap-8 font-black xl:flex">
            {/* <Link
              href={`/notizie`}
              title="I miei articoli"
              className="text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
            >
              {translation?.[locale]?.news}
            </Link> */}
            {/* <Link
              href={`/areaDownload`}
              title="I miei articoli"
              className="mr-[1rem] gap-2 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
            >
              {translation?.[locale]?.download}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 fxl:w-5 fxl:h-5 3xl:w-8 3xl:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </Link> */}

            <Link
              href="/contatti"
              title="Pagina info e contatti"
              className="mr-[1rem] gap-2 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-center"
            >
              {translation?.[locale]?.contatti}
            </Link>
            <Link
              href={`/store-locator`}
              title="Dove poter acquistare"
              className="gap-1 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1.2rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular capitalize flex items-start"
            >
              <Icon icon="line-md:map-marker-alt-filled" className="w-6 h-6" />
              {translation?.[locale]?.store}
            </Link>
          </div>
          <div className="flex items-center justify-end py-1 text-main xl:hidden ">
            <Mobile translation={translation} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
