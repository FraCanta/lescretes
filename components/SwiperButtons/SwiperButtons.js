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
        className="p-2 bg-white hover:rounded-full hover:bg-second prev"
        onClick={() => swiper.slidePrev()}
      >
        <Icon icon="prime:chevron-left" width={30} className="text-main" />
      </button>
      <button
        className="p-2 bg-white hover:rounded-full hover:bg-second next"
        onClick={() => swiper.slideNext()}
      >
        <Icon icon="prime:chevron-right" width={30} className="text-main" />
      </button>
    </div>
  );
}

export default SwiperButtons;
