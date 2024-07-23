import React, { useRef, useState } from "react";
import Servicio1 from "/Servicios/Servicio1.webp";
import Servicio2 from "/Servicios/Servicio2.webp";
import Servicio3 from "/Servicios/Servicio3.webp";
import Beneficios from "../components/Beneficios";
import Proyectos from "../components/Proyectos";
import VentaLotes from "../components/VentaLotes";
import Ofrecemos from "../components/Ofrecemos";
import Costos from "../components/Costos";

const Servicios = () => {
  const [loaded, setLoaded] = useState(false);
  const servicioRef = useRef(null);
  const lotizacionRef = useRef(null);
  const lotesRef = useRef(null);
  const construyeRef = useRef(null);

  const handleScroll = () => {
    if (servicioRef.current) {
      servicioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollLotizacion = () => {
    if (lotizacionRef.current) {
      lotizacionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollLotes = () => {
    if (lotesRef.current) {
      lotesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollConstruye = () => {
    if (construyeRef.current) {
      construyeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col font-DM">
      <div className="flex justify-center px-7 sm:pl-24 h-screen">
        {/* Encabezado de CONOCENOS */}
        <div className="flex flex-col self-center  items-center text-center sm:text-start sm:items-start text-white w-full -translate-y-10">
          <span className="font-semibold text-lg sm:text-2xl uppercase">
            SIEMPRE ENFOCADOS EN TI
          </span>
          <span className="font-bold text-5xl sm:text-[85px] mt-4 mb-7">
            CONOCE NUESTROS SERVICIOS
          </span>
          <button
            className="bg-main text-lg text-white font-bold py-3 px-20 sm:px-24 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 "
            onClick={handleScroll}
          >
            Descubrir
          </button>
        </div>
      </div>

      <div
        className="w-full bg-mainSection flex flex-col items-center justify-center text-white p-5 py-16 sm:p-10 lg:p-20"
        ref={servicioRef}
      >
        {/* Seccióñ de SERVICIOS */}
        <div className="max-w-7xl gap-10 flex flex-col items-center">
          <span className="text-3xl font-semibold">Servicios</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="grid gap-5">
              <span className="p-3 text-center text-black bg-main text-sm font-medium">
                LOTIZACIÓN
              </span>
              <div className="relative overflow-hidden group text-black cursor-pointer" onClick={handleScrollLotizacion}>
                {!loaded && (
                  <div className="flex flex-col bg-mainSection h-96 lg:h-[550px] border border-main object-cover p-4">
                    <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                  </div>
                )}
                <img
                  src={Servicio1}
                  className={`h-96 lg:h-[550px] w-full object-cover border-main border group-hover:scale-110 group-hover:rotate-3 transition-all ${
                    loaded ? "block" : "hidden"
                  }`}
                  onLoad={() => setLoaded(true)}
                />
                <div className="absolute top-0 text-center w-full h-full bg-white/70 duration-300 opacity-0 group-hover:opacity-100">
                  <p className="flex items-center justify-center w-full h-full text-lg p-5 font-light">
                    La inmobiliaria ofrece un servicio de lotización que permite
                    a los clientes adquirir lotes propios con acceso a un
                    exclusivo club privado, brindando una experiencia de vida
                    única y privilegiada en un entorno de lujo.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-5">
              <span className="p-3 text-center text-nowrap font-medium text-black bg-main text-sm">
                VENTA DE LOTES DE TERCEROS
              </span>
              <div className="relative overflow-hidden group text-black cursor-pointer" onClick={handleScrollLotes}>
                {!loaded && (
                  <div className="flex flex-col bg-mainSection h-96 lg:h-[550px] border border-main object-cover p-4">
                    <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                  </div>
                )}
                <img
                  src={Servicio2}
                  className={`h-96 lg:h-[550px] w-full object-cover border-main border group-hover:scale-110 group-hover:rotate-3 transition-all ${
                    loaded ? "block" : "hidden"
                  }`}
                  onLoad={() => setLoaded(true)}
                />
                <div className="absolute top-0 text-center w-full h-full bg-white/70 duration-300 opacity-0 group-hover:opacity-100">
                  <p className="flex items-center justify-center w-full h-full text-lg p-5 font-light">
                    La inmobiliaria ofrece un servicio de venta de lotes de
                    terceros, facilitando la adquisición de terrenos con todas
                    las garantías y comodidades necesarias para una inversión
                    segura y rentable.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 sm:col-span-2 md:col-span-1">
              <span className="p-3 text-center text-black bg-main text-sm font-medium">
                CONSTRUYE CON EVAKIA
              </span>
              <div className="relative overflow-hidden group text-black cursor-pointer" onClick={handleScrollConstruye}>
                {!loaded && (
                  <div className="flex flex-col bg-mainSection h-96 lg:h-[550px] border border-main object-cover p-4">
                    <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                  </div>
                )}
                <img
                  src={Servicio3}
                  className={`h-96 lg:h-[550px] w-full object-cover border-main border group-hover:scale-110 group-hover:rotate-3 transition-all ${
                    loaded ? "block" : "hidden"
                  }`}
                  onLoad={() => setLoaded(true)}
                />
                <div className="absolute top-0 text-center w-full h-full bg-white/70 duration-300 opacity-0 group-hover:opacity-100">
                  <p className="flex items-center justify-center w-full h-full text-lg p-5 font-light">
                    EVAKIA ofrece un servicio integral de construcción,
                    asegurando proyectos de alta calidad y cumplimiento de
                    plazos, con diseños innovadores y soluciones personalizadas
                    para cada cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seccióñ de Beneficios */}
          <Beneficios ref={lotizacionRef}/>
          <Proyectos />
          <VentaLotes ref={lotesRef}/>
          <Ofrecemos ref={construyeRef}/>
          <Costos />
        </div>
      </div>
    </div>
  );
};

export default Servicios;
