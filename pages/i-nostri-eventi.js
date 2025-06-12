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
  return (
    <>
      <Head>
        <title>{`Les Crêtes - ${translation.title}`}</title>
        <meta name="description" content={translation.description} />
        <meta
          property="og:url"
          content={`https://www.lescretes.it/${locale.locale}/i-nostri-eventi`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Les Crêtes - ${translation.title}`}
        />
        <meta property="og:locale" content={locale.locale} />
        <meta property="og:description" content={translation.description} />
        <meta property="og:site_name" content="Les Crêtes" />
        <meta
          property="og:image"
          content="https://www.lescretes.it/assets/seo/cover_home.png"
        />
        <meta property="og:image:alt" content="Les Crêtes cover image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lescretes.it" />
        <meta property="twitter:url" content="https://www.lescretes.it/" />
        <meta
          name="twitter:title"
          content={`Les Crêtes - ${translation.title}`}
        />
        <meta name="twitter:description" content={translation.description} />
        <meta
          name="twitter:image"
          content="https://www.lescretes.it/assets/seo/cover_home.png"
        />
        <meta name="twitter:image:alt" content="Les Crêtes cover image" />
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
                wine={event.wine}
                fork={event.fork}
                tempo={event.tempo}
                price={event.price}
                priceTitle={event.priceTitle}
                link={event.link}
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
