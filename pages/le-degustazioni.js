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
import Cards from "@/components/Cards/Cards";
import Head from "next/head";
import FAQ from "@/components/FAQ/FAQ";
import Banner from "@/components/Banner/Banner";
import Rif from "@/public/assets/rifugio/rifugio6.webp";
import Deg from "@/public/assets/deg3.jpg";
import HeroHome4 from "@/components/heroHome/HeroHome4";

const Degustazioni = ({ translation }) => {
  return (
    <>
      <Head>
        <title>{translation.hero.title}</title>
      </Head>
      <div className="bg-second/30 bg-pattern2a flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <HeroHome4 img={Deg} title={translation.hero.title} />
      </div>
      <div className="lg:w-[90%] mx-auto py-10 lg:py-20 flex flex-col gap-6 justify-center items-center h-full">
        {translation.intro.map((el, i) => {
          return (
            <div
              key={i}
              className="text-lg font-normal xl:text-center text-main/80 fxl:text-2xl w-[90%]"
            >
              <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
            </div>
          );
        })}
      </div>

      <div className="w-[90%] flex-col justify-start items-center gap-[60px] flex mx-auto py-20 xl:py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {translation?.cards?.map((el, i) => {
            return (
              <Cards
                key={i}
                img={el?.img}
                title={el?.title}
                descrizione={el?.descrizione}
                price={el?.price}
                link={el.link}
                bed={el.bed}
                wine={el.wine}
                fork={el.fork}
                tempo={el.tempo}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full min-h-[80vh] md:min-h-[50vh] xl:min-h-[60vh] flex flex-col justify-center bg-second   bg-pattern">
        <div className="w-[90%] h-full  mx-auto flex flex-col gap-4 md:gap-8 justify-center ">
          <h3 className="text-3xl font-bold text-main xl:text-4xl">
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
        <h2 className="py-6 text-6xl font-bold">FAQs</h2>
        <FAQ translation={translation.faq} />
      </div>

      <Banner
        img={Rif}
        title={translation.banner.title}
        paragraph={translation.banner.paragraph}
        btn2={translation.banner.btn}
        link2={translation.banner.link}
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
