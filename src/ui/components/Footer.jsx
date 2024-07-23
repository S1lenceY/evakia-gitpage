import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t-4 border-main flex flex-col items-center gap-2 justify-center bg-mainSection text-white font-DM py-5 px-10">
      <span className="text-3xl font-semibold">EVAKIA</span>
      <div className="text-center font-semibold text-main">
        <p>
          Firma inmobiliaria especializada en venta de lotes, construcción de
          casas y venta de terrenos de terceros.
        </p>
        <p className="mb-5">
          Ofrecemos soluciones personalizadas y de calidad.
        </p>
      </div>
      <div className="border-t border-main w-full lg:w-fit items-center justify-center flex p-5 gap-10">
        <a
          href="https://wa.me/+51907529936"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-400 hover:scale-105 transition-all cursor-pointer"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="hidden lg:block">907529936</span>
        </a>
        <a
          href="https://www.instagram.com/evakia_inmoviliaria_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-violet-400 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <FaInstagram className="text-2xl" />
          <span className="hidden lg:block">@evakiainmobiliaria</span>
        </a>
        <a
          href="https://www.facebook.com/EvakiaInmobiliaria/?paipv=0&eav=AfZAnAM6hqu3feFtJ1bt-FxhpLwjhUdXU3v67vLP8CNXJIFCaYqh-urOBjb1vc0Qnyw&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 group hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <FaFacebookF className="px-1 pt-1 text-2xl border border-white rounded group-hover:border-blue-400" />
          <span className="hidden lg:block">EvakiaInmobiliaria</span>
        </a>
        <a
          href="tel:+51907529936"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-orange-400 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <FaPhoneAlt className="text-xl" />
          <span className="hidden lg:block">907529936</span>
        </a>
        <a
          href="mailto:evakiainmobiliario@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-amber-400 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <FaEnvelope className="text-2xl" />
          <span className="hidden lg:block">evakiainmobiliario@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
