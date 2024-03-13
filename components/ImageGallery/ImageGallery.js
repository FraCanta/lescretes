import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/151",
  "https://via.placeholder.com/152",
  "https://via.placeholder.com/153",
  "https://via.placeholder.com/154",
  "https://via.placeholder.com/155",
  "https://via.placeholder.com/156",
  "https://via.placeholder.com/157",
  "https://via.placeholder.com/158",
  "https://via.placeholder.com/159",
  "https://via.placeholder.com/160",
  "https://via.placeholder.com/161",
  "https://via.placeholder.com/162",
  "https://via.placeholder.com/163",
  "https://via.placeholder.com/164",
  "https://via.placeholder.com/165",
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-[90%] mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden"
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
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center bg-main bg-opacity-75 justify-center z-50"
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
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
