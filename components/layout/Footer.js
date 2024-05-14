import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";
import { useRouter } from "next/router";

const Footer = ({ translation }) => {
  const { locale } = useRouter();
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
            {translation?.[locale]?.col1.title}
          </header>
          <p className="font-bold">{translation?.[locale]?.col1.days}</p>
          <p>8.30 – 13.00 / 14.30 – 18.00</p>
          <p className="font-bold">{translation?.[locale]?.col1.close}</p>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col2.title}
          </header>
          <p className="font-bold">{translation?.[locale]?.col2.days}</p>
          <p>9.00 – 12.00 / 15.00 – 17.00</p>
          <p className="font-bold">{translation?.[locale]?.col2.close}</p>
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col3.title}
          </header>
          {translation?.[locale]?.col3.menu.map((m, i) => {
            return (
              <Link href={m.link} className="link link-hover" key={i}>
                {m.name}
              </Link>
            );
          })}
        </nav>
        <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col4.title}
          </header>
          {translation?.[locale]?.col4.contatti.map((l, i) => {
            return (
              <Link href={l.link} className="link link-hover" key={i}>
                {l.name}
              </Link>
            );
          })}
        </nav>
      </footer>
      <footer className="lg:text-center px-10 py-4 border-t  text-[#D4D2E3] border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2024 Les Crêtes - P.iva 00520450073 | All Rights
            Reserved | Privacy Policy
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
