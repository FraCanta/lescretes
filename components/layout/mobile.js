import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitccher";
const Mobile = ({ translation }) => {
  const { locale, pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [degOpen, setDegOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const svgVariants = {
    closed: {
      path: "M4 6h16M4 12h16M4 18h16",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    open: {
      path: "M6 18L18 6M6 6l12 12",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const variants = {
    open: { opacity: 1, height: "100vh", transition: { duration: 0.5 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    item: { opacity: 0, y: 100, transition: { duration: 0.5 } },
    visibleItem: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center gap-6">
      <LanguageSwitcher />
      <motion.div id="close" onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={open ? svgVariants.open.path : svgVariants.closed.path}
            variants={svgVariants}
          />
        </svg>
      </motion.div>

      {/* Conditionally render the menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className=" absolute top-[60px] left-0 right-0 bg-white min-h-screen w-screen text-main overflow-hidden   bg-pattern2 divide-y"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
            }}
          >
            <ul className="w-[90%] mx-auto h-full  flex flex-col gap-10">
              {" "}
              {/* Add your menu items here */}
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/`}
                  title="Torna alla Homepage"
                  className={`menu-item block  overflow-hidden text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.home}
                </Link>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="menu-item flex text-[25px] md:text-4xl leading-[30px] font-regular text-main items-center w-full justify-between"
                >
                  {translation?.[locale]?.storia.name}
                  <Icon icon="ei:chevron-right" className="w-[30px] h-[30px]" />
                </button>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                      }}
                      className="fixed top-0 left-0 z-50 w-full h-screen py-10 bg-white"
                    >
                      <div className="w-[90%] mx-auto divide-y divide-third/30">
                        {/* Header del sottomenù */}
                        <div className="grid items-center grid-cols-3 pb-6 text-center">
                          <Icon
                            icon="ei:chevron-left"
                            className="w-[30px] h-[30px] cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                          />
                          <h2 className="text-[25px] md:text-4xl leading-[30px] font-regular text-main">
                            {translation?.[locale]?.storia.name}
                          </h2>
                          <div></div>
                        </div>
                        {/* Contenuto del sottomenù */}
                        <div className="flex flex-col text-2xl divide-y divide-third/30">
                          {translation?.[locale]?.storia.sottomenu.map(
                            (item, index) => (
                              <div key={index} className="py-6">
                                <Link href={item.link} title={item.title}>
                                  {item.name}
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/i-vini`}
                  title="I vini di Les Crêtes"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/i-vini" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.vini}
                </Link>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <button
                  onClick={() => setDegOpen(!degOpen)}
                  className="menu-item flex text-[25px] md:text-4xl leading-[30px] font-regular text-main items-center w-full justify-between"
                >
                  {translation?.[locale]?.degustazioni.name}{" "}
                  <Icon icon="ei:chevron-right" className="w-[30px] h-[30px]" />
                </button>
                <AnimatePresence>
                  {degOpen && (
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 30,
                      }}
                      className="absolute top-0 left-0 right-0 w-full h-screen py-10 bg-white"
                    >
                      <div className="w-[90%] mx-auto divide-y divide-third/30">
                        <div className="grid items-center grid-cols-3 pb-6 text-center">
                          <Icon
                            icon="ei:chevron-left"
                            className="w-[30px] h-[30px]"
                            onClick={() => setDegOpen(!degOpen)}
                          />
                          <h2 className="text-[25px] md:text-4xl leading-[30px] font-regular text-main">
                            {translation?.[locale]?.degustazioni.name}
                          </h2>
                          <div></div>
                        </div>
                        <div className="flex flex-col text-2xl divide-y divide-third/30">
                          {translation?.[locale]?.degustazioni.sottomenu.map(
                            (item, index) => (
                              <div key={index} className="py-6">
                                <Link href={item.link} title={item.title}>
                                  {item.name}
                                </Link>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              {/* <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/notizie`}
                title="I miei articoli"
                className={`menu-item block  text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/notizie" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.news}
              </Link>
            </motion.div> */}
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/cosmesi`}
                  title="DeVin cosmesi"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/cosmesi" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.cosmesi}
                </Link>
              </motion.li>
              {/* <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/areaDownload`}
                title="I miei articoli"
                className={`menu-item gap-2   text-[25px] md:text-4xl leading-[30px] font-regular text-main flex items-center ${
                  pathname === "/areaDownload" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.download}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 md:w-6 md:h-6 3xl:w-8 3xl:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </Link>
            </motion.div> */}
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href="/contatti"
                  title="Come raggiungerci e contattarci"
                  className={`menu-item block   text-[25px] md:text-4xl leading-[30px] font-regular text-main ${
                    pathname === "/contatti" ? "font-bold" : ""
                  }`}
                >
                  {translation?.[locale]?.contatti}
                </Link>
              </motion.li>
              <motion.li variants={variants.item} animate="visibleItem">
                <Link
                  href={`/store-locator`}
                  title="Dove comprare e trovare i vini"
                  className={`menu-item flex  text-[25px] leading-[30px] font-regular text-main items-start gap-1 ${
                    pathname === "/store-locator" ? "font-bold" : ""
                  }`}
                >
                  <Icon
                    icon="line-md:map-marker-alt-filled"
                    className="w-6 h-6"
                  />
                  {translation?.[locale]?.store}
                </Link>
              </motion.li>
              <motion.div
                ariants={variants.item}
                animate="visibleItem"
                className="my-10 text-center md:py-4"
              >
                <h3 className="text-[20px] md:text-3xl font-bold">
                  Les Crêtes
                </h3>
                <p className="text-[14px] md:text-xl">
                  SR20, 5011010 Aymavilles (AO) <br /> Valle d’Aosta, Italia
                </p>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
