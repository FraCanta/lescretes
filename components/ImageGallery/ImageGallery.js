import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";
const images = [
  "/assets/rifugio/rifugio1.webp",
  "/assets/rifugio/rifugio2.webp",
  "/assets/rifugio/rifugio3.webp",
  "/assets/rifugio/rifugio4.webp",
  "/assets/rifugio/rifugio5.webp",
  "/assets/rifugio/rifugio6.webp",
  "/assets/rifugio/rifugio7.webp",
  "/assets/rifugio/rifugio8.webp",
  "/assets/rifugio/rifugio9.webp",
  "/assets/rifugio/rifugio10.webp",
];

const ImageGallery = () => {
  return (
    <>
      <div className="w-full mx-auto mb-20 lg:py-20 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="swiper_container"
        >
          {images?.map((el, i) => (
            <SwiperSlide className="relative swiper_slide" key={i}>
              <Image src={el} fill alt={`Image ${i}`} className="rounded-sm" />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ImageGallery;

// const Gallery3d2 = ({ imageArray }) => {
//   return (
//     <div className="w-full py-20 mx-auto lg:w-11/12">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 100,
//           depth: 150,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         modules={[EffectCoverflow]}
//         className="swiper_container"
//       >
//         {imageArray?.map((el, i) => (
//           <SwiperSlide className="relative swiper_slide" key={i}>
//             <Image src={el.src} alt="foto" fill />
//           </SwiperSlide>
//         ))}

//         <div className="slider-controler">
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Gallery3d2;
