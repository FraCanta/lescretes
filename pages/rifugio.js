import React from "react";
import Rif from "@/public/assets/rifugio.jpg";
import Hero from "@/components/heroHome/Hero";
import Head from "next/head";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Banner from "@/components/Banner/Banner";
import Deg from "@/public/assets/degustazione.png";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Rifugio = () => {
  return (
    <>
      <Head>
        <title key="title">Il Rifugio del vino</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero
          img={Rif}
          text="Il Rifugio del Vino: sala di degustazione emozionale"
        />
      </div>
      <div className="w-[90%]  flex-col justify-start items-start gap-[50px] flex mx-auto py-10 lg:py-20 fxl:gap-20 ">
        <div className="flex-col justify-start items-start gap-10 flex">
          <h2 className="text-main text-3xl md:text-5xl font-bold fxl:text-6xl 3xl:text-7xl">
            L'edificio
          </h2>
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal flex flex-col gap-10">
            <p>
              Il Rifugio del Vino è un edificio di circa 170 metri quadrati,
              costruito a fianco della storica cantina dell’Azienda. Un progetto
              ambizioso: unione del vino, della cultura della montagna e
              dell’architettura. Il progetto, dell’architetto Domenico Mazza di
              Courmayeur, ha avuto una menzione speciale nel concorso
              internazionale “ Le cattedrali del Vino” della rivista Il Gambero
              Rosso, evento collaterale della biennale di Venezia.
            </p>
            <p>
              L’impatto è d’effetto, con un tetto che ricorda nella forma le
              montagne e con una struttura in cui a dominare sono le vetrate.
              Entrando si potrà vivere un’esperienza sensoriale, con una zona
              dedicata alle essenze e una biblioteca con libri della Valle
              d’Aosta e del vino, tutto questo in un luogo in cui potersi
              accomodare, leggere, bere un bicchiere ed osservare il panorama.
            </p>
            <p>
              La scelta dell’architettura e del nome “Rifugio” ha un doppio
              significato: un richiamo alle montagne, costituendo quindi un
              rifugio alpino dall’architettura tipica di alta montagna. E poi
              anche il concetto di rifugio inteso come accoglienza.
            </p>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-10 flex">
          <h2 className="text-main text-3xl md:text-5xl font-bold fxl:text-6xl 3xl:text-7xl">
            Lo stile architettonico
          </h2>
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal flex flex-col gap-10">
            <p>
              L’architetto ha realizzato un edificio dall’aspetto contemporaneo,
              che nasce dalla trasformazione di un precedente progetto di
              ampliamento già avviato dalla proprietà e poi rivisto.
              L’architetto Mazza ha perciò dovuto pensare all’edificio partendo
              da alcune strutture in cemento armato già presenti che ne hanno
              fortemente influenzato l’impianto. La cantina appare come una
              grande tettoia in legno lamellare, coperta in lamiera e con le
              tamponature verticali quasi esclusivamente vetrate.
            </p>
            <p>
              Il profilo complesso della costruzione – che da lontano ricorda
              quasi quello di un massiccio montuoso – nasce dalla
              compenetrazione di diversi volumi semplici tra loro inclinati.
              Quando cala la sera, il sapiente uso di trasparenze e
              illuminazione non fa che accrescere il carattere decostruttivista
              di quest’opera. Sotto questa grande corte coperta trovano spazio i
              diversi ambienti della produzione, della vendita e anche del
              loisir tenuti insieme da un’interessante percorso di visita.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40vh] flex flex-col justify-center bg-second   bg-pattern">
        <div className="w-[90%] h-full  mx-auto flex flex-col gap-4 md:gap-8 justify-center ">
          <h3 className="text-main text-3xl md:text-4xl font-bold fxl:text-5xl 3xl:text-6xl">
            Approfondimenti:
          </h3>{" "}
          <ul className="flex flex-col text-main text-xl md:text-2xl xl:text-xl 3xl:text-3xl font-normal fxl:text-2xl">
            <li>
              <Link
                href="/pdf/Inchino_al_castello.pdf"
                className="inline-flex items-center"
                target="_blank"
              >
                <Icon icon="ph:dot-bold" width={40} />{" "}
                <span className="underline"> "Un inchino al castello"</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pdf/Vivere-Le-Alpi-Art.-Domenico.pdf"
                className="inline-flex items-center"
                target="_blank"
              >
                <Icon icon="ph:dot-bold" width={40} />{" "}
                <span className="underline">Vivere le Alpi</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pdf/Articolo_Images.pdf"
                className="inline-flex items-center"
                target="_blank"
              >
                <Icon icon="ph:dot-bold" width={40} />{" "}
                <span className="underline">Articolo su "Images"</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <div className="flex-col justify-start items-start gap-10 flex">
          <h2 className="text-main text-3xl md:text-5xl font-bold fxl:text-6xl 3xl:text-7xl">
            Business meetings
          </h2>
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal flex flex-col gap-10">
            <p>
              Le cantine Les Crêtes diventano la cornice ideale per incontri
              aziendali, convegni, conferenze stampa e molto altro. La nostra
              nuova sala attrezzata è a disposizione di chi desideri dare un
              tocco di originalità ad incontri di lavoro, conferenze, corsi,
              seminari o ad altri momenti meno formali. Su richiesta
              organizziamo coffee break, pranzi o cene, avvalendoci della
              collaborazione di professionisti di fiducia.
            </p>
            <ul className="flex flex-col gap-4 fxl:gap-8  text-main text-[20px] md:text-2xl 2xl:text-xl font-normal fxl:text-2xl 3xl:text-4xl">
              <li>
                <span className="font-bold">- Info e Costi:</span> 0165 902274 –
                info@lescretes.it
              </li>
              <li>
                <span className="font-bold">- Allestimento catering:</span> 60
                posti a sedere
              </li>
              <li>
                <span className="font-bold">
                  - Allestimento per lezioni frontali/conferenze/stampa:
                </span>{" "}
                80 posti a sedere
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 fxl:gap-8 xl:py-20 mx-auto mt-14  w-[90%] lg:justify-center xl:items-center">
        <h2 className="text-main text-3xl md:text-5xl font-bold fxl:text-6xl lg:text-center 3xl:text-7xl">
          Uno sguardo al Rifugio
        </h2>
        <p className=" text-main text-xl md:text-2xl 2xl:text-xl font-normal fxl:text-2xl w-full 3xl:text-4xl  lg:w-[40%] xl:w-[60%] mx-auto xl:text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.{" "}
        </p>
        <ImageGallery />
      </div>
      <Banner
        img={Deg}
        title="Fai o regala a chi vuoi una degustazione a Les Crêtes"
        paragraph="Regala un’esperienza unica ed originale scegliendo una
              degustazione tra quelle disponibili sul nostro sito oppure, se hai
              esigenze particolari, contattaci per creare il tuo regalo
              personalizzato."
        btn1="Prenota subito"
        btn2="Scopri le proposte"
        link1="/contatti"
        link2="/degustazioni"
      />
    </>
  );
};

export default Rifugio;
