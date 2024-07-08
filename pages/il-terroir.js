import Hero from "@/components/heroHome/Hero";
import React from "react";
import Ter from "@/public/assets/terroir2.webp";
import Banner from "@/components/Banner/Banner";
import Wine from "@/public/assets/vinibanner.webp";
import Head from "next/head";
import terroirIT from "@/public/locales/it/terroir.json";
import terroirEN from "@/public/locales/en/terroir.json";
import terroirFR from "@/public/locales/fr/terroir.json";
import terroirDE from "@/public/locales/de/terroir.json";
import terroirJP from "@/public/locales/jp/terroir.json";
import terroirKO from "@/public/locales/ko/terroir.json";
import terroirRU from "@/public/locales/ru/terroir.json";
import terroirZH from "@/public/locales/zh/terroir.json";
const Terroir = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - Il Terroir</title>
        <meta
          name="description"
          content="Immersa tra i giganti delle Alpi, la Valle d'Aosta è la più piccola regione italiana ma vanta la più alta concentrazione di aree protette d'Europa, con parchi come il Gran Paradiso. Divisa dalla Dora Baltea, offre paesaggi diversificati e ospita una ricca viticoltura sui suoi terrazzamenti ventilati. Esplora le sue valli laterali e assapora i suoi vini unici."
        />

        <meta
          property="og:url"
          content="https://lescretes-liard.vercel.app/terroir"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Les Crêtes - Il Terroir" />
        <meta
          property="og:description"
          content="Immersa tra i giganti delle Alpi, la Valle d'Aosta è la più piccola regione italiana ma vanta la più alta concentrazione di aree protette d'Europa, con parchi come il Gran Paradiso. Divisa dalla Dora Baltea, offre paesaggi diversificati e ospita una ricca viticoltura sui suoi terrazzamenti ventilati. Esplora le sue valli laterali e assapora i suoi vini unici."
        />
        <meta
          property="og:image"
          content="https://lescretes-liard.vercel.app/assets/terroir2.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lescretes-liard.vercel.app" />
        <meta
          property="twitter:url"
          content="https://lescretes-liard.vercel.app/terroir"
        />
        <meta name="twitter:title" content="Les Crêtes - Il Terroir" />
        <meta
          name="twitter:description"
          content="Immersa tra i giganti delle Alpi, la Valle d'Aosta è la più piccola regione italiana ma vanta la più alta concentrazione di aree protette d'Europa, con parchi come il Gran Paradiso. Divisa dalla Dora Baltea, offre paesaggi diversificati e ospita una ricca viticoltura sui suoi terrazzamenti ventilati. Esplora le sue valli laterali e assapora i suoi vini unici."
        />
        <meta
          name="twitter:image"
          content="https://lescretes-liard.vercel.app/assets/terroir2.png"
        />
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero img={Ter} text={translation.hero.title} />
      </div>
      <div className="w-[90%]  flex-col justify-start items-start gap-[50px] flex mx-auto py-20 fxl:gap-20">
        <div className="flex flex-col items-start justify-start gap-10">
          {translation.intro.map((el, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-10 text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              >
                <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
              </div>
            );
          })}
        </div>
        {translation.paragrafi.map((el, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-start justify-start gap-10"
            >
              <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold leading-[46px] 3xl:text-7xl">
                {el.title}
              </h2>
              {el.descrizione.map((para, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-10 text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
                  >
                    <p dangerouslySetInnerHTML={{ __html: para.p }}></p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <Banner
        img={Wine}
        title={translation.banner.title}
        btn1={translation.banner.btn}
        link1={translation.banner.link}
      />
    </>
  );
};

export default Terroir;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = terroirIT;
      break;

    case "en":
      obj = terroirEN;
      break;
    case "fr":
      obj = terroirFR;
      break;
    case "de":
      obj = terroirDE;
      break;
    case "jp":
      obj = terroirJP;
      break;
    case "ko":
      obj = terroirKO;
      break;
    case "ru":
      obj = terroirRU;
      break;
    case "zh":
      obj = terroirZH;
      break;
    default:
      obj = terroirIT;
      break;
  }

  return {
    props: {
      translation: obj?.terroir,
    },
    revalidate: 60,
  };
}
