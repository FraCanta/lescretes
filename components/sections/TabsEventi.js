import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const TabsEventi = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");

  // Eventi raggruppati mantenendo il mese del tab
  const allEvents = useMemo(() => {
    return tabs.flatMap((tab) =>
      tab.content.map((item) => ({
        ...item,
        month: item.month || tab.name,
        day: item.day,
      }))
    );
  }, [tabs]);

  const mesiDisponibili = useMemo(() => tabs.map((tab) => tab.name), [tabs]);

  const eventiFiltrati = useMemo(() => {
    return allEvents.filter((e) => e.month === activeTab);
  }, [activeTab, allEvents]);

  return (
    <div className="pt-10">
      {/* Tabs */}
      <div className="flex items-center gap-4 lg:gap-6 !px-5 lg:!px-0 overflow-x-auto whitespace-nowrap w-[90%] mx-auto tabs relative">
        {mesiDisponibili.map((mese, index) => (
          <button
            key={index}
            className={
              activeTab === mese ? "tab-bordered tab-active" : "tab-bordered"
            }
            onClick={() => setActiveTab(mese)}
          >
            {mese}
          </button>
        ))}
        {/* Navigation arrows */}
        <div className="hidden gap-4 py-6 ml-auto lg:flex">
          <button className="p-2 bg-white hover:rounded-full hover:bg-second prev">
            <Icon icon="prime:chevron-left" width={30} className="text-main" />
          </button>
          <button className="p-2 bg-white hover:rounded-full hover:bg-second next">
            <Icon icon="prime:chevron-right" width={30} className="text-main" />
          </button>
        </div>
      </div>

      {/* Swiper Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className="w-[90%] mx-auto lg:w-full gap-4 overflow-visible tabcontent"
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
            className="lg:!pl-20"
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              2500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {eventiFiltrati.map((event, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={event.link || ""}
                  title={event.name}
                  aria-label={event.name}
                  className={`${
                    event.link
                      ? "flex flex-col justify-between h-full bg-white rounded-xs text-main cursor-pointer"
                      : "flex flex-col justify-between h-full bg-white rounded-xs text-main cursor-not-allowed"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-full h-auto overflow-hidden rounded-xs aspect-square lg:aspect-video">
                      <Image
                        src={event.img}
                        alt={event.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-main/30"></div>
                      <p className="absolute px-2 py-1 mt-1 text-sm tracking-widest uppercase rounded text-main top-2 right-2 bg-second">
                        {event.day} {event.month}
                      </p>
                      <h3 className="absolute px-2 py-1 text-xl font-bold text-white uppercase rounded bottom-2 left-2 ">
                        {event.name}
                      </h3>
                    </div>
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
    </div>
  );
};

export default TabsEventi;
