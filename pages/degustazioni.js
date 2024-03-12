import HeroHome from "@/components/heroHome/HeroHome";
import React from "react";
import degustazioniIT from "../public/locales/it/degustazioni.json";
import degustazioniEN from "../public/locales/en/degustazioni.json";
import degustazioniFR from "../public/locales/fr/degustazioni.json";
import View from "@/public/assets/cotoView.jpg";
import Cards from "@/components/Cards/Cards";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FAQ from "@/components/FAQ/FAQ";

const Degustazioni = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - degustazioni</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[90%] mx-auto min-h-[calc(90vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome />
      </div>
      <div className="w-[90%] min-h-screen flex-col justify-start items-center gap-[60px] flex mx-auto pb-10 xl:py-10">
        {/* <h2 className="xl:text-center text-main text-5xl  xl:text-5xl font-bold xl:leading-[50.91px]">
          Prenota la tua degustazione
        </h2> */}
        <div className="flex flex-col gap-4 xl:text-center text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]">
          <p>
            Il <span className="font-bold">Rifugio del Vino</span> è una vera
            terrazza sulla vigne che sovrastano la città di Aosta, un luogo dove
            l’accoglienza è di casa e dove vivere un’esperienza unica. Le
            degustazioni sono dedicate sia a gruppi che a singoli
            eno-appassionati.
          </p>
          <p>
            Ogni degustazione è accompagnata da una visita in cantina,
            disponibile in varie modalità, a seconda delle preferenze. Se hai
            esigenze particolari per te o per il tuo gruppo contattaci per
            creare la tua visita personalizzata.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4">
          {translation?.cards?.map((el, i) => {
            return (
              <Cards
                key={i}
                img={el?.img}
                title={el?.title}
                descrizione={el?.descrizione}
                price={el?.price}
                link={el.link}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full min-h-[60vh] md:min-h-[50vh] xl:min-h-[60vh] flex flex-col justify-center bg-second   bg-pattern">
        <div className="w-[90%] h-full  mx-auto flex flex-col gap-4 md:gap-8 justify-center ">
          <h3 className="text-main text-3xl xl:text-4xl font-bold">
            Prenota ora la tua visita o richiedi informazioni in merito alle
            degustazioni:
          </h3>{" "}
          <ul className="flex flex-col gap-4  text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]">
            <li>
              - al telefono{" "}
              <a href="callto:+390165902274">+39 0165 / 90 22 74</a>
            </li>
            <li>
              - all’indirizzo mail:{" "}
              <a href="mailto:info@lescretes.it">info@lescretes.it</a>
            </li>
            <li>
              - compilando il modulo di richiesta informazioni della
              degustazione scelta
            </li>
          </ul>
          <p className=" text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]">
            Wine shop, degustazioni e visite guidate: dal Lun al Ven
            9.00-13.00/15.00-19.00 e Sab 10.00-13.00/15.00-19.00 .{" "}
            <strong>CHIUSO Domenica e Festivi</strong>
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-[50px]">
        <h2 className="text-6xl font-bold py-6">FAQs</h2>
        <FAQ />
      </div>

      {/* <div className="w-full min-h-[60vh]  grid grid-cols-1 2xl:grid-cols-2 py-[48px] 2xl:py-0 gap-10 bg-main items-center relative bg-pattern">
        <div className="w-[90%] h-[350px] 2xl:h-[350px] relative mx-auto">
          <Image
            src={View}
            alt=""
            fill
            className="object-cover rounded-[30px]"
          />
        </div>
        <div className="flex flex-col h-full justify-center gap-8 relative w-[90%] mx-auto ">
          <div className="flex flex-col gap-6">
            <h3 className="text-white text-[35px] xl:text-[43.22px] font-bold xl:leading-[55.22px] xl:w-[70%]">
              La nostra forza è la cura e la passione che abbiamo per la nostra
              terra
            </h3>
            <Link
              href="/contatti"
              className="text-center capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-main hover:transition-all  bg-white w-full max-w-max"
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Degustazioni;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = degustazioniIT;
      break;

    case "en":
      obj = degustazioniEN;
      break;
    case "fr":
      obj = degustazioniFR;
      break;
    default:
      obj = degustazioniIT;
      break;
  }

  return {
    props: {
      translation: obj?.degustazioni,
    },
    revalidate: 60,
  };
}
