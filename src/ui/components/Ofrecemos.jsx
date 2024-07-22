import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QueOfrecemos from "/Ofrecemos/QueOfrecemos.webp";
import QueOfrecemos2 from "/Ofrecemos/QueOfrecemos2.webp";
import QueOfrecemos3 from "/Ofrecemos/QueOfrecemos3.webp";

const ofrecen = [
  {
    text: 'Evakia SAC y Construcciones Ayesmont lanzan "Construye con Evakia" en el distrito de Reque, ofreciendo servicios integrales de construcción para casas de 40m² en lotes de terceros. Esta colaboración combina la experiencia de ambas compañías, enfocándose en calidad, eficiencia y atención al cliente, posicionándose como una opción confiable para proyectos inmobiliarios en Reque.',
    image: QueOfrecemos2,
  },
  {
    text: "Nuestros servicios están diseñados para brindar acceso sin barreras a todos nuestros clientes potenciales. Solo solicitamos la documentación esencial, como escritura pública, copia literal, título de propiedad y/o título de COFOPRI. No trabajamos con bancos ni aplicamos intereses, garantizando una experiencia sin complicaciones para quienes deseen beneficiarse de nuestros servicios.",
    image: QueOfrecemos,
  },
  {
    text: "La casa de tres pisos se entregará en 2-3 meses, con diseño adaptable según preferencias. Incluye altura de 2.40 metros, piso pulido, bases sólidas y servicios básicos. Construcción con 9 columnas y muros de concreto tarrajeado. Ventanas de aluminio, puertas exteriores de madera. Interior sin tarrajeo, baño ventilado y cocina con lavaplatos. Materiales de calidad aseguran resistencia y durabilidad.",
    image: QueOfrecemos3,
  },
];

const Ofrecemos = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col self-start mt-10">
        <span className="text-main text-lg">Construye con EVAKIA</span>
        <span className="text-3xl font-semibold">¿Qué ofrecemos? </span>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-5">
        <div className="flex flex-col gap-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2"
            >
              <div className="border border-main p-5 sm:p-7 xl:p-16 justify-center flex flex-col order-last sm:order-none h-full max-h-96 ">
                <div className="lg:text-lg">{ofrecen[activeIndex].text}</div>
              </div>
              {!loaded && (
                <div className=" bg-mainSection h-52 sm:h-full w-full border border-main  object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                src={ofrecen[activeIndex].image}
                className={`border border-main h-52  sm:h-full sm:max-h-96 object-cover w-full ${
                  loaded ? "block" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-row md:flex-col self-center md:pl-10 gap-3 h-full">
          {ofrecen.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full w-7 h-7 cursor-pointer ${
                activeIndex === index ? "bg-main" : "bg-gray-300 hover:scale-110"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ofrecemos;
