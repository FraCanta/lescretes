import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";
import { useRouter } from "next/router";

const Footer = ({ translation }) => {
  const { locale } = useRouter();
  return (
    <>
      <footer className="grid grid-cols-1 gap-6 py-10 xl:grid-cols-4 text-main xl:gap-0 w-[90%] mx-auto">
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
          <p className="text-main/80">8.30 – 13.00 / 14.30 – 19.00</p>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col1.close}
          </p>
          <p className="text-main/80">9.30 – 13.00 / 14.30 – 19.00</p>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col1.summer}
          </p>
          <p className="text-main/80">
            {" "}
            {translation?.[locale]?.col1.sundaySummer}
          </p>
          <p className="font-bold text-main/90">
            {translation?.[locale]?.col1.summerSaturday}
          </p>
          <p
            className="text-main/80"
            dangerouslySetInnerHTML={{
              __html: translation?.[locale]?.col1.saturdaySummer,
            }}
          ></p>
        </nav>

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
                title={m.name}
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
                title={l.name}
              >
                {l.name}
              </Link>
            );
          })}
        </nav>
      </footer>
      <footer className="lg:text-center w-[90%] mx-auto py-4 border-t  text-main/80 border-[#D4D2E3]">
        <aside>
          <p>
            Copyright © 2025 Les Crêtes - P.iva 00520450073 | All Rights
            Reserved |{" "}
            <Link
              href="https://www.iubenda.com/privacy-policy/39805788"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Privacy Policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://www.iubenda.com/privacy-policy/39805788/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed"
              title="Cookie Policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </Link>
          </p>
          <p>
            Made with ❤️ by{" "}
            <Link
              href="https://www.thallion-dev.it/"
              title="Web Designer Creativa | Dai Valore al Tuo Brand"
              className="underline"
              target="_blank"
            >
              Thallion Dev di Francesca Cantale
            </Link>{" "}
            & Graphics by{" "}
            <Link
              href="https://www.miaographics.it/"
              title="Graphic Designer Creativa | Miao grafismi itineranti"
              className="underline"
              target="_blank"
            >
              Miao Graphics
            </Link>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
