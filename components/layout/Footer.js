import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 xl:grid-cols-4 p-10 text-main gap-6 xl:gap-0">
        <aside className="grid grid-cols-1 gap-2">
          <Link href="/" title="Home Page">
            <Image
              src={Logo}
              alt="logo"
              className="w-[130px] 2xl:w-[120px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
            />
          </Link>
          <p>
            SR20, 5011010 Aymavilles (AO) <br /> Valle d’Aosta, Italia
          </p>
        </aside>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            Orari Uffici
          </header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            Orari Magazzini
          </header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">Contatti</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="text-center px-10 py-4 border-t  text-[#D4D2E3] border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2023 Les Cretes | All Rights Reserved | Terms and
            Conditions | Privacy Policy
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
