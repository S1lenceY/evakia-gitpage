import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Galery1 from "/Galeria/Galery1.webp";
import Galery2 from "/Galeria/Galery2.webp";
import Galery3 from "/Galeria/Galery3.webp";
import Galery4 from "/Galeria/Galery4.webp";
import Galery5 from "/Galeria/Galery5.webp";

const galleryItems = [
  { image: Galery1, text: "Imagen 1" },
  { image: Galery2, text: "Imagen 2" },
  { image: Galery3, text: "Imagen 3" },
  { image: Galery4, text: "Imagen 4" },
  { image: Galery5, text: "Imagen 5" },
];

const Galeria = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col gap-10 items-center mt-5 md:mt-0 font-DM">
      <span className="font-semibold text-3xl">Nuestra Galería</span>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10 w-full">
        <div className="grid gap-5 sm:gap-10">
          {galleryItems.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group text-black cursor-pointer"
              onClick={() => handleImageClick(item)}
            >
              {!loaded && (
                <div className=" bg-mainSection h-60 w-full  border border-main  object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                src={item.image}
                className={`h-60 w-full object-cover border-main border ${
                  loaded ? "block" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
              />
              <div className="absolute text-center top-[-100%] group-hover:top-0 w-full h-full bg-white/60 duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center w-full h-full text-2xl font-extralight">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-5 sm:gap-10">
          {galleryItems.slice(2, 4).map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group text-black cursor-pointer"
              onClick={() => handleImageClick(item)}
            >
              {!loaded && (
                <div className=" bg-mainSection h-60 w-full  border border-main  object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                src={item.image}
                className={`h-60 w-full object-cover border-main border object-top ${
                  loaded ? "block" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
              />
              <div className="absolute text-center top-[-100%] group-hover:top-0 w-full h-full bg-white/60 duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-center justify-center w-full h-full text-2xl font-extralight">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-5 sm:gap-10 h-full col-span-1 sm:col-span-2 md:col-span-1 max-h-[520px]">
          <div
            className="relative overflow-hidden group text-black cursor-pointer"
            onClick={() => handleImageClick(galleryItems[4])}
          >
            {!loaded && (
              <div className=" bg-mainSection h-60 md:h-full w-full  border border-main  object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={galleryItems[4].image}
              className={`h-60 md:h-full w-full object-cover border-main border object-top sm:object-center ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
            <div className="absolute text-center top-[-100%] group-hover:top-0 w-full h-full bg-white/60 duration-500 opacity-0 group-hover:opacity-100">
              <div className="flex items-center justify-center w-full h-full text-2xl font-extralight">
                {galleryItems[4].text}
              </div>
            </div>
          </div>
        </div>
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
                src={selectedImage.image}
                alt={selectedImage.text}
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
