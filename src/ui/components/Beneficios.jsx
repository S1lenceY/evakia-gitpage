import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PorticoEntrada from "/Beneficios/PorticoEntrada.webp";
import Colegio from "/Beneficios/Colegio.webp";
import AlumbradoPublico from "/Beneficios/AlumbradoPublico.webp";
import Mercado from "/Beneficios/Mercado.webp";
import PlataformaDeportiva from "/Beneficios/PlataformaDeportiva.webp";
import Luz from "/Beneficios/Luz.webp";
import Agua from "/Beneficios/Agua.webp";
import Parque from "/Beneficios/Parque.webp";
import ClubPrivado from "/Beneficios/ClubPrivado.webp";

const servicios = [
  {
    text: "Un pórtico de entrada es una estructura arquitectónica que marca la entrada principal de un edificio, ofreciendo una primera impresión acogedora y protección contra el clima.",
    type: "Pórtico de entrada",
    image: PorticoEntrada,
  },
  {
    text: "Ofrecemos la ventaja de contar con un colegio dentro de nuestro proyecto inmobiliario, brindando a las familias conveniencia y acceso a educación de calidad para sus hijos, al tiempo que mejora el valor y la calidad de vida de las propiedades circundantes.",
    type: "Colegio",
    image: Colegio,
  },
  {
    text: "Ofrecemos la comodidad y seguridad del alumbrado público en nuestro proyecto inmobiliario, garantizando una mayor visibilidad y protección para los residentes, al tiempo que mejora la estética y el valor de las propiedades en el entorno.",
    type: "Alumbrado Público",
    image: AlumbradoPublico,
  },
  {
    text: "Ofrecemos la conveniencia de tener un mercado dentro de nuestro proyecto inmobiliario, brindando a los residentes acceso cercano a productos y servicios básicos, lo que mejora su calidad de vida y comodidad diaria, además de añadir valor a las propiedades en el área",
    type: "Mercado",
    image: Mercado,
  },
  {
    text: " Ofrecemos una plataforma deportiva dentro de nuestro proyecto inmobiliario, proporcionando a los residentes instalaciones cercanas para el ejercicio y el bienestar físico, promoviendo un estilo de vida activo y saludable, y mejorando el valor y la atracción del entorno residencial.",
    type: "Plataforma Deportiva",
    image: PlataformaDeportiva,
  },
  {
    text: " Nosotros valoramos la importancia de la iluminación en nuestros proyectos inmobiliarios, ya que garantiza seguridad al proporcionar visibilidad y realza la estética del entorno, mejorando así la comodidad y el atractivo visual para nuestros residentes",
    type: "Luz",
    image: Luz,
  },
  {
    text: "Ofrecemos la ventaja de contar con sistemas de agua en nuestros proyectos inmobiliarios, garantizando la satisfacción de las necesidades esenciales de nuestros residentes y promoviendo su bienestar, al tiempo que añadimos valor y atractivo al desarrollo.",
    type: "Agua",
    image: Agua,
  },
  {
    text: "Nosotros ofrecemos la ventaja de contar con un parque dentro de nuestros proyectos inmobiliarios, brindando a los residentes un espacio verde para el esparcimiento y la recreación al aire libre, lo que mejora su calidad de vida y añade valor a las propiedades en el área.",
    type: "Parque",
    image: Parque,
  },
  {
    text: "Se ofrecerá un exclusivo club privado con bungalows, vestidores, baños, área de parrilla, cascada, cancha deportiva, piscina, juegos inflables y pista de baile. Los clientes tendrán acceso gratuito a todas las instalaciones y servicios del club, ofreciendo una experiencia de estilo de vida única.",
    type: "Club Privado",
    image: ClubPrivado,
  },
];

const Beneficios = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);
  const serviciosContainerRef = useRef(null);

  const handleSpanClick = (index) => {
    setActiveIndex(index);
    setShouldScroll(true);
    setPreviousIndex(activeIndex);
  };

  const getVisibleServicios = () => {
    const endIndex = (activeIndex + 1) * 3;
    return servicios.slice(0, endIndex);
  };

  const visibleServicios = getVisibleServicios();

  useEffect(() => {
    if (shouldScroll) {
      let blockValue;
      if (activeIndex === 0) {
        blockValue = "start";
      } else if (activeIndex === 1) {
        blockValue = "center";
      } else {
        blockValue = "end";
      }
      serviciosContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: blockValue,
        inline: "nearest",
      });
      setShouldScroll(false);
    }
  }, [visibleServicios, shouldScroll, activeIndex, previousIndex]);

  return (
    <div ref={ref}>
      <div className="flex flex-col self-start my-10">
        <span className="text-main text-lg">Lotización</span>
        <span className="text-3xl font-semibold">Servicios</span>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-10" ref={serviciosContainerRef}>
          <AnimatePresence>
            {visibleServicios.map((servicio, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="border border-main p-5 sm:p-8 lg:p-10 lg:text-lg items-center justify-between flex flex-col order-last sm:order-none h-full max-h-96">
                  <p>{servicio.text}</p>
                  <span className="self-start text-main mt-4 text-lg lg:text-xl">
                    {servicio.type}
                  </span>
                </div>
                {!loaded && (
                  <div className="flex flex-col bg-mainSection h-full object-cover p-4 border border-main">
                    <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                  </div>
                )}
                <img
                  src={servicio.image}
                  alt={servicio.type}
                  className={`border border-main h-52 sm:h-full sm:max-h-96 object-cover w-full ${
                    loaded ? "block" : "hidden"
                  }`}
                  onLoad={() => setLoaded(true)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="sticky top-28 flex flex-row md:flex-col self-center md:self-start md:my-[8%] md:pl-10 gap-3 h-full">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleSpanClick(index)}
              className={`rounded-full w-7 h-7 cursor-pointer ${
                activeIndex >= index ? "bg-main" : "bg-gray-300 hover:scale-110"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Beneficios;
