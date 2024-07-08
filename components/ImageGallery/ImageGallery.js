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
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* <div className="grid w-full grid-cols-2 gap-4 mx-auto my-8 lg:grid-cols-4 lg:my-16">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full rounded-lg"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-opacity-75 bg-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.img
              key={selectedImage}
              src={images[selectedImage]}
              alt={`Selected Image ${selectedImage}`}
              className="w-[250px] md:w-[400px] h-auto"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence> */}
      <div className="w-full py-20 mx-auto ">
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
              <Image src={el} fill alt={`Image ${i}`} />
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
