import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const openCity = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="pt-10">
      {/* Tab links */}
      <div className="tabs !pl-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              activeTab === index ? "tab-bordered tab-active" : "tab-bordered"
            }
            onClick={() => openCity(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tabs.map((tab, index) => (
        <div
          key={index}
          id={tab.name}
          className={`w-full py-10 gap-4 ${
            activeTab === index ? "tabcontent" : "tabcontent hidden"
          }`}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // grabCursor={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {tab.content.map((content, contentIndex) => (
              <SwiperSlide>
                <div
                  className="w-full h-[450px] fxl:h-[500px] relative"
                  key={contentIndex}
                >
                  <div className="w-full h-[450px] fxl:h-[500px] left-0 top-0 absolute bg-[#F4F3EF] rounded-3xl hover:bg-main" />

                  <Image
                    className="object-contain left-20 top-[1.5rem] absolute w-[50%] h-[80%]"
                    src={content.img}
                    width={100}
                    height={100}
                  />
                  <p className="w-[100%] left-0 bottom-8 absolute text-center text-main text-[18px] font-bold  leading-snug">
                    {content.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
