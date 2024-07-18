// components/Tabs.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Table from "./Table";

const TabWine = ({ tabs }) => {
  console.log(tabs.content);
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const changeTab = (index) => {
    setActiveTab(index);
    setLightboxImageIndex(null);
  };

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const lineMotion = {
    rest: { width: "0%", transition: { duration: 0.1 } },
    active: { width: "100%", transition: { duration: 0.1 } },
  };

  return (
    <div className="pt-8 md:pt-20 w-full  min-h-[60vh]">
      <div
        className="flex gap-4  lg:gap-10  !px-5 lg:!px-0 overflow-x-auto whitespace-nowrap w-full  tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            className={`cursor-pointer md:py-1 relative !text-[18px] md:!text-[22px] fxl:!text-3xl ${
              activeTab === index ? "tab-bordered tab-active" : "tab-bordered"
            }`}
            onClick={() => changeTab(index)}
          >
            {tab.name ? <p>{tab.name}</p> : ""}
            {activeTab === index && (
              <motion.div
                className="line-below-tab"
                variants={lineMotion}
                initial="rest"
                animate="active"
              />
            )}
          </motion.button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <motion.div
          key={index}
          id={tab.name}
          initial={{ opacity: 0, y: 20 }} // Aggiungi animazioni iniziali
          animate={{
            opacity: activeTab === index ? 1 : 0,
            y: activeTab === index ? 0 : 20,
            transition: { duration: 0.5 }, // Specifica la durata dell'animazione
          }}
          className={`w-full py-6 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          <div className="text-main/70 !text-base md:!text-lg md:w-[90%] fxl:!text-2xl flex flex-col gap-6">
            {tab.content && Array.isArray(tab.content)
              ? tab.content.map((el, i) => (
                  <div key={i}>
                    {el.title && <h3 className="font-bold">{el.title}</h3>}
                    {el.text && <p>{el.text}</p>}
                    {el.table && (
                      <Table headers={el.table.headers} rows={el.table.rows} />
                    )}
                  </div>
                ))
              : ""}
          </div>

          {tab.content.images && tab.content.images.length > 0 ? (
            <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-4 md:w-[75%]">
              {tab.content.images
                ? tab.content.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="cursor-pointer"
                      onClick={() => openLightbox(imageIndex)}
                    >
                      <Image
                        src={image}
                        alt={`Tab ${index + 1} Image ${imageIndex + 1}`}
                        className="object-cover md:h-[300px] w-full"
                        width={500}
                        height={500}
                      />
                    </motion.div>
                  ))
                : ""}
            </div>
          ) : (
            ""
          )}
          {/* Lightbox */}
          <AnimatePresence>
            {lightboxImageIndex !== null &&
              tab.content.images &&
              tab.content.images[lightboxImageIndex] && (
                <motion.div
                  key="lightbox"
                  className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-[99] py-10"
                  onClick={closeLightbox}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div
                    className="fixed top-0 left-0 w-full h-full bg-main/60 "
                    onClick={closeLightbox}
                  ></div>
                  <Image
                    key={lightboxImageIndex}
                    src={tab.content.images[lightboxImageIndex]}
                    alt={`Tab ${activeTab + 1} Image ${lightboxImageIndex + 1}`}
                    width={600}
                    height={600}
                    className="z-[999] "
                  />
                </motion.div>
              )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default TabWine;
