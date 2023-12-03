import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
const Mobile = ({ translation }) => {
  const { locale, pathname } = useRouter();

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
    console.log(open);
  };
  return (
    <div className="flex items-center">
      <motion.div id="close" onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
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
            className="container absolute top-[60px] left-0 bg-white h-screen w-screen text-main  px-6 flex flex-col items-center  bg-pattern2"
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Add your menu items here */}
            <motion.div
              variants={variants.item}
              animate="visibleItem"
              className="mt-8"
            >
              <Link
                href={`/`}
                title="Scopri chi sono e cosa posso fare per te"
                className={`menu-item block  my-2 text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.home}
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/storia`}
                title="Ecco tutti i miei servizi"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/storia" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.storia}
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/vini`}
                title="Guarda tutti i miei casi studio"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/vini" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.vini}
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/degustazioni`}
                title="I miei articoli"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/degustazioni" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.degustazioni}
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/notizie`}
                title="I miei articoli"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/notizie" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.news}
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/cosmesi`}
                title="I miei articoli"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-main ${
                  pathname === "/cosmesi" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.cosmesi}
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/areaDownload`}
                title="I miei articoli"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-main flex items-center gap-2 ${
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
                  className="w-4 h-4 3xl:w-8 3xl:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </Link>
            </motion.div>
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/contatti`}
                title="I miei articoli"
                className={`menu-item block my-2 text-[25px] leading-[30px] font-regular text-white font-bold py-2.5 px-8 bg-main max-w-max rounded-[32px] ${
                  pathname === "/contatti" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.contatti}
              </Link>
            </motion.div>
            <motion.div
              ariants={variants.item}
              animate="visibleItem"
              className="mt-20 text-center"
            >
              <h3 className="text-[20px] font-bold">Les Crêtes</h3>
              <p className="text-[14px]">
                SR20, 5011010 Aymavilles (AO) <br /> Valle d’Aosta, Italia
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
