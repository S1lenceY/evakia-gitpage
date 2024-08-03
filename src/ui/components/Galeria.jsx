import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Galery1 from "/Galeria/Galery1.webp";
import Galery2 from "/Galeria/Galery2.webp";
import Galery3 from "/Galeria/Galery3.webp";
import Galery4 from "/Galeria/Galery4.webp";
import Galery5 from "/Galeria/Galery5.webp";
import Galery6 from "/Galeria/Galery6.webp";
import Galery7 from "/Galeria/Galery7.webp";
import Galery8 from "/Galeria/Galery8.webp";
import Galery9 from "/Galeria/Galery9.webp";
import Galery10 from "/Galeria/Galery10.webp";
import Galery11 from "/Galeria/Galery11.webp";
import Galery12 from "/Galeria/Galery12.webp";
import Galery13 from "/Galeria/Galery13.webp";
import Galery14 from "/Galeria/Galery14.webp";
import Galery15 from "/Galeria/Galery15.webp";
import Galery16 from "/Galeria/Galery16.webp";
import Galery17 from "/Galeria/Galery17.webp";
import Galery18 from "/Galeria/Galery18.webp";


const imageSets = [
  [Galery1, Galery2, Galery3, Galery4, Galery5, Galery6],
  [Galery7, Galery8, Galery9, Galery10, Galery11, Galery12],
  [Galery13, Galery14, Galery15, Galery16, Galery17, Galery18],
];

const Galeria = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedSet, setSelectedSet] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let interval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setSelectedSet((prevIndex) => (prevIndex + 1) % imageSets.length);
        }, 10000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial interval set up
    if (!document.hidden) {
      interval = setInterval(() => {
        setSelectedSet((prevIndex) => (prevIndex + 1) % imageSets.length);
      }, 10000);
    }

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [selectedSet]);

  const handleSetChange = (setIndex) => {
    setSelectedSet(setIndex);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const containerVariants = {
    initial: { opacity: 0, x: 1 * -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 1 * 20 },
  };

  const transition = { duration: 0.3 };

  return (
    <div className="flex flex-col gap-10 items-center mt-5 md:mt-0 font-DM">
      <span className="font-semibold text-3xl">Nuestra Galería</span>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSet}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 w-full"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
        >
          {imageSets[selectedSet].map((image, index) => (
            <div key={index}>
              {!loaded && (
                <div className="bg-mainSection h-72 w-full border border-main object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                className={`h-72 w-full object-cover border-main border cursor-pointer hover:brightness-75 ${
                  loaded ? "block" : "hidden"
                }`}
                src={image}
                alt=""
                onClick={() => handleImageClick(image)}
                onLoad={() => setLoaded(true)}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-row gap-4">
        {[0, 1, 2].map((setIndex) => (
          <div
            key={setIndex}
            className={`w-7 h-7 rounded-full ${
              selectedSet === setIndex
                ? "bg-main"
                : "bg-gray-300 hover:scale-110"
            } cursor-pointer`}
            onClick={() => handleSetChange(setIndex)}
          ></div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="relative flex items-center justify-center p-5"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full max-h-[500px] object-contain border-main border"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
