// components/Loading.js

import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="h-screen bg-main  flex justify-center items-center relative"
    >
      <Image
        src={Pattern}
        fill
        className="object-cover mix-blend-luminosity opacity-10 w-screen h-screen"
      />
      <h1 className="text-8xl text-white">Les Cretes</h1>
    </motion.div>
  );
};

export default Loading;
