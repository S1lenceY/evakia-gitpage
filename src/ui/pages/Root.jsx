import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";

const Root = () => {
  const location = useLocation();
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    const selectedTab = localStorage.getItem("selectedTab");

    switch (selectedTab) {
      case "INICIO":
        setBackgroundClass("bg-fondo1");
        break;
      case "CONÓCENOS":
        setBackgroundClass("bg-fondo2");
        break;
      case "SERVICIOS":
        setBackgroundClass("bg-fondo3");
        break;
      case "CONTACTANOS":
        setBackgroundClass("bg-fondo4");
        break;
      default:
        setBackgroundClass("bg-fondo1");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      <AnimatePresence mode="popLayout">
        <motion.div
          className={`absolute inset-0 ${backgroundClass} bg-fixed`}
        />
      </AnimatePresence>

      <div className="relative z-10">
        <Header />
        <Outlet />
        <Whatsapp />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
