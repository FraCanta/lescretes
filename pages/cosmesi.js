import HeroHome2 from "@/components/heroHome/HeroHome2";
import React from "react";
import Cosmetico from "@/public/assets/cosmesi_hero.png";
import Head from "next/head";
import cosmesiIT from "../public/locales/it/cosmesi.json";
import cosmesiEN from "../public/locales/en/cosmesi.json";
import cosmesiFR from "../public/locales/fr/cosmesi.json";
import Cards from "@/components/Cards/Cards";
import Image from "next/image";
import Nature from "@/public/assets/cosmetici/naturale.jpeg";
import Notest from "@/public/assets/cosmetici/notest.jpeg";
import Package from "@/public/assets/cosmetici/package.jpeg";
const Cosmesi = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - DeVin Cosmetica</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome2
          title="Les Crêtes DeVin Cosmetica: dall’uva per la cura naturale della pelle"
          img={Cosmetico}
        />
      </div>
      <div className="w-[90%] min-h-screen flex-col justify-start items-center gap-[60px] flex mx-auto py-10 ">
        <div className="flex flex-col gap-8  text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]">
          <p>
            La linea cosmetica DeVin presenta la sua innovativa formula naturale
            con attivi biologici all’olio di vinaccioli, polifenoli dell’uva e
            fiori di vigna realizzata dai nostri laboratori per rispondere alle
            esigenze di chi, ricercando un cosmetico naturale, non vuole
            rinunciare all’efficacia degli estratti attivi naturali del terroir
            di montagna, isolati e sviluppati con le più avanzate tecnologie.
          </p>
          <h2 className="text-main text-3xl  md:text-5xl font-bold md:leading-[50.91px]">
            Indicazioni e benefici
          </h2>
          <p>
            Ideale per tutti i tipi di pelle, contribuisce a prevenire e
            rallentare in modo naturale i segni dell’invecchiamento. Dona alla
            pelle vitalità ed un aspetto tonico e definito, conferendole una
            corretta idratazione. Sostiene la rigenerazione cutanea, apportando
            benefici nutrienti e restituendo al viso il suo naturale splendore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {translation?.cards?.map((el, i) => {
            return (
              <Cards
                key={i}
                img={el?.img}
                name={el?.name}
                details={el?.details}
                button={el.button}
              />
            );
          })}
        </div>

        <div className="w-full flex-col   gap-[60px] flex">
          <h2 className="text-main md:text-[40px] text-[35px] font-bold md:leading-[59.58px]">
            Prenditi cura di te stesso e della natura attorno
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="flex-col  flex relative">
              <Image
                className="object-cover h-[540px] rounded-md"
                src={Nature}
              />
              <p className="text-center text-neutral-600 text-[25.20px] font-['MinervaModern'] leading-[50.20px]">
                Ingredienti naturali
              </p>
            </div>
            <div className="flex-col justify-start items-center gap-[15px] inline-flex">
              <div className="flex-col  flex">
                <Image
                  className="h-[540px] object-cover rounded-md"
                  src={Notest}
                />
                <div className="text-center text-neutral-600 text-[25.20px] font-['MinervaModern'] leading-[50.20px]">
                  No test sugli animali
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-[15px] inline-flex">
              <div className="flex-col  flex">
                <Image
                  className="h-[540px] object-cover rounded-md"
                  src={Package}
                />
                <div className="text-center text-neutral-600 text-[25.20px] font-['MinervaModern'] leading-[50.20px]">
                  Bio Packaging
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-main md:text-[40px] text-[35px] font-bold md:leading-[59.58px]">
            Principali principi attivi della linea DeVin
          </h2>
          <div className="flex flex-col gap-4">
            <div className="collapse collapse-plus  bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Olio di vinaccioli
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  L’olio di vinaccioli, ottenuto tramite il procedimento di
                  spremitura a freddo, si estrae dai semi dell’uva,
                  rigorosamente senza l’impiego di solventi chimici. I semi di
                  vinacciolo racchiudono un concentrato di sostanze
                  antiossidanti (quali acido linoleico e vitamina E) in grado di
                  contrastare l’invecchiamento cutaneo e proteggere la pelle
                  dall’attacco dei radicali liberi. i semi sono inoltre ricchi
                  di sostanze attive che svolgono un’azione idratante, levigante
                  e schiarente. Questo pool di sostanze contribuisce, a
                  mantenere l’epidermide elastica e luminosa, rallentando la
                  formazione delle rughe e riparando i segni dell’invecchiamento
                  cutaneo.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Glicerina vegetale
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Composto organico nella cui struttura sono presenti tre gruppi
                  molto affini all’acqua. Il suo ruolo è quello di mantenere una
                  corretta idratazione poiché ha la facoltà di trattenere e
                  legare l’acqua. Svolge una marcata azione umettante,
                  prevenendo desquamazioni e secchezza cutanea.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Estratto di camomilla biologica (fiori)
                </h3>
              </div>
              <div className="collapse-content">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Una vera ricchezza della natura, con azione lenitiva,
                  emolliente e protettiva. Offre uno scudo di difesa contro gli
                  agenti atmosferici aggressivi, per un immediato effetto di
                  benessere e confort.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  NMF ricostituito (Natural Moisturizing Factor)
                </h3>
              </div>
              <div className="collapse-content">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Preziosa miscela idratante composta da sali (di Magnesio,
                  Manganese, Zinco, Calcio) legati al PCA, zuccheri, aminoacidi
                  (tra cui la prolina, amminoacido fondamentale per la sintesi
                  del collagene), urea, allantoina che garantisce un’idratazione
                  profonda e duratura per una pelle uniforme, idratata e
                  luminosa. E’ un fattore di idro-regolazione cutanea,
                  naturalmente presente nel film idrolipidico dell’epidermide
                  che impedisce una eccessiva disidratazione e consente di
                  mantenere integra, elastica e flessibile la superficie
                  cutanea. E’ composto da sostanze idrosolubili e igroscopiche.
                  E’ abbondantemente presente nei corneociti dove svolge
                  funzioni umettanti. Essendo però idrosolubile è facilmente
                  asportabile con solventi, detergenti, acqua e sudore. I suoi
                  livelli diminuiscono anche a causa dell’invecchiamento
                  fisiologico e per l’eccessiva esposizione alla luce solare.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Polisaccaride, protettivo effetto barriera.{" "}
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Alcuni microrganismi batterici vegetali auto producono dei
                  polisaccaridi ad elevato peso molecolare, per migliorare le
                  loro capacità di difesa e le loro possibilità di
                  sopravvivenza. Tali polisaccaridi formano una matrice
                  protettiva contro le aggressioni ambientali. Questo film
                  sottile interagisce con la superficie cutanea e favorisce
                  l’eliminazione di sostanze esogene nocive ed aggressive per
                  l’organismo come polveri sottili, metalli pesanti, radicali
                  liberi, tossine.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Alghe marine{" "}
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Ricche in mucillagini (tra cui alginati), sali minerali, con
                  un’azione emolliente, idratante, ammorbidente, protettiva,
                  ideale per pelli secche.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Acido ialuronico{" "}
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Molecola idratante per eccellenza, naturalmente presente nella
                  pelle per trattenere acqua nei tessuti. Il suo compito è
                  mantenere la pelle elastica, tesa e idratata e di aumentarne
                  la plasticità. In forma sia a basso che ad alto peso
                  molecolare, ricavato per bio-fermentazione di materiale
                  vegetale.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Collagene idrolizzato
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Proteina della bellezza, con funzione di sostegno strutturale
                  e capacità di intrappolare acqua nei tessuti. Determina
                  l’aspetto teso, elastico e compatto della pelle. Viene
                  utilizzato in forma idrolizzata perché direttamente
                  biodisponibile per contrastare atonie e prevenire la
                  formazione di rughe.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-second">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-main text-[20px] md:text-[25px] xl:text-2xl font-black  md:leading-[30.43px]">
                  Estratto di avena biologica
                </h3>
              </div>
              <div className="collapse-content ">
                <p className="text-main/60 text-lg font-normal leading-[30.43px]">
                  Altamente dermocompatibile, contrasta l’invecchiamento
                  cutaneo, idrata e potenzia la naturale rigenerazione
                  cellulare. Forma un velo di protezione che rede la pelle
                  morbida e vellutata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cosmesi;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = cosmesiIT;
      break;

    case "en":
      obj = cosmesiEN;
      break;
    case "fr":
      obj = cosmesiFR;
      break;
    default:
      obj = cosmesiIT;
      break;
  }

  return {
    props: {
      translation: obj?.cosmesi,
    },
    revalidate: 60,
  };
}
