import React, { useRef } from "react";
import Valores from "/ValoresObjetivos/Valores.webp";
import Objetivos from "/ValoresObjetivos/Objetivos.webp";
import Mision from "/MisionVision/Mision.webp";
import Vision from "/MisionVision/Vision.webp";
import ImageWithLoader from "../components/ImageWithLoader";

const Conocenos = () => {
  const QuienesSomosRef = useRef(null);

  const handleScroll = () => {
    if (QuienesSomosRef.current) {
      QuienesSomosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col font-DM">
      <div className="flex justify-center px-7 sm:pl-24 h-screen">
        {/* Encabezado de CONOCENOS */}
        <div className="flex flex-col self-center items-center text-center sm:text-start sm:items-start text-white w-full -translate-y-10">
          <span className="font-semibold text-lg sm:text-2xl uppercase ">
            UNA EMPRESA COMPROMETIDA, SEGURA Y CONFIABLE
          </span>
          <span className="font-bold text-6xl sm:text-8xl mt-2 mb-7">
            Descubre EVAKIA
          </span>
          <button
            className="bg-main text-lg text-white font-bold py-3 px-20 sm:px-24 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 "
            onClick={handleScroll}
          >
            Empieza aquí
          </button>
        </div>
      </div>

      <div
        className="w-full bg-mainSection flex flex-col items-center justify-center text-white p-5 py-16 sm:p-10 lg:p-20 gap-20"
        ref={QuienesSomosRef}
      >
        {/* Seccióñ de CONOCENOS */}
        <div className="grid grid-cols-1 sm:grid-cols-4 w-full max-w-7xl">
          <div className="bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10">
            ¿Quiénes Somos?
          </div>
          <div className="border border-main flex text-start items-center p-7 sm:p-10 md:p-20  col-span-3">
            <p>
              En Evakia SAC nos especializamos en la venta de lotes,
              construcción de casas personalizadas, y la intermediación en la
              venta de terrenos de terceros. Ofrecemos soluciones inmobiliarias
              personalizadas y de calidad, con un enfoque en la atención al
              cliente.
            </p>
          </div>
        </div>

        {/* Seccióñ de Valores */}
        <div className="max-w-7xl">
          <div className="grid  sm:grid-cols-4 w-full">
            <div className="border border-main col-span-2 sm:col-span-1 hidden sm:block order-last sm:order-none">
              <ImageWithLoader src={Valores} alt="Valores" />{" "}
            </div>
            <div className="border border-main flex flex-col gap-2 text-start p-7 sm:p-10 col-span-2">
              <span className="text-xl text-main">Nuestros Valores</span>
              <p>
                Nos guiamos por valores de integridad, calidad, servicio al
                cliente, profesionalismo, innovación, responsabilidad social y
                colaboración. Estos principios nos aseguran ofrecer soluciones
                inmobiliarias excepcionales en todas nuestras operaciones.
              </p>
            </div>
            <div className="col-span-2 sm:order-none sm:col-span-1 order-first bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10">
              Nuestros Valores y Objetivos
            </div>
          </div>
          <div className="grid sm:grid-cols-4 w-full">
            <div className="border border-main flex flex-col gap-2 text-start justify-center p-7 sm:p-5 md:p-10">
              <span className="text-xl text-main">01</span>
              <p>Aumentar el alcance de la publicidad</p>
            </div>
            <div className="border border-main flex flex-col gap-2 text-start justify-center  p-7 sm:p-5 md:p-10">
              <span className="text-xl text-main">02</span>
              <p>Incrementar la generación de leads</p>
            </div>
            <div className="border border-main flex flex-col gap-2 text-start justify-center  p-7 sm:p-5 md:p-10">
              <span className="text-xl text-main">03</span>
              <p>Mejorar las tasas de conversión</p>
            </div>
            <div className="hidden sm:block border border-main">
              <img src={Objetivos} className="h-full object-cover" />
            </div>
          </div>
          <div className="grid sm:grid-cols-4 w-full">
            <div className="border border-main flex flex-col gap-2 text-start p-7 sm:p-5 md:p-10 justify-center">
              <span className="text-xl text-main">04</span>
              <p>Expandir la base de clientes</p>
            </div>
            <div className="border border-main flex flex-col gap-2 text-start  p-7 sm:p-5 md:p-10 justify-center">
              <span className="text-xl text-main">05</span>
              <p>Promover eventos y actividades de promoción</p>
            </div>
            <div className="border border-main flex flex-col gap-2 text-start  p-7 sm:p-5 md:p-10 justify-center">
              <span className="text-xl text-main">06</span>
              <p>Fomentar el compromiso de los empleados</p>
            </div>
            <div className="border border-main flex flex-col gap-2 text-start  p-7 sm:p-5 md:p-10 justify-center">
              <span className="text-xl text-main">07</span>
              <p>Impulsar el entusiasmo y compromiso del equipo de ventas</p>
            </div>
          </div>
        </div>

        {/* Seccióñ de Mision y Vision */}
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10">
              Misión y Visión
            </div>
            <div className="flex flex-col sm:flex-row col-span-3">
              <div className=" sm:w-2/3 border border-main flex flex-col gap-2 text-start p-7 sm:p-10 justify-center">
                <span className="text-xl text-main">Misión</span>
                <p>
                  Facilitar el sueño de hogar propio para nuestros clientes,
                  ofreciendo un servicio personalizado y de calidad, basado en
                  la confianza, transparencia y profesionalismo. Nos
                  comprometemos a guiar a nuestros clientes a lo largo de todo
                  el proceso de compra, venta o alquiler de propiedades,
                  brindándoles asesoramiento experto y soluciones adaptadas a
                  sus necesidades individuales. Nuestra misión es crear
                  relaciones duraderas con nuestros clientes, convirtiéndonos en
                  su socio de confianza en el mercado inmobiliario.
                </p>
              </div>
              <div className="border hidden sm:block border-main sm:w-1/3">
                <ImageWithLoader src={Mision} alt="Mision" />{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="border hidden sm:block border-main sm:w-2/5">
              <ImageWithLoader src={Vision} alt="Vision" />{" "}
            </div>
            <div className=" sm:w-3/5 border border-main flex flex-col gap-2 text-start p-7 sm:p-10 justify-center">
              <span className="text-xl text-main">Vision</span>
              <p>
                Nos esforzamos por convertirnos en una referencia de excelencia
                en el sector inmobiliario, reconocidos por nuestra integridad,
                innovación y compromiso con la satisfacción del cliente.
                Buscamos crecer de manera sostenible, expandiendo nuestra
                presencia en el mercado local y explorando nuevas oportunidades
                de crecimiento. Nos visualizamos como una inmobiliaria líder,
                conocida por nuestro enfoque centrado en el cliente y nuestra
                capacidad para adaptarnos a un entorno en constante cambio,
                manteniendo siempre nuestros valores fundamentales como pilar de
                nuestro éxito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
