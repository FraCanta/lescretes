// components/Tabs.js
import { useState } from "react";
import { motion } from "framer-motion";

const TabWine = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {tabs.map((tab, index) => (
        <motion.div
          key={index}
          className={`cursor-pointer px-4 py-2 ${
            index === activeTab ? "bg-main text-white" : "bg-white text-main"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeTab(index)}
        >
          {tab.title}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TabWine;
