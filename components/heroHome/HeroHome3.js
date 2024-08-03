import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaOutline from "../Cta/CtaOutline";
import CtaWhite from "../Cta/CtaWhite";
const HeroHome3 = ({ translation }) => {
  return (
    // <div className="w-[90%] h-full flex-col lg:justify-end items-start flex mx-auto py-20">
    //   <h1 className="w-full text-white font-bold xs:text-[45px] xs:leading-[45px] sm:text-[55px]  md:text-8xl lg:text-[40px] 2xl:text-[80px]  fxl:text-[80px] 3xl:text-[120px] ">
    //     {translation?.title}
    //   </h1>
    // </div>
    <AnimatePresence wait>
      <motion.div
        key="heroHome3"
        className="w-[90%] h-full flex-col  items-center flex mx-auto py-10 md:py-20"
        style={{
          backgroundImage: 'url("/assets/404.jpg")', // sostituisci con il percorso dell'immagine
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-main/20 "></div>
        <AnimatePresence>
          <motion.div
            className="flex flex-col gap-4 lg:gap-6 py-20 lg:py-24 3xl:py-56 w-[90%] mx-auto justify-center items-center text-center z-10 2xl:py-16 2xla:py-32"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.2,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h1
                key="h1"
                className="w-full text-center text-white font-bold text-5xl  md:text-7xl lg:text-[60px] xl:text-[70px] 2xla:text-[90px] fxl:text-[100px] 3xl:text-[140px] "
              >
                {translation?.title}
              </h1>
              <p className="text-lg text-white lg:text-xl xl:w-2/3 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal">
                Scopri l'autenticità e l'eccellenza dei nostri vini, frutto di
                un territorio unico e di un lavoro artigianale che esalta le
                tradizioni vitivinicole della Valle d'Aosta.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 lg:mt-4">
              <CtaOutline link="i-vini" title="Link pagina vini">
                Scopri i nostri vini
              </CtaOutline>{" "}
              <CtaWhite
                link="/le-degustazioni"
                title="Link pagina degustazioni"
              >
                Prenota un'esperienza
              </CtaWhite>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroHome3;
