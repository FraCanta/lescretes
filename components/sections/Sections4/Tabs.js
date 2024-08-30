import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const openCity = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="pt-10">
      {/* Tab links */}
      <div className="flex items-center gap-4 lg:gap-6 !px-5 lg:!px-0 overflow-x-auto whitespace-nowrap w-[90%] mx-auto tabs relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            title={tab.name}
            className={
              activeTab === index ? "tab-bordered tab-active " : "tab-bordered "
            }
            onClick={() => openCity(index)}
          >
            {tab.name}
          </button>
        ))}
        {/* Navigation Buttons */}
        <div className="hidden gap-4 py-6 ml-auto lg:flex">
          <button className="p-2 bg-white hover:rounded-full hover:bg-second prev">
            <Icon
              icon="iconamoon:arrow-left-1-thin"
              width={30}
              className="text-main"
            />
          </button>
          <button className="p-2 bg-white hover:rounded-full hover:bg-second next">
            <Icon
              icon="iconamoon:arrow-right-1-thin"
              width={30}
              className="text-main"
            />
          </button>
        </div>
      </div>

      {/* Tab content */}
      {tabs.map((tab, index) => (
        <motion.div
          key={index}
          id={tab.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeTab === index ? 1 : 0,
            y: activeTab === index ? 0 : 20,
            transition: { duration: 0.5 },
          }}
          exit={{ opacity: 0, y: 20 }}
          className={`w-[90%] mx-auto lg:w-full gap-4 overflow-visible ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          <div className="relative w-full overflow-visible">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop
              className="lg:!px-20"
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                820: {
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1500: {
                  slidesPerView: 3.4,
                  spaceBetween: 20,
                },
                2500: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {tab.content.map((content, contentIndex) => (
                <SwiperSlide key={contentIndex}>
                  <Link
                    href={content.link}
                    className="flex flex-col gap-6 items-center justify-between h-[600px] p-10 rounded-sm bg-pattern2 bg-second"
                    key={contentIndex}
                  >
                    <div className="flex flex-col items-center justify-center w-full">
                      <p className="text-sm uppercase text-main/85 font-regular">
                        {content.type}
                      </p>
                      <h2 className="text-center text-main text-[20px] font-bold leading-snug fxl:text-xl">
                        {content.name}
                      </h2>
                      <p className="text-sm text-center text-main/60">
                        {content.vitigni}
                      </p>
                      <p className="p-1 text-xs border rounded-sm text-main/60 border-main/30">
                        {content.origine}
                      </p>
                    </div>
                    <div className="flex justify-center w-full">
                      <Image
                        className="object-contain"
                        src={content.img}
                        width={100}
                        height={100}
                        alt={content.name}
                      />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}

              <div className="relative flex w-full mt-10">
                <div className="mt-10 swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Tabs;
