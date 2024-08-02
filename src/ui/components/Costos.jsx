import React, { useState } from "react";
import Costos1 from "/Costos/Costos1.webp";
import Costos2 from "/Costos/Costos2.webp";
import Costos3 from "/Costos/Costos3.webp";
import Costos4 from "/Costos/Costos4.webp";
import Costos5 from "/Costos/Costos5.webp";
import Costos6 from "/Costos/Costos6.webp";
import Reveal from "../components/Reveal";

const Costos = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-10">
      <Reveal className="flex flex-col mb-10">
        <span className="text-main text-lg">Construye con EVAKIA</span>
        <span className="text-3xl font-semibold">Costos</span>
      </Reveal>

      <div>
        <Reveal className="grid grid-cols-1 md:grid-cols-4">
          <div className="bg-main flex flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20">
            <span className="text-sm font-medium">Albañinería</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
          <div className="flex flex-col sm:flex-row col-span-3">
            <div className=" sm:w-2/3 border border-main flex flex-col text-start p-7 sm:p-10 justify-center md:text-lg">
              El costo de la edificación cubre materiales y mano de obra para
              estructuras y albañilería confinada, tarrajeo de fachada, baño y
              derrames para ventanas y puertas, piso pulido, y sistemas de agua,
              desagüe y luz. No incluye tarrajeo de muros y techo, acabados en
              cerámica, pintura ni proyecciones.
            </div>
            <div className="border hidden sm:block border-main sm:w-1/3">
              {!loaded && (
                <div className=" bg-mainSection h-full w-full object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                src={Costos2}
                className={`h-full w-full object-cover ${
                  loaded ? "block" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </Reveal>
        <Reveal className="grid md:grid-cols-4 w-full">
          <div className="block border border-main order-last md:order-none">
            {!loaded && (
              <div className=" bg-mainSection h-40 w-full md:h-full object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={Costos6}
              className={`h-40 w-full md:h-full object-cover  ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Inicial</span>
              <p>8 000 soles</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Cuotas</span>
              <p>833 soles</p>
            </div>
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Periodo</span>
              <p>48 meses</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg text-end md:text-start">
              <span className="text-xl text-main">Monto Público</span>
              <p>48 000 soles</p>
            </div>
          </div>
          <div className="bg-main flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20 hidden md:flex">
            <span className="text-sm font-medium">Albañinería</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-4 mt-14 md:mt-0">
          <div className="bg-main flex flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20">
            <span className="text-sm font-medium">Tarrajeado</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
          <div className="flex flex-col sm:flex-row col-span-3">
            <div className=" sm:w-2/3 border border-main flex flex-col text-start p-7 sm:p-10 justify-center md:text-lg">
              El costo de la edificación abarca materiales y mano de obra para
              estructuras y albañilería confinada, tarrajeo de fachada, muros,
              techo, baño, derrames para ventanas y puertas, piso pulido, y
              sistemas de agua, desagüe y luz. No incluye acabados en cerámica,
              pintura y proyecciones.
            </div>
            <div className="border hidden sm:block border-main sm:w-1/3">
              {!loaded && (
                <div className=" bg-mainSection h-full w-full object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                src={Costos4}
                className={`h-full w-full object-cover ${
                  loaded ? "block" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </Reveal>
        <Reveal className="grid md:grid-cols-4 w-full">
          <div className="block border border-main order-last md:order-none">
            {!loaded && (
              <div className=" bg-mainSection h-40 w-full md:h-full object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={Costos3}
              className={`h-40 w-full md:h-full object-cover  ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Inicial</span>
              <p>10 500 soles</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Cuotas</span>
              <p>858.33 soles</p>
            </div>
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Periodo</span>
              <p>48 meses</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg text-end md:text-start">
              <span className="text-xl text-main">Monto Público</span>
              <p>51 700 soles</p>
            </div>
          </div>
          <div className="bg-main flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20 hidden md:flex">
            <span className="text-sm font-medium">Tarrajeado</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-4 mt-14 md:mt-0">
          <div className="bg-main flex flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20">
            <span className="text-sm font-medium">Tarrajeado + Pintura</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
          <div className="flex flex-col sm:flex-row col-span-3">
            <div className=" sm:w-2/3 border border-main flex flex-col text-start p-7 sm:p-10 justify-center md:text-lg">
              El costo de la edificación abarca materiales y mano de obra para
              estructuras y albañilería confinada, tarrajeo de fachada, muros,
              techo, baño, derrames para ventanas y puertas, piso pulido, y
              sistemas de agua, desagüe y luz. No incluye acabados en cerámica,
              pintura y proyecciones.
            </div>
            <div className="border hidden sm:block border-main sm:w-1/3">
              {!loaded && (
                <div className=" bg-mainSection h-full w-full object-cover p-4">
                  <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
                </div>
              )}
              <img
                src={Costos1}
                className={`h-full w-full object-cover ${
                  loaded ? "block" : "hidden"
                }`}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </Reveal>
        <Reveal className="grid md:grid-cols-4 w-full">
          <div className="block border border-main order-last md:order-none">
            {!loaded && (
              <div className=" bg-mainSection h-40 w-full md:h-full object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={Costos5}
              className={`h-40 w-full md:h-full object-cover  ${
                loaded ? "block" : "hidden"
              }`}
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Inicial</span>
              <p>10 500 soles</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Cuotas</span>
              <p>858.33 soles</p>
            </div>
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Periodo</span>
              <p>48 meses</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg text-end md:text-start">
              <span className="text-xl text-main">Monto Público</span>
              <p>51 700 soles</p>
            </div>
          </div>
          <div className="bg-main flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20 hidden md:flex">
            <span className="text-sm font-medium">Tarrajeado + Pintura</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
        </Reveal>
        <Reveal className="grid md:grid-cols-4 w-full mt-14 md:mt-0">
          <div className="bg-main flex-col text-black justify-center gap-2 text-center items-center p-7 md:p-20 flex">
            <span className="text-sm font-medium">Tarrajeado + Pintura</span>
            <span className="text-3xl font-bold text-white">Modulo M2</span>
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Inicial</span>
              <p>14 000 soles</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Cuotas</span>
              <p>872.92 soles</p>
            </div>
          </div>
          <div className="border border-main flex flex-row md:flex-col text-start justify-between md:justify-around gap-2 p-7 sm:px-10 md:p-7 lg:p-10">
            <div className="gap-1 flex flex-col md:text-lg">
              <span className="text-xl text-main">Periodo</span>
              <p>48 meses</p>
            </div>
            <div className="gap-1 flex flex-col md:text-lg text-end md:text-start">
              <span className="text-xl text-main">Monto Público</span>
              <p>55 900 soles</p>
            </div>
          </div>

          <div className="block border border-main order-last md:order-none">
            {!loaded && (
              <div className=" bg-mainSection h-40 w-full md:h-full object-cover p-4">
                <div className="bg-neutral-700/50 h-full animate-pulse rounded-md"></div>
              </div>
            )}
            <img
              src={Costos6}
              className={`h-40 w-full md:h-full object-cover  ${
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

export default Costos;
