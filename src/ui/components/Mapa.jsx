import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const Mapa = () => {
  const position = [-6.865914, -79.818986]; // Coordenadas de la ubicación específica

  return (
    <div className="flex flex-col lg:flex-row border border-main rounded-lg overflow-hidden w-full max-w-7xl z-0">
      <div className=" group bg-main hover:bg-transparent duration-300 flex flex-col p-10 lg:p-16 gap-4 items-center text-center lg:text-start lg:items-start justify-center h-fit lg:h-96 lg:w-1/3">
        <span className="text-3xl text-mainSection group-hover:text-white font-medium  duration-300">
          Evakia Inmobiliaria
        </span>
        <p className=" text-zinc-700 group-hover:text-gray-400 text-lg duration-300">
          Calle Elías Aguirre Nro 300 / Reque
        </p>
        <a
          className="rounded-lg bg-mainSection items-center self-center w-full max-w-96 group-hover:bg-transparent group-hover:border-main group-hover:text-main justify-center flex border-2 border-mainSection shadow-lg text-white duration-300 cursor-pointer active:scale-[0.98] mt-3"
          href="https://www.google.com/maps/dir/-6.760419,-79.8377831/El%C3%ADas+Aguirre+300,+Reque+14801/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="px-5 py-2">Como llegar</span>
        </a>
      </div>
      <MapContainer
        center={position}
        zoom={100}
        className="h-96 w-full lg:w-2/3 self-center"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={position}
          icon={L.icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>Inmobiliaria Evakia</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapa;
