import React from "react";
import NavBar from "./NavBar";
import LayoutTranslation from "../../public/layout.json";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Layout = (props) => {
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
      <NavBar translation={LayoutTranslation?.menu} />
      <main>{props.children}</main>
      <FloatingWhatsApp
        phoneNumber="+390165902274"
        avatar="/apple-touch-icon.png"
        accountName="Les Cretes"
        statusMessage="Ti risponderemo al più presto"
        allowClickAway
        notification
        chatMessage="Ciao, come possiamo aiutarti?"
        notificationSound={true}
        placeholder="Scrivi un messaggio..."
      />
      <Footer translation={LayoutTranslation?.footer} />
    </>
  );
};
