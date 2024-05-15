import Tabs from "@/components/TabsWines/Tabs";
import HeroHome2 from "@/components/heroHome/HeroHome2";
import React from "react";
import viniIT from "../public/locales/it/vini.json";
import viniEN from "../public/locales/en/vini.json";
import viniFR from "../public/locales/fr/vini.json";
import viniDE from "@/public/locales/de/vini.json";
import viniJP from "@/public/locales/jp/vini.json";
import viniKO from "@/public/locales/ko/vini.json";
import viniRU from "@/public/locales/ru/vini.json";
import viniZH from "@/public/locales/zh/vini.json";
import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import Terr from "@/public/assets/terroir2.png";
const Vini = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - vini</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome2
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>
      <div className="w-[90%] mx-auto">
        <Tabs translation={translation?.tabs} />
      </div>
      <Banner
        img={Terr}
        title={translation.banner.title}
        paragraph={translation.banner.paragraph}
        btn1={translation.banner.btn}
        link1={translation.banner.link}
      />
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
    case "de":
      obj = viniDE;
      break;
    case "jp":
      obj = viniJP;
      break;
    case "ko":
      obj = viniKO;
      break;
    case "ru":
      obj = viniRU;
      break;
    case "zh":
      obj = viniZH;
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
