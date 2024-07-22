import Head from "next/head";
import Image from "next/image";
import React from "react";
import Sost from "@/public/assets/lc2.webp";
import Hero from "@/components/heroHome/Hero";
import CtaOutline from "@/components/Cta/CtaOutline";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
function Sostenibilita() {
  return (
    <>
      <Head>
        <title>Sostenibilità: Un Valore Intrinseco alla Nostra Identità</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero
          img={Sost}
          text="Sostenibilità: Un Valore Intrinseco alla Nostra Identità"
          alt="Immagine della sostenibilità"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 pb-24 ">
        <div className="flex gap-6 ">
          <Image
            src="/assets/sqnpi.png"
            alt="sqnpi logo"
            width={150}
            height={150}
          />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold lg:text-center text-main w-[90%] lg:w-[70%] mx-auto">
          Garanzia di Qualità e Tracciabilità per l'Agricoltura Integrata in
          Italia
        </h2>
        <p className="text-xl lg:text-center text-main w-[90%] lg:w-[70%] lg:mx-auto">
          Il Sistema di Qualità Nazionale di Produzione Integrata (SQNPI)
          interessa la categoria Prodotto Agroalimentare e si applica a tutte le
          aziende del territorio nazionale italiano che utilizzano tecniche di
          produzione agricola integrata. Si pone l’obiettivo di valorizzare ed
          identificare le produzioni vegetali, ottenute in conformità ai
          disciplinari regionali di produzione agricola integrata aggiungendo
          valore al prodotto nei confronti della GDO e del consumatore per
          quanto riguarda sicurezza, qualità e processi di coltivazione
          rispettosi dell’ambiente e della salute dell’uomo.
        </p>
      </div>
      <div className="bg-[#77966d]/30 flex flex-col items-center justify-center relative  lg:p-6 bg-pattern3">
        <div className="flex flex-col gap-6 py-10 lg:p-10">
          {" "}
          <h2 className="text-3xl lg:text-5xl font-bold lg:text-center text-main w-[90%] lg:w-[70%] mx-auto">
            Perché consumare meno è verde, ma utilizzare impianti efficienti è
            verde dentro!
          </h2>
          <p className="text-xl lg:text-center text-main w-[90%] lg:w-[80%] mx-auto">
            Il nostro impegno è differenziarci con comportamenti responsabili a
            favore del territorio e del contesto sociale e ambientale. Les
            Crêtes è orgogliosa di essere ancora e sempre verde dentro! Ma
            utilizzare energia verde è un inizio. Ma conoscere anche l’impianto
            rinnovabile da cui proviene e la fonte usata per produrla tra vento,
            acqua e sole, allora si può dire con certezza di utilizzare solo
            energia rinnovabile al 100%.
          </p>
        </div>
        <div className="w-[90%] mx-auto  grid items-center grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/assets/rifugio/rifugio1.webp"
                fill
                className="object-cover w-full h-full"
                alt="Dentro Verde"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            {/* <div className="bg-white h-[100px] w-[100px] rounded-full flex items-center justify-center">
              <Image
                src="/assets/ASE.png"
                alt="sqnpi logo"
                width={80}
                height={80}
              />
            </div> */}
            <h2 className="text-4xl font-bold text-main">
              Impianti fotovoltaici
            </h2>
            <p className="text-xl text-main lg:w-[70%]">
              Dal 2007 ci impegniamo nella produzione di energia pulita grazie a
              due impianti fotovoltaici. Un percorso che Les Crêtes prende a
              cuore per ridurre ulteriormente il nostro impatto ambientale.
            </p>
            <div className="flex flex-col gap-6 max-w-max">
              <CtaOutlineBrown
                link="/pdf/certificato-TUV-impianto-idrico-di-colombaro-to.pdf"
                title="Certificato TUV pdf"
              >
                Certificato TUV
              </CtaOutlineBrown>
              <CtaOutlineBrown
                link="/pdf/Certificato-di-provenienza-ITA.pdf"
                title="Certificato di provenienza pdf"
              >
                Certificato di provenienza
              </CtaOutlineBrown>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center lg:p-6 ">
        <div className="flex flex-col gap-6 py-10 lg:p-10  w-[90%] mx-auto">
          {" "}
          <h2 className="text-3xl font-bold lg:text-5xl lg:text-center text-main">
            Packaging sostenibile
          </h2>
          <p className="text-xl lg:text-center text-main lg:w-[70%] mx-auto">
            La sostenibilità si riflette nella selezione dei packaging più
            ecologici per le nostre produzioni di alta qualità. La scelta del
            tappo e della bottiglia è cruciale non solo per mantenere
            l'eccellenza del nostro vino, ma anche per proteggere l'ambiente.
          </p>
        </div>
        <div className="w-[90%] mx-auto  grid items-center grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/assets/tappo.webp"
                fill
                className="object-cover w-full h-full"
                alt="nomacorc"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-3xl font-bold lg:text-4xl text-main">
              Il primo tappo da vino al mondo senza impronta di carbonio
            </h2>
            <p className="text-xl text-main">
              Scegliamo tappi Select Bio 0% Carbon Footprint, 100% organic
              biodegradabili, rinnovabili di origine vegetale 100% riciclabili.
              Adatti per aziende vinicole che, come noi, ricercano una
              tecnologia all'avanguardia, consapevolezza ambientale e una
              gestione straordinaria dell'ossigeno.
            </p>
            <div className="flex flex-col gap-6 max-w-max">
              <CtaOutlineBrown
                link="/pdf/Nomacorc.pdf"
                title="Pdf sulla Linea Select Bio di Nomacorc"
              >
                Nomacorc - Linea Select Bio
              </CtaOutlineBrown>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto  grid items-center grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-main">
              Bottiglie leggere che aiutano l'ambiente
            </h2>
            <p className="text-xl text-main ">
              Per contribuire alla riduzione delle nostre emissioni di CO2,
              adottiamo bottiglie sempre più leggere. Questa scelta non solo
              diminuisce il peso e, di conseguenza, il consumo di energia
              durante il trasporto, ma riduce anche il quantitativo di materiali
              utilizzati, limitando così l'impatto ambientale complessivo. Ogni
              bottiglia leggera rappresenta un passo verso un futuro più
              sostenibile, contribuendo a preservare le risorse naturali e a
              minimizzare l'impronta ecologica delle nostre produzioni.
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/assets/elena.webp"
                fill
                className="object-cover w-full h-full"
                alt="bottiglie Les Crêtes"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sostenibilita;
