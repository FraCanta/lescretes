import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Tabs = ({ translation }) => {
  const [activeTab, setActiveTab] = useState(0);

  const openCity = (index) => {
    setActiveTab(index);
  };

  const lineMotion = {
    rest: { width: "0%", transition: { duration: 0.1 } },
    active: { width: "100%", transition: { duration: 0.1 } },
  };

  return (
    <div className="pt-20">
      <div className="flex flex-wrap gap-[20px]  !pl-0">
        {translation.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === index ? "tab-bordered tab-active" : "tab-bordered"
            }
            onClick={() => openCity(index)}
          >
            {tab.name}
            {activeTab === index && (
              <motion.div
                className="line-below-tab"
                variants={lineMotion}
                initial="rest"
                animate="active"
              />
            )}
          </button>
        ))}
      </div>
      {translation.map((tab, index) => (
        <motion.div // Usa motion.div anziché div
          key={index}
          id={tab.name}
          initial={{ opacity: 0, y: 20 }} // Aggiungi animazioni iniziali
          animate={{
            opacity: activeTab === index ? 1 : 0,
            y: activeTab === index ? 0 : 20,
            transition: { duration: 0.5 }, // Specifica la durata dell'animazione
          }}
          className={`w-full py-10 grid grid-cols-1 xl:grid-cols-4 gap-4 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          {tab.content.map((content, contentIndex) => (
            <Link
              href={content.link}
              key={contentIndex}
              className="w-full h-[450px] fxl:h-[450px] relative bg-[#F4F3EF] rounded-3xl hover:bg-main hover:text-white"
            >
              <div
                className="w-full h-[450px] fxl:h-[450px] left-0 top-0 relative bg-[#F4F3EF] rounded-3xl hover:bg-main hover:text-white"
                key={contentIndex}
              >
                <Image
                  className="object-contain left-20 top-[1.5rem] absolute w-[50%] h-[80%]"
                  src={content.img}
                  width={100}
                  height={100}
                  alt={content.name}
                />
                <p className="w-[100%] left-0 bottom-8 absolute text-center text-main text-[16px] font-bold  leading-snug">
                  {content.name}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Tabs;
