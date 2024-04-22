import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 xl:grid-cols-5 p-10 text-main gap-6 xl:gap-0">
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
          <p className="font-bold">Da Lunedì a Venerdi</p>
          <p>8.30 – 13.00 / 14.30 – 18.00</p>
          <p className="font-bold">Sabato, domenica e festivi chiuso</p>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            Orari Magazzino
          </header>
          <p className="font-bold">Da Lunedì a Venerdi</p>
          <p>9.00 – 12.00 / 15.00 – 17.00</p>
          <p className="font-bold">Sabato, domenica e festivi chiuso</p>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            quick links
          </header>
          <Link href="/vini" className="link link-hover">
            Vini
          </Link>
          <Link href="/degustazioni" className="link link-hover">
            Degustazioni
          </Link>
          <Link href="/cosmesi" className="link link-hover">
            Cosmesi
          </Link>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            Contatti & Social
          </header>
          <Link href="/contatti" className="link link-hover">
            Contatti e indicazioni
          </Link>
          <Link
            href="https://www.facebook.com/lescretes"
            className="link link-hover"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/les.cretes/"
            className="link link-hover"
          >
            Instagram
          </Link>
        </nav>
      </footer>
      <footer className="lg:text-center px-10 py-4 border-t  text-[#D4D2E3] border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2024 Les Crêtes | All Rights Reserved | Privacy Policy
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
