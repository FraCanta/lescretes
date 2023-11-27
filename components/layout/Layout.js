import React from "react";
import NavBar from "./NavBar";
import LayoutTranslation from "../../public/layout.json";
import Footer from "./Footer";

export const Layout = (props) => {
  return (
    <>
      <NavBar translation={LayoutTranslation?.menu} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
