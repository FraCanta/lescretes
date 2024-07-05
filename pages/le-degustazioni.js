import HeroHome from "@/components/heroHome/HeroHome";
import React from "react";
import degustazioniIT from "../public/locales/it/degustazioni.json";
import degustazioniEN from "../public/locales/en/degustazioni.json";
import degustazioniFR from "../public/locales/fr/degustazioni.json";
import degustazioniDE from "@/public/locales/de/degustazioni.json";
import degustazioniJP from "@/public/locales/jp/degustazioni.json";
import degustazioniKO from "@/public/locales/ko/degustazioni.json";
import degustazioniRU from "@/public/locales/ru/degustazioni.json";
import degustazioniZH from "@/public/locales/zh/degustazioni.json";
import View from "@/public/assets/cotoView.jpg";
import Cards from "@/components/Cards/Cards";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FAQ from "@/components/FAQ/FAQ";
import Banner from "@/components/Banner/Banner";
import Rif from "@/public/assets/rifugio.jpg";

const Degustazioni = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - degustazioni</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[90%] mx-auto min-h-[calc(90vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome title={translation.hero.title} />
      </div>
      <div className="w-[90%] min-h-screen flex-col justify-start items-center gap-[60px] flex mx-auto pb-10 xl:py-10">
        {translation.intro.map((el, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-4 xl:text-center text-main text-xl font-normal fxl:text-2xl"
            >
              <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
            </div>
          );
        })}

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
      <div className="w-full min-h-[80vh] md:min-h-[50vh] xl:min-h-[60vh] flex flex-col justify-center bg-second   bg-pattern">
        <div className="w-[90%] h-full  mx-auto flex flex-col gap-4 md:gap-8 justify-center ">
          <h3 className="text-main text-3xl xl:text-4xl font-bold">
            {translation.prenota.title}
          </h3>{" "}
          {translation.prenota.list.map((el, i) => {
            return (
              <ul
                key={i}
                className="flex flex-col gap-4  text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]"
              >
                <li dangerouslySetInnerHTML={{ __html: el.name }}></li>
              </ul>
            );
          })}
          <p
            className=" text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]"
            dangerouslySetInnerHTML={{ __html: translation.prenota.nota }}
          ></p>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-[50px]">
        <h2 className="text-6xl font-bold py-6">FAQs</h2>
        <FAQ translation={translation.faq} />
      </div>

      <Banner
        img={Rif}
        title={translation.banner.title}
        paragraph={translation.banner.paragraph}
        btn1={translation.banner.btn}
        link1={translation.banner.link}
      />
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
    case "de":
      obj = degustazioniDE;
      break;
    case "jp":
      obj = degustazioniJP;
      break;
    case "ko":
      obj = degustazioniKO;
      break;
    case "ru":
      obj = degustazioniRU;
      break;
    case "zh":
      obj = degustazioniZH;
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
