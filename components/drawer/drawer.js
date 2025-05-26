// components/Drawer.js
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import FormPrenotazione from "../formPrenotazione/formPrenotazione";
import { Icon } from "@iconify/react";
import FormPrenotazione2 from "../formPrenotazione/formPrenotazione2";
import FormPrenotazione4 from "../formPrenotazione/FormPrenotazione4";

const Drawer = ({
  isOpen,
  onClose,
  deg,
  link,
  price,
  durata,
  tipo,
  form,
  optPrice,
  opzione,
  fixedDates,
  eventoForm,
}) => {
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
    <>
      {/* Overlay quando il drawer è aperto */}
      {isOpen && (
        <motion.div
          initial="closed"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            zIndex: 999998, // Assegna uno zIndex inferiore rispetto al drawer
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Colore di sfondo semi-trasparente
          }}
        />
      )}

      {/* Drawer */}
      <motion.div
        initial="closed"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
        style={{
          zIndex: 999999,
        }}
        className="fixed right-0 bottom-0 p-4 xl:p-8 bg-white h-[100vh] w-screen xl:w-[50vw] overflow-auto"
      >
        {/* Contenuto del drawer, incluso il form */}

        {/* Bottone per chiudere il drawer */}
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Close Drawer">
            <Icon icon="carbon:close-filled" className="w-6 h-6 text-main " />{" "}
          </button>
        </div>
        {eventoForm ? (
          <FormPrenotazione4
            deg={deg}
            link={link}
            price={price}
            durata={durata}
            tipo={tipo}
            form={form}
            fixedDates={fixedDates}
          />
        ) : form ? (
          opzione ? (
            <FormPrenotazione
              deg={deg}
              link={link}
              price={price}
              durata={durata}
              tipo={tipo}
              form={form}
              optPrice={optPrice}
            />
          ) : (
            <FormPrenotazione
              deg={deg}
              link={link}
              price={price}
              durata={durata}
              tipo={tipo}
              form={form}
            />
          )
        ) : null}
      </motion.div>
    </>
  );
};

export default Drawer;
