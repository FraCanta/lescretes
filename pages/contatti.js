import ContactCard from "@/components/Cards/ContactCard";
import ContactForm from "@/components/contactForm/ContactForm";
import Hero from "@/components/heroHome/Hero";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Rifugio from "@/public/assets/rifugio/rifugio10.webp";
import contattiIT from "../public/locales/it/contatti.json";
import contattiEN from "../public/locales/en/contatti.json";
import contattiFR from "../public/locales/fr/contatti.json";
import contattiDE from "@/public/locales/de/contatti.json";
import contattiJP from "@/public/locales/jp/contatti.json";
import contattiKO from "@/public/locales/ko/contatti.json";
import contattiRU from "@/public/locales/ru/contatti.json";
import contattiZH from "@/public/locales/zh/contatti.json";

const Contatti = ({ translation }) => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    cap: "",
    dob: null,
    nation: "",
  });
  return (
    <>
      <Head>
        <title>Les Crêtes - contatti</title>
      </Head>
      <Hero text={translation.hero.title} img={Rifugio} />
      <div className="w-[90%] mx-auto py-20 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">{translation.references.title}</h2>
          <div className="grid grid-cols-2 gap-y-10">
            <ContactCard
              color="main"
              title="Email*"
              description=" info@lescretes.it"
            />
            <ContactCard
              color="main"
              title={translation.references.phone}
              description="(+ 39) 0165 / 90 22 74 "
            />
            <div className="flex flex-col gap-4">
              <ContactCard
                color="main"
                title={translation.references.address}
                description="Les Crêtes Produzione e vendita Vini | SR20, 50, 11010 Aymavilles AO"
                icon="ph:phone"
              />

              <Link
                href="https://maps.app.goo.gl/3cbSMTf1PybdEtZn9"
                className="font-bold underline text-main"
                target="_blank"
              >
                {translation.references.mapdirect}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="collapse bg-second">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title">
                <h3 className="text-main text-[20px]  font-bold  md:leading-[30.43px]">
                  {translation.references.listRef.title}
                </h3>
              </div>
              <div className="collapse-content">
                <ul className="flex flex-col gap-2 text-xl text-main/80">
                  {translation.references.listRef.list.map((l, i) => {
                    return (
                      <li
                        className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center"
                        key={i}
                      >
                        <strong>{l.name}</strong> {l.value}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">
            {translation.formContact.title}
          </h2>
          <ContactForm
            inputs={inputs}
            setInputs={setInputs}
            translation={translation.formContact}
          />
        </div>
      </div>
    </>
  );
};

export default Contatti;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = contattiIT;
      break;

    case "en":
      obj = contattiEN;
      break;
    case "fr":
      obj = contattiFR;
      break;
    case "de":
      obj = contattiDE;
      break;
    case "jp":
      obj = contattiJP;
      break;
    case "ko":
      obj = contattiKO;
      break;
    case "ru":
      obj = contattiRU;
      break;
    case "zh":
      obj = contattiZH;
      break;
    default:
      obj = contattiIT;
      break;
  }

  return {
    props: {
      translation: obj?.contatti,
    },
    revalidate: 60,
  };
}
