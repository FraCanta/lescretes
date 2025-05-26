import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Logo from "@/public/logo/logo.png";
import Mobile from "./mobile";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = ({ translation }) => {
  const { locale, pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [degOpen, setDegOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuRef = useRef(null); // Riferimento per il sottomenu
  const degRef = useRef(null); // Riferimento per il sottomenu
  useEffect(() => {
    // Funzione per gestire il clic esterno
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (degRef.current && !degRef.current.contains(event.target)) {
        setDegOpen(false);
      }
    };

    // Aggiunge l'event listener per i clic
    document.addEventListener("mousedown", handleClickOutside);

    // Rimuove l'event listener quando il componente viene smontato
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="relative">
      <nav className="h-[60px] md:h-[100px] lg:h-[70px] xl:h-[90px] fxl:h-[100px] 3xl:h-[180px] 4xl:h-[250px]  flex w-full items-center justify-between relative z-[999999] nav-scroll ">
        <div className="flex w-[90%] mx-auto justify-between items-center">
          <div className="xl:flex items-center hidden font-black text-[#4A4A49] flex-1">
            <div className="flex items-center gap-8 font-black xl:gap-4 2xl:gap-8 3xl:gap-14">
              <div className="group" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Scopri la nostra identità"
                  title="Scopri la nostra identità"
                  className=" text-[16px] md:text-[1.2rem] xl:text-[1rem] uppercase fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular flex items-center"
                >
                  {translation?.[locale]?.storia.name}{" "}
                  <Icon
                    icon="ei:chevron-down"
                    className="w-6 h-6 3xl:w-10 3xl:h-10"
                  />
                </button>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-100%" }}
                      transition={{
                        type: "linear",
                        durantion: 0.3,
                      }}
                      className="absolute top-0 left-0 right-0 mt-[80px] w-full h-[50vh]  3xl:mt-[150px]  bg-white  transition-all p-6"
                    >
                      <div className="w-[90%] mx-auto grid grid-cols-2 justify-center h-full items-center ">
                        <div className="flex flex-col gap-6 text-2xl xl:text-xl 2xl:text-2xl 3xl:text-4xl 3xl:gap-10">
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
                className="text-[16px] md:text-[1.2rem]  xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular uppercase flex items-center"
              >
                {translation?.[locale]?.vini}
              </Link>

              <Link
                href={`/cosmesi`}
                title="La nostra cosmesi"
                className="text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular uppercase flex items-center"
              >
                {translation?.[locale]?.cosmesi}
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href={`/`} title="Torna all'homepage di Les Crêtes" as="/">
              <Image
                src={Logo}
                alt="Logo di Les Crêtes"
                className="w-[100px] md:w-[150px] lg:w-[110px] xl:w-[125px] 2xla:w-[140px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
              />
            </Link>
          </div>
          <div className="items-center justify-end flex-1 hidden gap-8 font-black xl:gap-4 2xl:gap-8 xl:flex">
            <div className="group" ref={degRef}>
              <button
                onClick={() => setDegOpen(!degOpen)}
                title="Scopri le nostre degustazioni e come regalarle"
                aria-label="Scopri le nostre degustazioni, eventi, orari e contatti e come regalare le nostre esperienze"
                className=" text-[16px] md:text-[1.2rem] uppercase xl:text-[1rem]  fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular flex items-center"
              >
                {translation?.[locale]?.degustazioni.name}{" "}
                <Icon
                  icon="ei:chevron-down"
                  className="w-6 h-6 3xl:w-10 3xl:h-10"
                />
              </button>
              <AnimatePresence>
                {degOpen && (
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      type: "linear",
                      durantion: 0.3,
                    }}
                    className="absolute top-0 left-0 right-0 mt-[80px] w-full h-[50vh] 3xl:mt-[150px]  bg-white  transition-all p-6"
                  >
                    <div className="w-[90%] mx-auto grid grid-cols-2 justify-center h-full items-center ">
                      <div className="flex flex-col gap-6 text-2xl 3xl:text-4xl 3xl:gap-10">
                        {translation?.[locale]?.degustazioni.sottomenu.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="cursor-pointer"
                              onMouseEnter={() => setHoveredItem(index)}
                              onMouseLeave={() => setHoveredItem(null)}
                            >
                              {item.link ? (
                                <Link
                                  href={item.link}
                                  title={item.title}
                                  className="inline-flex items-center gap-2"
                                >
                                  {item.name}
                                  {item.badge && (
                                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium uppercase rounded-md text-main bg-main/10 ring-1 ring-main/20 ring-inset">
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              ) : (
                                <h6 className="inline-flex items-center gap-2 text-main">
                                  {item.name}
                                  {item.badge && (
                                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium uppercase rounded-md text-main bg-main/10 ring-1 ring-main/20 ring-inset">
                                      {item.badge}
                                    </span>
                                  )}
                                </h6>
                              )}
                            </div>
                          )
                        )}
                      </div>

                      <div className="relative flex justify-end w-full h-full py-6">
                        {hoveredItem !== null &&
                          translation?.[locale]?.degustazioni.sottomenu[
                            hoveredItem
                          ]?.imgSrc && (
                            <Image
                              src={
                                translation?.[locale]?.degustazioni.sottomenu[
                                  hoveredItem
                                ].imgSrc
                              }
                              alt={
                                translation?.[locale]?.degustazioni.sottomenu[
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
              href={`/regala-una-degustazione`}
              title="Regala una degustazione"
              className="text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular uppercase flex items-center"
            >
              {translation?.[locale]?.gift}
            </Link>

            <Link
              href={`/store-locator`}
              title="Dove poter acquistare"
              className="gap-1 3xl:mr-12 4xl:mr-16 text-[16px] md:text-[1.2rem] xl:text-[1rem] fxl:text-[25px]  3xl:text-[35px] 4xl:text-[55px]  text-main font-regular uppercase flex items-center"
            >
              {translation?.[locale]?.store}
            </Link>
            <LanguageSwitcher />
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
