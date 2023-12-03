import Tabs from "@/components/TabsWines/Tabs";
import HeroHome2 from "@/components/heroHome/HeroHome2";
import React from "react";
import viniIT from "../public/locales/it/vini.json";
import viniEN from "../public/locales/en/vini.json";
import viniFR from "../public/locales/fr/vini.json";
import Head from "next/head";

const Vini = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - vini</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[90%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome2
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>
      <div className="w-[90%] mx-auto">
        <Tabs translation={translation?.tabs} />
      </div>
    </>
  );
};

export default Vini;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = viniIT;
      break;

    case "en":
      obj = viniEN;
      break;
    case "fr":
      obj = viniFR;
      break;
    default:
      obj = viniIT;
      break;
  }

  return {
    props: {
      translation: obj?.vini,
    },
    revalidate: 60,
  };
}
