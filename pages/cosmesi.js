import HeroHome2 from "@/components/heroHome/HeroHome2";
import React from "react";
import Cosmetico from "@/public/assets/cosmesi_hero.png";
import Head from "next/head";
import cosmesiIT from "../public/locales/it/cosmesi.json";
import cosmesiEN from "../public/locales/en/cosmesi.json";
import cosmesiFR from "../public/locales/fr/cosmesi.json";
import Cards from "@/components/Cards/Cards";

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
      <div className="w-[90%] min-h-screen flex-col justify-start items-center gap-[60px] flex mx-auto py-10 xl:py-10">
        <div className="flex flex-col gap-6 xl:gap-10 text-main text-[16px] xl:text-[20px] font-normal leading-[33.20px]">
          <p>
            La linea cosmetica DeVin presenta la sua innovativa formula naturale
            con attivi biologici all’olio di vinaccioli, polifenoli dell’uva e
            fiori di vigna realizzata dai nostri laboratori per rispondere alle
            esigenze di chi, ricercando un cosmetico naturale, non vuole
            rinunciare all’efficacia degli estratti attivi naturali del terroir
            di montagna, isolati e sviluppati con le più avanzate tecnologie.
          </p>
          <h2 className="text-main text-3xl  xl:text-5xl font-bold xl:leading-[50.91px]">
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
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
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

  console.log(obj);

  return {
    props: {
      translation: obj?.cosmesi,
    },
    revalidate: 60,
  };
}
