import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Galeria from "../components/Galeria";
import Testimonio from "../components/Testimonio";

const Inicio = () => {
  const galeriaTestimonioRef = useRef(null);

  const handleScroll = () => {
    if (galeriaTestimonioRef.current) {
      galeriaTestimonioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col gap-20 lg:flex-row items-center justify-center sm:justify-evenly h-screen p-5">
        {/* Encabezado de INICIO */}
        <div className="flex flex-col justify-center text-white w-fit ">
          <span className="font-semibold text-xl md:text-2xl uppercase">
            El negocio del mañana
          </span>
          <div className="font-bold text-5xl sm:text-7xl mt-5 mb-7 flex flex-col gap-2 uppercase">
            <span>Prepárate</span>
            <span>para el</span>
            <span>futuro</span>
          </div>
          <button
            className="bg-main text-lg text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 "
            onClick={handleScroll}
          >
            Conoce más..
          </button>
        </div>
        <div className=" w-full max-w-[500px] rounded-lg overflow-hidden">
          <ReactPlayer
            url="/video.mp4"
            loop
            controls
            playing
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div
        ref={galeriaTestimonioRef}
        className="w-full bg-mainSection flex flex-col items-center justify-center text-white p-5 pb-16 sm:p-10 lg:p-20 "
      >
        {/* Galeríá de INICIO */}
        <div className="w-full max-w-7xl gap-20 flex flex-col">
          <Galeria />
          <Testimonio />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
