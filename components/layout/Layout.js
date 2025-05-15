import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import LayoutTranslation from "../../public/layout.json";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import LenisScroll from "../LenisScroll/LenisScroll";

export const Layout = (props) => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Funzione per monitorare lo scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Ottieni la posizione attuale dello scroll
    const triggerHeight = 500; // Altezza dopo la quale mostrare il bottone (puoi cambiare questo valore)

    // Mostra il bottone se la posizione dello scroll è maggiore del triggerHeight
    if (scrollPosition > triggerHeight) {
      setShowWhatsApp(true);
    } else {
      setShowWhatsApp(false);
    }
  };

  // Controllo per eseguire la logica solo nel client
  useEffect(() => {
    setIsClient(true); // Impostiamo a true quando il componente è montato nel client

    if (isClient) {
      window.addEventListener("scroll", handleScroll);

      // Esegui il controllo anche subito dopo che la pagina è stata caricata per determinare se deve essere mostrato
      handleScroll();

      // Rimuovi l'evento scroll quando il componente è smontato
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient]);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          success: {
            iconTheme: {
              primary: "#5cb4ad",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
      <LenisScroll />
      <NavBar translation={LayoutTranslation?.menu} />
      <main>{props.children}</main>

      {/* Mostra FloatingWhatsApp solo quando showWhatsApp è true */}
      {showWhatsApp && (
        <FloatingWhatsApp
          phoneNumber="+390165902274"
          avatar="/apple-touch-icon.png"
          accountName="Les Crêtes"
          statusMessage="Ti risponderemo al più presto"
          allowClickAway
          notificationSound={true}
          chatMessage="Ciao, come possiamo aiutarti?"
          placeholder="Scrivi un messaggio..."
          darkMode
        />
      )}

      <Footer translation={LayoutTranslation?.footer} />
    </>
  );
};
