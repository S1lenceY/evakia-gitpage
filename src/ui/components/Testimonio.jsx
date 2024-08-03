import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonio1 from "/Testimonio/Testimonio1.webp";
import Testimonio2 from "/Testimonio/Testimonio2.webp";
import Testimonio3 from "/Testimonio/Testimonio3.webp";

const testimonios = [
  {
    text: '"Gracias a EVAKIA, encontramos el lote perfecto para nuestra nueva casa. Su servicio personalizado y atención al cliente superaron nuestras expectativas."',
    family: "— Ana y José M.",
    image: Testimonio1,
  },
  {
    text: '"El equipo de EVAKIA nos guió durante la compra de nuestro lote y la construcción de nuestra casa. Su compromiso con la calidad es evidente en cada paso del proceso."',
    family: "— Luis T.",
    image: Testimonio2,
  },
  {
    text: '"EVAKIA nos acompañó en todo el proceso de venta de nuestro terreno. Su equipo es eficiente y muy profesional. Altamente recomendados."',
    family: "— Carlos R.",
    image: Testimonio3,
  },
];

const Testimonio = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let interval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setDirection(1);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
        }, 5000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial interval set up
    if (!document.hidden) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentIndex]);

  const handleButtonClick = (index) => {
    if (index > currentIndex) {
      setDirection(1); // Direccion derecha
    } else {
      setDirection(-1); // Direccion izquierda
    }
    setCurrentIndex(index);
  };

  const { text, family, image } = testimonios[currentIndex];

  return (
    <div className="flex flex-col gap-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction * -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap font-DM mx-auto"
        >
          <div className="bg-main w-full md:w-1/4 md:h-80 h-24 flex items-center justify-center p-5 text-3xl font-semibold">
            <span>Testimonios</span>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-3/4 md:h-80">
            <div className="flex flex-col gap-5 justify-center p-10 md:p-7 border border-main overflow-hidden">
              <span>{text}</span>
              <span className="text-main text-lg sm:text-xl">{family}</span>
            </div>

            {!loaded && (
              <div className=" bg-mainSection h-60 sm:h-full w-full sm:max-w-60 lg:max-w-80 border border-main  object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={image}
              className={`w-full sm:max-w-60 lg:max-w-80 object-cover border border-main max-h-60 sm:max-h-full ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 justify-center">
        {testimonios.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-7 h-7 rounded-full ${
              currentIndex === index ? "bg-main" : "bg-gray-300 hover:scale-110"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonio;
