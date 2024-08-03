import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";
import { useRouter } from "next/router";

const Footer = ({ translation }) => {
  const { locale } = useRouter();
  return (
    <>
      <footer className="grid grid-cols-1 gap-6 p-10 xl:grid-cols-4 text-main xl:gap-0">
        <aside className="grid grid-cols-1 gap-2">
          <Link href="/" title="Torna all'homepage di Les Crêtes">
            <Image
              src={Logo}
              alt="Logo di Les Crêtes"
              className="w-[130px] 2xl:w-[120px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
            />
          </Link>
          <p className="text-main/80">
            SR20, 11010 Aymavilles (AO) <br /> Valle d’Aosta, Italia
          </p>
        </aside>
        <nav className="grid grid-cols-1 gap-1">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col1.title}
          </header>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col1.days}
          </p>
          <p className="text-main/80">8.30 – 13.00 / 14.30 – 19.20</p>
          <p className="text-main/80">9.30 – 13.00 / 14.30 – 19.20</p>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col1.close}
          </p>
          <p className="text-main/80">9.30 – 19.20</p>
        </nav>
        {/* <nav className="grid grid-cols-1 gap-2">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col2.title}
          </header>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col2.days}
          </p>
          <p className="text-main/80">9.00 – 12.00 / 15.00 – 17.00</p>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col2.close}
          </p>
        </nav> */}
        <nav className="grid grid-cols-1 gap-1">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col3.title}
          </header>
          {translation?.[locale]?.col3.menu.map((m, i) => {
            return (
              <Link
                href={m.link}
                className="link link-hover text-main/80"
                key={i}
              >
                {m.name}
              </Link>
            );
          })}
        </nav>
        <nav className="grid grid-cols-1 gap-1">
          <header className="uppercase font-bold !text-main">
            {translation?.[locale]?.col4.title}
          </header>
          {translation?.[locale]?.col4.contatti.map((l, i) => {
            return (
              <Link
                href={l.link}
                className="link link-hover text-main/80"
                key={i}
              >
                {l.name}
              </Link>
            );
          })}
        </nav>
      </footer>
      <footer className="lg:text-center px-10 py-4 border-t  text-main/80 border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2024 Les Crêtes - P.iva 00520450073 | All Rights
            Reserved |{" "}
            <Link
              href="/privacy"
              title="Pagina privacy policy"
              className="underline"
            >
              Privacy Policy
            </Link>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
