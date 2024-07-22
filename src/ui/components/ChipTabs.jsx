import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { INICIO, CONOCENOS, SERVICIOS, CONTACTANOS } from "../routes/Paths";

const tabs = [
  { name: "INICIO", path: INICIO },
  { name: "CONÓCENOS", path: CONOCENOS },
  { name: "SERVICIOS", path: SERVICIOS },
  { name: "CONTACTANOS", path: CONTACTANOS },
];

const ChipTabs = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedTab") || tabs[0].name
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setSelected(currentTab.name);
      localStorage.setItem("selectedTab", currentTab.name);
    }
  }, [location]);

  return (
    <>
      {tabs.map((tab) => (
        <Chip
          text={tab.name}
          path={tab.path}
          selected={selected === tab.name}
          setSelected={setSelected}
          key={tab.name}
          isWide={windowWidth >= 1024}
        />
      ))}
    </>
  );
};

const Chip = ({ text, path, selected, setSelected, isWide }) => {
  return (
    <Link
      to={path}
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-black"
      } text-sm transition-colors ${isWide ? 'px-3' : ' px-20'} py-2 rounded-xl relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-main rounded-xl"
        ></motion.span>
      )}
    </Link>
  );
};

export default ChipTabs;

