import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // Importa il componente motion
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import Link from "next/link";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const openCity = (index) => {
    setActiveTab(index);
  };

  const lineMotion = {
    rest: { width: "0%", transition: { duration: 0.1 } },
    active: { width: "100%", transition: { duration: 0.1 } },
  };

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const body = document.body;
    const toggleClass = "show-custom-cursor";

    function pointermoveHandler(e) {
      const target = e.target;
      if (
        e.target.closest(".carousel-wrapper") &&
        window.matchMedia("(hover: hover)").matches
      ) {
        body.classList.add(toggleClass);
        cursor.style.setProperty("--cursor-x", `${e.clientX}px`);
        cursor.style.setProperty("--cursor-y", `${e.clientY}px`);
      } else {
        body.classList.remove(toggleClass);
      }
    }
    document.addEventListener("pointermove", pointermoveHandler);
  }, []);

  return (
    <div className="pt-10">
      {/* Tab links */}
      <div className="flex flex-wrap gap-[20px] !pl-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === index ? "tab-bordered tab-active " : "tab-bordered "
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

      {/* Tab content */}
      {tabs.map((tab, index) => (
        <motion.div // Usa motion.div anziché div
          key={index}
          id={tab.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: activeTab === index ? 1 : 0,
            y: activeTab === index ? 0 : 20,
            transition: { duration: 0.5 },
          }}
          exit={{ opacity: 0, y: 20 }}
          className={`w-full py-10 gap-4 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Pagination]}
            className="carousel-wrapper"
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.6,
                spaceBetween: 20,
              },
              2500: {
                slidesPerView: 4.5,
                spaceBetween: 50,
              },
            }}
          >
            {tab.content.map((content, contentIndex) => (
              <SwiperSlide key={contentIndex}>
                <Link
                  href={content.link}
                  key={contentIndex}
                  className="w-full h-[450px] fxl:h-full relative bg-[#F4F3EF] rounded-3xl hover:bg-main hover:text-white "
                >
                  <motion.div // Usa motion.div anziché div
                    className="w-full h-[450px] fxl:h-[500px] relative"
                  >
                    <div className="w-full h-[450px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-lg hover:bg-main" />

                    <Image
                      className="object-contain left-0 top-[1.5rem] absolute w-full h-[80%]"
                      src={content.img}
                      width={100}
                      height={100}
                    />
                    <p className="w-[100%] left-0 bottom-8 absolute text-center text-main text-[16px] fxl:text-[22px] font-bold  leading-snug z-10">
                      {content.name}
                    </p>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
            <div className="relative w-full mt-16 block lg:hidden">
              <div class="swiper-pagination mt-10"></div>
            </div>
          </Swiper>
        </motion.div>
      ))}
      <div class="cursor">
        <img
          width="40"
          height="42"
          src="https://assets.codepen.io/162656/cursor-swipe.svg"
          alt="swipe indicator"
        />
      </div>
    </div>
  );
};

export default Tabs;
