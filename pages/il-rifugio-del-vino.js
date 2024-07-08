import React from "react";
import Rif from "@/public/assets/rifugio.webp";
import Hero from "@/components/heroHome/Hero";
import Head from "next/head";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Banner from "@/components/Banner/Banner";
import Deg from "@/public/assets/degustazione.webp";
import Link from "next/link";
import { Icon } from "@iconify/react";
import rifugioIT from "@/public/locales/it/rifugio.json";
import rifugioEN from "@/public/locales/en/rifugio.json";
import rifugioFR from "@/public/locales/fr/rifugio.json";
import rifugioDE from "@/public/locales/de/rifugio.json";
import rifugioJP from "@/public/locales/jp/rifugio.json";
import rifugioKO from "@/public/locales/ko/rifugio.json";
import rifugioRU from "@/public/locales/ru/rifugio.json";
import rifugioZH from "@/public/locales/zh/rifugio.json";
const Rifugio = ({ translation }) => {
  return (
    <>
      <Head>
        <title key="title">Il Rifugio del vino</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero img={Rif} text={translation?.hero.title} />
      </div>
      <div className="w-[90%]  flex-col justify-start items-start gap-[50px] flex mx-auto py-10 lg:py-20 fxl:gap-20 ">
        {translation.section1.map((el, i) => {
          return (
            <div
              className="flex flex-col items-start justify-start gap-10"
              key={i}
            >
              <h2 className="text-3xl font-bold text-main md:text-5xl fxl:text-6xl 3xl:text-7xl">
                {el.title}
              </h2>
              {el.descrizione.map((d, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-10 text-xl font-normal text-main/80 md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal"
                  >
                    <p dangerouslySetInnerHTML={{ __html: d.p }}></p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="w-full min-h-[40vh] flex flex-col justify-center bg-second   bg-pattern">
        <div className="w-[90%] h-full  mx-auto flex flex-col gap-4 md:gap-8 justify-center ">
          <h3 className="text-3xl font-bold text-main md:text-4xl fxl:text-5xl 3xl:text-6xl">
            {translation.section2.title}
          </h3>
          <ul className="flex flex-col gap-2 text-xl font-normal text-main/80 md:text-2xl xl:text-xl 3xl:text-3xl fxl:text-2xl">
            {translation.section2.links.map((el, i) => {
              return (
                <li key={i}>
                  <Link
                    href={el.link}
                    className="inline-flex items-center"
                    target="_blank"
                  >
                    <Icon icon="ph:dot-bold" width={40} />{" "}
                    <span className="underline"> {el.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-10">
        <div className="flex flex-col items-start justify-start gap-10">
          <h2 className="text-3xl font-bold text-main md:text-5xl fxl:text-6xl 3xl:text-7xl">
            {translation.section3.title}
          </h2>
          <div className="flex flex-col gap-10 text-xl font-normal text-main/80 md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal">
            <p
              dangerouslySetInnerHTML={{
                __html: translation.section3.descrizione,
              }}
            ></p>
            <ul className="flex flex-col gap-4 fxl:gap-8  text-main/main text-[20px] md:text-2xl 2xl:text-xl font-normal fxl:text-2xl 3xl:text-4xl">
              {translation.section3.list.map((el, i) => {
                return (
                  <li key={i}>
                    <span className="font-bold">- {el.name}</span> {el.span}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 fxl:gap-8 xl:py-20 mx-auto mt-14  w-[90%] lg:justify-center xl:items-center">
        <h2 className="text-3xl font-bold text-main md:text-5xl fxl:text-6xl lg:text-center 3xl:text-7xl">
          {translation.gallery.title}
        </h2>

        <ImageGallery />
      </div>
      <Banner
        img={Deg}
        title={translation.banner.title}
        paragraph={translation.banner.paragraph}
        btn1={translation.banner.btn1}
        btn2={translation.banner.btn2}
        link1={translation.banner.link1}
        link2={translation.banner.link2}
      />
    </>
  );
};

export default Rifugio;
export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = rifugioIT;
      break;

    case "en":
      obj = rifugioEN;
      break;
    case "fr":
      obj = rifugioFR;
      break;
    case "de":
      obj = rifugioDE;
      break;
    case "jp":
      obj = rifugioJP;
      break;
    case "ko":
      obj = rifugioKO;
      break;
    case "ru":
      obj = rifugioRU;
      break;
    case "zh":
      obj = rifugioZH;
      break;
    default:
      obj = rifugioIT;
      break;
  }

  return {
    props: {
      translation: obj?.rifugio,
    },
    revalidate: 60,
  };
}
