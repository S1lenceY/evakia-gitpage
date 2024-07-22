import React, { useEffect, useState } from "react";
import { FiCheckSquare, FiX, FiAlertCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Notificacion = ({ message, type, removeNotif }) => {
  useEffect(() => {
    if (message) {
      const timeoutRef = setTimeout(() => {
        removeNotif();
      }, 5000);

      return () => clearTimeout(timeoutRef);
    }
  }, [message, removeNotif]);

  if (!message) return null;

  const getIcon = () => {
    return type === "success" ? <FiCheckSquare /> : <FiAlertCircle />;
  };

  const getBackgroundColor = () => {
    return type === "success" ? "bg-green-500" : "bg-red-500";
  };

  return (
    <div className="fixed top-2 right-2 z-50 pointer-events-auto">
      <AnimatePresence>
        <motion.div
          layout
          initial={{ y: -15, scale: 0.95 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white ${getBackgroundColor()}`}
        >
          <span className="mt-0.5">{getIcon()}</span>
          <span>{message}</span>
          <button onClick={removeNotif} className="ml-auto mt-0.5">
            <FiX />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Notificacion;

