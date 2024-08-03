import React, { useRef, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkedAlt,
  FaFacebookF,
} from "react-icons/fa";
import Notificacion from "../components/Notificacion";
import emailjs from "@emailjs/browser";
import Mapa from "../components/Mapa";
import Reveal from "../components/Reveal";

const Contactanos = () => {
  //Scroll
  const formularioSection = useRef(null);

  const handleScroll = () => {
    if (formularioSection.current) {
      formularioSection.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  //Servicio de Email
  const form = useRef();
  const [notification, setNotification] = useState({ message: "", type: "" });

  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_email: "",
    user_number: "",
    user_location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fxuufg",
        "template_51j5cah",
        form.current,
        "Yois0Jd_620VgS4k7"
      )
      .then(
        () => {
          setNotification({
            message: "Email enviado correctamente",
            type: "success",
          });
          setFormData({
            user_name: "",
            user_lastname: "",
            user_email: "",
            user_number: "",
            user_location: ""
          });
        },
        (error) => {
          setNotification({
            message: `Ha ocurrido un error en el envío de Email: ${error.text}`,
            type: "error",
          });
        }
      );
  };

  const removeNotif = () => {
    setNotification({ message: "", type: "" });
  };

  return (
    <div className="w-full flex flex-col font-DM">
      <Notificacion
        message={notification.message}
        type={notification.type}
        removeNotif={removeNotif}
      />
      <Reveal className="flex justify-center px-7 sm:pl-20 md:pl-24 h-screen">
        <div className="flex flex-col self-center items-center text-center sm:text-start sm:items-start text-white w-full -translate-y-10">
          <span className="font-semibold text-lg sm:text-2xl uppercase">
            SOMOS UNA EMPRESA EN PROSPERIDAD
          </span>
          <span className="font-bold text-[42px] sm:text-7xl lg:text-8xl mt-4 mb-7">
            CONTACTANOS
          </span>
          <button
            className="bg-main text-lg text-white font-bold py-3 px-20 sm:px-24 rounded-full shadow-lg shadow-neutral-950 transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 "
            onClick={handleScroll}
          >
            ¿Como llegar?
          </button>
        </div>
      </Reveal>

      <div className="w-full bg-mainSection flex flex-col text-white px-5 py-16 sm:px-10 lg:p-20 gap-20 ">
        <Reveal className="flex flex-col sm:flex-row justify-between lg:justify-around gap-10 lg:gap-0">
          <div className="flex flex-col justify-between">
            <div className="gap-7 flex flex-col items-center sm:items-start ">
              <span className="text-4xl font-medium">Contáctanos</span>
              <a
                href="https://maps.app.goo.gl/1d8DcXMiseVa26DC6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center text-center sm:text-start"
              >
                <FaMapMarkedAlt className="text-2xl" />
                <span>Calle Elías Aguirre Nro 300, Reque</span>
              </a>
              <a
                href="mailto:evakiainmobiliario@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center text-center sm:text-start"
              >
                <FaRegEnvelope className="text-2xl" />
                <span>evakiainmobiliario@gmail.com</span>
              </a>
              <a
                href="tel:+51907529936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center text-center sm:text-start"
              >
                <FaPhoneAlt className="text-2xl" />
                <span>907 529 936</span>
              </a>
            </div>

            <div className=" flex-row gap-5 hidden sm:flex lg:hidden mb-1">
              <a
                href="https://www.facebook.com/EvakiaInmobiliaria/?paipv=0&eav=AfZAnAM6hqu3feFtJ1bt-FxhpLwjhUdXU3v67vLP8CNXJIFCaYqh-urOBjb1vc0Qnyw&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl px-1 pt-1 bg-white text-black rounded" />
              </a>
              <a
                href="https://www.tiktok.com/@evakia2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-2xl p-1 bg-white text-black rounded" />
              </a>

              <a
                href="https://wa.me/+51907529936"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl p-1 bg-white text-black rounded" />
              </a>

              <a
                href="https://www.instagram.com/evakia_inmoviliaria_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl p-1 bg-white text-black rounded" />
              </a>
            </div>
          </div>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full self-center max-w-md"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="border-b border-main">
              <label className="text-main block mb-2">Nombre</label>
              <input
                className="border-b border-b-transparent focus:border-b-main w-full bg-transparent outline-none pb-1"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="border-b border-main">
              <label className="text-main block mb-2">Apellido</label>
              <input
                className="border-b border-b-transparent focus:border-b-main w-full bg-transparent outline-none pb-1"
                type="text"
                name="user_lastname"
                value={formData.user_lastname}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2 border-b border-main">
              <label className="text-main block mb-2">Email*</label>
              <input
                className="border-b border-b-transparent focus:border-b-main w-full bg-transparent outline-none pb-1"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="border-b border-main">
              <label className="text-main block mb-2">Teléfono</label>
              <input
                className="border-b border-b-transparent focus:border-b-main w-full bg-transparent outline-none pb-1"
                type="text"
                name="user_number"
                value={formData.user_number}
                onChange={handleChange}
              />
            </div>
            <div className="border-b border-main">
              <label className="text-main block mb-2">Dirección</label>
              <input
                className="border-b border-b-transparent focus:border-b-main w-full bg-transparent outline-none pb-1"
                type="text"
                name="user_location"
                value={formData.user_location}
                onChange={handleChange}
              />
            </div>
            <button className="sm:col-span-2 p-2 w-full border border-main text-center mt-4 text-main hover:bg-main hover:text-mainSection transition-colors duration-500">
              Enviar
            </button>
          </form>
          <div className="flex-row justify-center lg:justify-normal lg:flex-col gap-5 items-center flex sm:hidden lg:flex">
            <a
              href="https://www.facebook.com/EvakiaInmobiliaria/?paipv=0&eav=AfZAnAM6hqu3feFtJ1bt-FxhpLwjhUdXU3v67vLP8CNXJIFCaYqh-urOBjb1vc0Qnyw&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl px-1 pt-1 bg-white text-black rounded hover:scale-95 duration-200" />
            </a>
            <a
              href="https://www.tiktok.com/@evakia2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-2xl p-1 bg-white text-black rounded hover:scale-95 duration-200" />
            </a>
            <a
              href="https://wa.me/+51907529936"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl p-1 bg-white text-black rounded hover:scale-95 duration-200" />
            </a>
            <a
              href="https://www.instagram.com/evakia_inmoviliaria_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl p-1 bg-white text-black rounded hover:scale-95 duration-200" />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={formularioSection}
            className="flex justify-center items-center"
          >
            <Mapa />
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contactanos;
