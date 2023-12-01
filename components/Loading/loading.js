// components/Loading.js

import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen bg-main  flex justify-center items-center"
    >
      <h1 className="text-white">Loading...</h1>
      {/* Aggiungi qui qualsiasi altra animazione o contenuto desiderato */}
    </motion.div>
  );
};

export default Loading;
