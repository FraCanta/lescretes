import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        className="w-[90%] h-full flex-col justify-end items-start flex mx-auto py-20 "
        initial={{ scale: 1.4 }} // zoom iniziale (puoi regolare questo valore)
        animate={{ scale: 1 }} // zoom finale (1 è la dimensione originale)
        exit={{ scale: 0.5 }} // zoom durante l'uscita
        transition={{ duration: 4, ease: "linear" }} // durata dell'animazione in secondi
        style={{
          backgroundImage: 'url("/assets/coteau.webp")', // sostituisci con il percorso dell'immagine
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          position: "relative",
          backgroundPosition: "top",
        }}
      >
        <AnimatePresence>
          <motion.h1
            key="h1"
            className="w-full text-white font-bold xs:text-[45px] xs:leading-[45px] sm:text-[55px]  md:text-8xl lg:text-[40px] 2xl:text-[80px]  fxl:text-[80px] 3xl:text-[120px] px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            {translation?.title}
          </motion.h1>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroHome3;
