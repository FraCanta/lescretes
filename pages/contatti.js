import ContactCard from "@/components/Cards/ContactCard";
import Location from "@/components/Map/Location";
import ContactForm from "@/components/contactForm/ContactForm";
import Hero from "@/components/heroHome/Hero";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Contatti = () => {
  return (
    <>
      <Head>
        <title>Les Crêtes - contatti</title>
      </Head>
      <Hero
        text="Come puoi contattarci e raggiungerci "
        img="/assets/rifugio.JPG"
      />
      <div className="w-[90%] mx-auto py-10">
        <ContactForm />
      </div>
      <div className="bg-second py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto gap-8 lg:gap-2">
          <div>
            <ContactCard
              color="main"
              title="Email*"
              description=" info@lescretes.it"
              icon="mdi:email"
            />
          </div>
          <div>
            <ContactCard
              color="main"
              title="Telefono"
              description="(+ 39) 0165 / 90 22 74 "
              icon="ph:phone"
            />
          </div>
          <div>
            <ContactCard
              color="main"
              title="Fax"
              description="(+39) 0165 / 90 27 58"
              icon="material-symbols:fax"
            />
          </div>
          <div>
            <ContactCard
              color="main"
              title="Location"
              description="SR20, 50
              11010 Aymavilles (AO)
             "
              icon="carbon:location"
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto py-10 flex flex-col gap-6">
        <h2 className="text-4xl text-main font-bold">Altri contatti*</h2>
        <ul className=" flex flex-col gap-2 text-main/80 text-xl">
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Commerciale Estero:</strong> ordini@lescretes.it{" "}
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Commerciale Italia:</strong> corti.giulio@gmail.com
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Contabilità:</strong> contabilita@lescretes.it
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Enologo:</strong> enologo@lescretes.it
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Guide, contatti stampa e riviste:</strong>{" "}
            elena@lescretes.it
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Magazzino:</strong> magazzino@lescretes.it
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Produzione, fornitori, settore agronomico:</strong>{" "}
            eleonora@lescretes.it
          </li>
          <li className="flex flex-col lg:flex-row lg:items-center gap-2">
            <strong>- Segreteria, ordini, spedizioni e fatturazione:</strong>{" "}
            ordini@lescretes.it
          </li>
        </ul>
        <div className="font-bold text-xl flex flex-col lg:flex-row lg:items-center lg:gap-2">
          <p>
            N.B: Per informazioni in merito alla prenotazione delle degustazioni
            consultare le modalità nella pagina{" "}
          </p>{" "}
          <span>
            <Link
              href="/degustazioni"
              className="uppercase underline"
              target="_blank"
            >
              degustazioni
            </Link>
          </span>
        </div>
      </div>
      <div className="bg-second py-2 lg:p-6 bg-pattern">
        <Location />
      </div>
    </>
  );
};

export default Contatti;
