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
      <div className="flex gap-4  lg:gap-10  !px-5 lg:!px-0 overflow-x-auto whitespace-nowrap w-full tabs">
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
            {/* {activeTab === index && (
              <motion.div
                className="line-below-tab"
                variants={lineMotion}
                initial="rest"
                animate="active"
              />
            )} */}
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
          className={`w-[90%] mx-auto lg:w-full pt-10 gap-4 ${
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
              820: {
                slidesPerView: 2.2,
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
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
            }}
          >
            {tab.content.map((content, contentIndex) => (
              <SwiperSlide key={contentIndex}>
                <Link
                  href={content.link}
                  title={content.name}
                  key={contentIndex}
                  className="w-full h-[450px] fxl:h-full 3xl:h-[800px] relative bg-[#F4F3EF] rounded-3xl hover:bg-main hover:text-white "
                >
                  <motion.div // Usa motion.div anziché div
                    className="w-full h-[450px] fxl:h-[500px] 3xl:h-[800px] relative"
                  >
                    <div className="w-full h-[450px] fxl:h-[500px] 3xl:h-[800px] left-0 top-0 absolute bg-[#F4F3EF] rounded-lg hover:bg-main" />

                    <Image
                      className="object-contain left-0 top-[1.5rem] absolute w-full h-[80%]"
                      src={content.img}
                      width={100}
                      height={100}
                      alt={content.name}
                    />
                    <p className="w-[100%] left-0 bottom-8 absolute text-center text-main text-[16px] fxl:text-[22px] 3xl:text-3xl font-bold  leading-snug z-10">
                      {content.name}
                    </p>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
            <div className="relative block w-full mt-16 md:hidden">
              <div className="mt-10 swiper-pagination"></div>
            </div>
          </Swiper>
        </motion.div>
      ))}
      <div className="hidden cursor lg:fixed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22 7h-5V5.5h2.9q-1.65-1.45-3.675-2.225T12 2.5q-2.2 0-4.225.775T4.1 5.5H7V7H2V2h1.5v2.025q1.8-1.475 3.975-2.25T12 1q2.35 0 4.525.775t3.975 2.25V2H22zM11.825 22q-.6 0-1.15-.225t-.975-.65L4.6 16l.75-.775q.4-.4.938-.537t1.062.012l1.65.475V7q0-.425.288-.712T10 6q.425 0 .713.288T11 7v7h1v-3q0-.425.288-.712T13 10q.425 0 .713.288T14 11v3h1v-2q0-.425.288-.712T16 11q.425 0 .713.288T17 12v2h1q0-.425.288-.712T19 13q.425 0 .713.288T20 14v4q0 1.65-1.175 2.825T16 22z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Tabs;
