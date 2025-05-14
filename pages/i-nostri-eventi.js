// pages/eventi.jsx
import EventCard from "@/components/EventCard/EventCard";
import Head from "next/head";
import React from "react";
import eventiIT from "@/public/locales/it/eventi.json";
import eventiEN from "@/public/locales/en/eventi.json";
import eventiFR from "@/public/locales/fr/eventi.json";
import eventiDE from "@/public/locales/de/eventi.json";
import eventiJP from "@/public/locales/jp/eventi.json";
import eventiKO from "@/public/locales/ko/eventi.json";
import eventiRU from "@/public/locales/ru/eventi.json";
import eventiZH from "@/public/locales/zh/eventi.json";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import { Icon } from "@iconify/react";
import Link from "next/link";

function EventiPage({ translation, locale }) {
  console.log(translation);
  return (
    <>
      <Head>
        <title>Les Crêtes - i nostri eventi</title>
        <meta name="description" content="Les Crêtes - i nostri eventi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center min-h-[calc(30vh_-_70px)] md:min-h-[calc(40vh_-_70px)] fxl:min-h-[calc(50vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <div className="w-[90%] mx-auto flex flex-col gap-4 my-10">
          <h1 className="text-4xl font-regular text-main lf:text-center lg:text-6xl">
            {translation.title}
          </h1>
          <p className="w-full text-lg lg:max-w-4xl text-main/80 fxl:text-2xl">
            {translation.description}
          </p>
          <div className="mt-6">
            <CtaOutlineBrown
              link={translation.download.file}
              download
              title={translation.download.title}
            >
              {translation.download.title}
              <Icon icon="material-symbols:download" width={30} />
            </CtaOutlineBrown>
          </div>
        </div>
      </div>

      {translation.eventiPerMese.map(({ titolo, eventi }) => (
        <div key={titolo} className="w-[90%] mx-auto mt-10">
          <div className="border-b-2 border-main">
            <h2 className="px-6 py-3 text-xl tracking-wider text-white uppercase font-regular bg-main max-w-max">
              {titolo}
            </h2>
          </div>

          <div className="mt-10 mb-20">
            {eventi.map((event, index) => (
              <EventCard
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
                image={event.image}
                labels={event.labels}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default EventiPage;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = eventiIT;
      break;

    case "en":
      obj = eventiEN;
      break;
    case "fr":
      obj = eventiFR;
      break;
    case "de":
      obj = eventiDE;
      break;
    case "jp":
      obj = eventiJP;
      break;
    case "ko":
      obj = eventiKO;
      break;
    case "ru":
      obj = eventiRU;
      break;
    case "zh":
      obj = eventiZH;
      break;
    default:
      obj = eventiIT;
      break;
  }

  return {
    props: {
      translation: obj?.eventi,

      locale: locale,
    },
    revalidate: 60,
  };
}
