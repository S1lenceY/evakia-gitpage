import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VentaTerceros1 from "/VentaTerceros/VentaTerceros1.webp";
import VentaTerceros3 from "/VentaTerceros/VentaTerceros3.webp";

const ofrecen = [
  {
    title: "¿Qué ofrecemos?",
    text: "Facilitamos la comercialización de terrenos de terceros, actuando como intermediarios confiables y gestionando todo el proceso de venta, desde la evaluación hasta el cierre de la transacción, garantizando una experiencia sin complicaciones y resultados satisfactorios para ambas partes.",
    image: VentaTerceros1,
  },
  {
    title: "¿Qué solicitamos?",
    text: (
      <p className="list-inside">
        <li>Título de propiedad (testimonio o contrato de compraventa)</li>
        <li>Partida registral</li>
        <li>Tasación</li>
        <li>Memoria descriptiva</li>
        <li>
          DNI de los propietarios (consultar si hay uno o más propietarios y la
          posesión del inmueble)
        </li>
        <li>HR - PU</li>
      </p>
    ),
    image: VentaTerceros3,
  },
  {
    title: "Costos",
    text: "Antes de realizar la cotización, evaluamos el entorno, mercado y detalles del inmueble para sugerir un precio accesible y asesorar al cliente en la venta. Cobramos una comisión del 8% del total de la venta y también podemos sugerir vender el inmueble a un precio mayor, quedándonos con el excedente del precio exigido. El precio puede variar según la oferta del comprador.",
    image: VentaTerceros3,
  },
];

const VentaLotes = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col self-start mt-10">
        <span className="text-main text-lg">EVAKIA</span>
        <span className="text-3xl font-semibold">
          Venta de lotes de terceros
        </span>
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
              <div className="border border-main p-5 sm:p-7 xl:p-16 justify-center flex flex-col gap-4 order-last sm:order-none h-full max-h-96 ">
                <span className="self-start text-main text-xl">
                  {ofrecen[activeIndex].title}
                </span>
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
                activeIndex === index
                  ? "bg-main"
                  : "bg-gray-300 hover:scale-110"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default VentaLotes;
