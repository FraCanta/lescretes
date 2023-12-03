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
            className="menu-container absolute top-full right-0 bg-white h-screen w-screen text-main  px-4 flex flex-col justify-center items-center"
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Add your menu items here */}
            <motion.div variants={variants.item} animate="visibleItem">
              <Link
                href={`/`}
                title="Scopri chi sono e cosa posso fare per te"
                className={`menu-item block my-4 text-3xl font-regular text-main ${
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
                className={`menu-item block my-4 text-3xl font-regular text-main ${
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
                className={`menu-item block my-4 text-3xl font-regular text-main ${
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
                className={`menu-item block my-4 text-3xl font-regular text-main ${
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
                className={`menu-item block my-4 text-3xl font-regular text-main ${
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
                className={`menu-item block my-4 text-3xl font-regular text-main ${
                  pathname === "/cosmesi" ? "font-bold" : ""
                }`}
              >
                {translation?.[locale]?.cosmesi}
              </Link>
            </motion.div>
            {/* ... (other menu items) */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
