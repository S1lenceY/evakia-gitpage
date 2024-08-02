import React, { useState } from "react";
import ProyectoEvakia from "/Proyectos/ProyectoEvakia.webp";
import ProyectoEvakia2 from "/Proyectos/ProyectoEvakia2.webp";
import ProyectoEvakia3 from "/Proyectos/ProyectoEvakia3.webp";
import ProyectoNuevoAmanecer from "/Proyectos/ProyectoNuevoAmanecer.webp";
import Reveal from "../components/Reveal";

const Proyectos = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-10">
      <Reveal className="flex flex-col mb-10">
        <span className="text-main text-lg">Lotización</span>
        <span className="text-3xl font-semibold">Proyectos</span>
      </Reveal>

      <div className="flex flex-col gap-10 w-full">
        <Reveal className="grid  md:grid-cols-4 w-full mb-10">
          <div className=" col-span-2 md:col-span-1 bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10">
            Proyecto Nuevo Amanecer
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">Área</span>
              <p>120 metros cuadrados</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10 md:h-full md:justify-center">
              <span className="text-xl text-main">Cuotas</span>
              <p>300 soles</p>
            </div>
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">
                Tiempo de Financiamiento
              </span>
              <p>45 meses</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10">
              <span className="text-xl text-main">Inicial</span>
              <p>1000 soles</p>
            </div>
          </div>

          <div className="border border-main col-span-2 md:col-span-1 block">
            {!loaded && (
              <div className="flex flex-col bg-mainSection h-40 sm:h-full  border border-main object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={ProyectoNuevoAmanecer}
              className={`h-full w-full max-h-40 md:max-h-full object-cover ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Reveal>

        <Reveal className="grid  md:grid-cols-4 w-full">
          <div className=" col-span-2 md:col-span-1 bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10">
            Proyecto EVAKIA
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">Área</span>
              <p>120 metros cuadrados</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10 md:h-full md:justify-center">
              <span className="text-xl text-main">Cuotas</span>
              <p>500 soles</p>
            </div>
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">
                Tiempo de Financiamiento
              </span>
              <p>27 meses</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10">
              <span className="text-xl text-main">Inicial</span>
              <p>2000 soles</p>
            </div>
          </div>

          <div className="border border-main col-span-2 md:col-span-1 block">
            {!loaded && (
              <div className="flex flex-col bg-mainSection h-40 sm:h-full  border border-main object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={ProyectoEvakia}
              className={`h-full w-full max-h-40 md:max-h-full object-cover ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Reveal>

        <Reveal className="grid  md:grid-cols-4 w-full">
          <div className=" col-span-2 md:col-span-1 bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10 lg:order-last">
            Proyecto EVAKIA
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">Área</span>
              <p>150 metros cuadrados</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10 md:h-full md:justify-center">
              <span className="text-xl text-main">Cuotas</span>
              <p>500 soles</p>
            </div>
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">
                Tiempo de Financiamiento
              </span>
              <p>33 meses</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10">
              <span className="text-xl text-main">Inicial</span>
              <p>2000 soles</p>
            </div>
          </div>

          <div className="border border-main col-span-2 md:col-span-1 block lg:order-first">
            {!loaded && (
              <div className="flex flex-col bg-mainSection h-40 sm:h-full  border border-main object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={ProyectoEvakia2}
              className={`h-full w-full max-h-40 md:max-h-full object-cover ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Reveal>

        <Reveal className="grid  md:grid-cols-4 w-full">
          <div className=" col-span-2 md:col-span-1 bg-main flex justify-center text-center text-3xl items-center font-bold p-7 sm:p-10">
            Proyecto EVAKIA
          </div>

          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">Área</span>
              <p>500 metros cuadrados</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10 md:h-full md:justify-center">
              <span className="text-xl text-main">Cuotas</span>
              <p>1000 soles</p>
            </div>
          </div>
          <div className=" flex flex-col border border-main">
            <div className="flex flex-col gap-2 p-5 lg:p-10 border-b border-main">
              <span className="text-xl text-main">
                Tiempo de Financiamiento
              </span>
              <p>50 meses</p>
            </div>
            <div className="flex flex-col gap-2 p-5 lg:p-10">
              <span className="text-xl text-main">Inicial</span>
              <p>5000 soles</p>
            </div>
          </div>
          <div className="border border-main col-span-2 md:col-span-1 block">
            {!loaded && (
              <div className="flex flex-col bg-mainSection h-40 sm:h-full  border border-main object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={ProyectoEvakia3}
              className={`h-full w-full max-h-40 md:max-h-full object-cover ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Proyectos;
