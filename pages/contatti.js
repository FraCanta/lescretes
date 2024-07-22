import ContactCard from "@/components/Cards/ContactCard";
import ContactForm from "@/components/contactForm/ContactForm";
import Hero from "@/components/heroHome/Hero";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Rifugio from "@/public/assets/rifugio/rifugio10.webp";
const Contatti = () => {
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
      <Hero text="Come contattarci e raggiungerci " img={Rifugio} />
      <div className="w-[90%] mx-auto py-20 lg:py-10 grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">Contattaci</h2>
          <div className="grid grid-cols-2 gap-y-10">
            <ContactCard
              color="main"
              title="Email*"
              description=" info@lescretes.it"
            />
            <ContactCard
              color="main"
              title="Telefono"
              description="(+ 39) 0165 / 90 22 74 "
            />
            <div className="flex flex-col gap-4">
              <ContactCard
                color="main"
                title="Indirizzo"
                description="Les Crêtes Produzione e vendita Vini | SR20, 50, 11010 Aymavilles AO"
                icon="ph:phone"
              />

              <Link
                href="https://maps.app.goo.gl/3cbSMTf1PybdEtZn9"
                className="font-bold underline text-main"
                target="_blank"
              >
                Indicazioni stradali
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="collapse bg-second">
              <input type="checkbox" />
              <div className="text-xl font-medium collapse-title">
                <h3 className="text-main text-[20px]  font-bold  md:leading-[30.43px]">
                  Altri contatti*
                </h3>
              </div>
              <div className="collapse-content">
                <ul className="flex flex-col gap-2 text-xl text-main/80">
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>- Commerciale Estero:</strong> ordini@lescretes.it{" "}
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>- Commerciale Italia:</strong>{" "}
                    corti.giulio@gmail.com
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>- Contabilità:</strong> contabilita@lescretes.it
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>- Enologo:</strong> enologo@lescretes.it
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>- Guide, contatti stampa e riviste:</strong>{" "}
                    elena@lescretes.it
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>- Magazzino:</strong> magazzino@lescretes.it
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>
                      - Produzione, fornitori, settore agronomico:
                    </strong>{" "}
                    eleonora@lescretes.it
                  </li>
                  <li className="flex flex-col gap-2 text-lg lg:flex-row lg:items-center">
                    <strong>
                      - Segreteria, ordini, spedizioni e fatturazione:
                    </strong>{" "}
                    ordini@lescretes.it
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold">
            Preferisci mandarci un messaggio?
          </h2>
          <ContactForm inputs={inputs} setInputs={setInputs} />
        </div>
      </div>
    </>
  );
};

export default Contatti;
