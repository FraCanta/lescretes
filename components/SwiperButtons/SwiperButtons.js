import { Icon } from "@iconify/react";
import React from "react";
import { useSwiper } from "swiper/react";
function SwiperButtons() {
  const swiper = useSwiper();
  if (!swiper) return null;
  return (
    <div className="justify-end hidden w-full gap-4 py-6 md:flex">
      {" "}
      <button
        className="p-2 bg-white rounded-full shadow-sm prev"
        onClick={() => swiper.slidePrev()}
      >
        <Icon
          icon="iconamoon:arrow-left-1-thin"
          width={30}
          className="text-main"
        />
      </button>
      <button
        className="z-10 p-2 bg-white rounded-full shadow-sm next"
        onClick={() => swiper.slideNext()}
      >
        <Icon
          icon="iconamoon:arrow-right-1-thin"
          width={30}
          className="text-main"
        />
      </button>
    </div>
  );
}

export default SwiperButtons;
