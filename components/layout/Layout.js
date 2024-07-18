import React from "react";
import NavBar from "./NavBar";
import LayoutTranslation from "../../public/layout.json";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

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
      <Footer translation={LayoutTranslation?.footer} />
    </>
  );
};
