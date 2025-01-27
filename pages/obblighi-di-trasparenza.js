import Hero from "@/components/heroHome/Hero";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function ObblighiDiTrasparenza() {
  return (
    <>
      <Head>
        <title>Obblighi di trasparenza - Les Crêtes</title>
        <meta
          name="description"
          content="Obblighi di trasparenza - Les Les Crêtes"
        />
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(20vh_-_70px)] md:min-h-[calc(50vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <div className="flex flex-col w-full gap-6 mx-auto xl:gap-20 mt-14">
          <h1 className="w-full px-2 sm:px-4 lg:px-0 xl:w-[60%] mx-auto text-center text-main text-3xl leading-[45px] md:text-[56px] font-bold md:leading-[66px] 3xl:text-8xl">
            Obblighi di trasparenza
          </h1>

          <div className="flex items-center justify-center w-[90%] mx-auto lg:w-full h-full">
            <Image
              src="/assets/feasr-loghi.jpg"
              width={600}
              height={600}
              alt="loghi dei partner del progetto feasr"
            />
          </div>
        </div>
      </div>
      <div className="my-10  w-[90%] mx-auto">
        <p className="lg:w-[80%] mx-auto text-lg lg:text-center lg:text-xl text-main/80">
          Fondo europeo agricolo per lo sviluppo rurale: l’Europa investe nelle
          zone rurali Fonds européen agricole pour le développement rural:
          l’Europe investit dans les zones rurales{" "}
          <strong>Intervento 4.1.1_ NGEU</strong>{" "}
          <strong>
            - Sostegno agli investimenti nelle aziende agricole Opération
            4.1.1_NGEU
          </strong>{" "}
          <strong>
            - Soutien aux investissements dans les exploitations agricoles
          </strong>
          Impianto di un vigneto di Chardonnay nel Comune di Saint Christophe.
          Iniziativa finanziata dal Programma di sviluppo rurale della Valle
          d’Aosta 2014/2022 Initiative financée par le Programme de
          développement rural de la Vallée d’Aoste 2014/2022
        </p>
      </div>
    </>
  );
}

export default ObblighiDiTrasparenza;
