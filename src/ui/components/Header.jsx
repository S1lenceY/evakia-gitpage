import React, { useState, useEffect, useRef } from "react";
import LogoEvakia from "/LogoEvakia.webp";
import ChipTabs from "./ChipTabs";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else{
      setHidden(false);
    }
  })

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleBackClick = () => {
    setIsExpanded(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      className=" sticky top-0 w-full flex-col items-center justify-center z-20"
      ref={menuRef}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-304px" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut"}}
    >
      <div className="bg-black bg-opacity-70 flex lg:justify-between px-5 items-center w-full h-16 lg:h-20 font-DM">
        <div className="flex items-center mx-auto lg:mx-0 text-white text-xl lg:ml-10 gap-2">
          <img src={LogoEvakia} alt="Logo" className=" w-14" />

          <div className=" uppercase font-bold">
            <span>Evakia Inmobiliaria</span>
          </div>
        </div>

        <div
          className={`flex items-center justify-center transition-height duration-500 lg:transition-none  gap-5 font-DM font-semibold absolute flex-col top-16  w-full lg:h-fit bg-black bg-opacity-70 overflow-hidden lg:overflow-visible left-1/2 transform -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:static lg:bg-transparent lg:flex-row lg:w-fit ${
            isExpanded ? "h-60" : "h-0"
          }`}
          onClick={handleBackClick}
        >
          <ChipTabs />
        </div>

        <button className=" h-10 w-10 ml-5" onClick={handleMenuClick}>
          <div className="grid justify-items-center gap-1">
            <span
              className={`h-1 w-7 rounded-full bg-white transition ${
                isExpanded ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-7 rounded-full bg-white transition ${
                isExpanded ? "scale-x-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-7 rounded-full bg-white ${
                isExpanded ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;
