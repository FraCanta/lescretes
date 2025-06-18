import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import CtaOutlineBrown from "../Cta/CtaOutlineBrown";
import Image from "next/image";

export default function PopUpEvento() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const isMinimized = localStorage.getItem("popupEventoMinimized") === "true";

    setMinimized(isMinimized);

    // Mostra popup solo se non è stato ancora minimizzato
    if (!isMinimized) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [router.pathname]);

  const handleClose = () => {
    setVisible(false);
    setMinimized(true);
    localStorage.setItem("popupEventoMinimized", "true");
  };

  const handleOpen = () => {
    setVisible(true);
    setMinimized(false);
    localStorage.setItem("popupEventoMinimized", "false");
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <div className="flex items-center justify-center w-full">
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-opacity-50 bg-main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Popup centrale */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed z-50 flex flex-col items-start w-11/12 max-w-3xl px-6 py-4 transform translate-x-1/2 translate-y-1/2 bg-white rounded-lg shadow-lg top-32 lg:w-full max-h-3xl lg:top-1/3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-end w-full p-2 uppercase">
                <button
                  onClick={handleClose}
                  className="text-sm font-bold underline uppercase text-main"
                  aria-label="Chiudi popup"
                >
                  Chiudi
                </button>
              </div>
              <div className="flex flex-wrap justify-between w-full gap-4">
                <div>
                  <h2 className="mb-2 text-xl font-semibold">
                    🎉 Evento in arrivo!
                  </h2>
                  <p className="mb-4">
                    Non perdere l’evento il{" "}
                    <strong>10 luglio alle 18:00</strong>.
                  </p>
                  <CtaOutlineBrown
                    link="/i-nostri-eventi"
                    onClick={() => {
                      localStorage.setItem("popupEventoMinimized", "true");
                    }}
                  >
                    Vai agli eventi
                  </CtaOutlineBrown>
                </div>
                <div>
                  <Image
                    src={"/assets/pop-up.jpg"}
                    alt="Evento in arrivo"
                    width={300}
                    height={200}
                    className="object-cover w-full h-auto aspect-video"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Icona minimizzata sempre visibile se minimizzato */}
      <AnimatePresence>
        {minimized && (
          <motion.button
            onClick={handleOpen}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed z-50 flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg bg-main bottom-32 right-6 hover:bg-main focus:outline-none"
            aria-label="Apri notifiche evento"
            title="Evento in arrivo"
          >
            🎉
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
