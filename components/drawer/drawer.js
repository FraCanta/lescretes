// components/Drawer.js
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import FormPrenotazione from "../formPrenotazione/formPrenotazione";

const Drawer = ({ isOpen, onClose }) => {
  const controls = useAnimation();

  // Configurazioni per le animazioni
  const variants = {
    open: { x: 0, y: 0, opacity: 1 },
    closed: { x: "0", y: "100%", opacity: 0 },
  };

  // Gestisci l'apertura e la chiusura del drawer
  const handleAnimation = async () => {
    if (isOpen) {
      await controls.start("open");
    } else {
      await controls.start("closed");
    }
  };

  // Controlla le animazioni quando cambia lo stato di isOpen
  useEffect(() => {
    handleAnimation();
  }, [isOpen]);

  return (
    <motion.div
      initial="closed"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        right: 0,
        bottom: 20,
        background: "red",
        zIndex: 999999,
        width: "100vh",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: 20,
      }}
    >
      {/* Contenuto del drawer, incluso il form */}

      {/* Bottone per chiudere il drawer */}
      <button onClick={onClose}>Chiudi</button>
      <FormPrenotazione />
    </motion.div>
  );
};

export default Drawer;
