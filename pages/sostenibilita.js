import Head from "next/head";
import Image from "next/image";
import React from "react";
import Sost from "@/public/assets/lc2.webp";
import Hero from "@/components/heroHome/Hero";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import sostenibilitaIT from "@/public/locales/it/sostenibilita.json";
import sostenibilitaEN from "@/public/locales/en/sostenibilita.json";
import sostenibilitaFR from "@/public/locales/fr/sostenibilita.json";
import sostenibilitaDE from "@/public/locales/de/sostenibilita.json";
import sostenibilitaJP from "@/public/locales/jp/sostenibilita.json";
import sostenibilitaKO from "@/public/locales/ko/sostenibilita.json";
import sostenibilitaRU from "@/public/locales/ru/sostenibilita.json";
import sostenibilitaZH from "@/public/locales/zh/sostenibilita.json";
import { traceGlobals } from "next/dist/trace/shared";
import HeroHome2 from "@/components/heroHome/HeroHome2";

function Sostenibilita({ translation, locale }) {
  return (
    <>
      <Head>
        <>
          <title>{translation.seo.title}</title>
          <meta name="author" content="Les Crêtes" />
          <meta name="description" content={translation.seo.description} />
          <meta name="robots" content="index, follow" />

          <link
            rel="canonical"
            href={`https://www.lescretes.it/${locale.locale}/sostenibilita`}
          />
          <link
            rel="alternate"
            hrefLang="it"
            href="https://www.lescretes.it/it/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.lescretes.it/en/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="de"
            href="https://www.lescretes.it/de/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href="https://www.lescretes.it/fr/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="jp"
            href="https://www.lescretes.it/jp/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="ko"
            href="https://www.lescretes.it/ko/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="ru"
            href="https://www.lescretes.it/ru/sostenibilita"
          />
          <link
            rel="alternate"
            hrefLang="zh"
            href="https://www.lescretes.it/zh/sostenibilita"
          />

          <meta
            property="og:url"
            content={`https://www.lescretes.it/${locale.locale}/sostenibilita`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={translation.seo.title} />
          <meta property="og:locale" content={locale.locale} />
          <meta
            property="og:description"
            content={translation.seo.description}
          />
          <meta property="og:site_name" content="Les Crêtes" />
          <meta
            property="og:image"
            content="https://lescretes-liard.vercel.app/assets/seo/cover_sostenibilita.png"
          />
          <meta property="og:image:alt" content="Les Crêtes cover image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="lescretes.it" />
          <meta
            property="twitter:url"
            content="https://www.lescretes.it/sostenibilita"
          />
          <meta name="twitter:title" content={translation.seo.title} />
          <meta
            name="twitter:description"
            content={translation.seo.description}
          />
          <meta
            name="twitter:image"
            content="https://lescretes-liard.vercel.app/assets/seo/cover_sostenibilita.png"
          />
          <meta name="twitter:image:alt" content="Les Crêtes cover image" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${translation.seo.title}",
            "description": "${translation.seo.description}",
            "url": "https://www.lescretes.it/${locale.locale}/sostenibilita",
            "logo": "https://www.lescretes.it/favicon.ico"
          }
        `,
            }}
          />
        </>
      </Head>
      {/* <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]"> */}
      <HeroHome2
        img={translation.hero.img}
        title={translation.hero.title}
        alt="Immagine della sostenibilità"
      />
      {/* </div> */}
      <div className="flex flex-col items-center justify-center gap-10 pb-24 ">
        <div className="flex gap-6 ">
          <Image
            src="/assets/sqnpi.png"
            alt="sqnpi logo"
            width={150}
            height={150}
          />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold lg:text-center text-main w-[90%] lg:w-[70%] mx-auto">
          {translation.garanzia.title}
        </h2>
        <p className="text-xl lg:text-center text-main w-[90%] lg:w-[70%] lg:mx-auto">
          {translation.garanzia.descrizione}
        </p>
      </div>
      <div className="bg-[#77966d]/30 flex flex-col items-center justify-center relative  lg:p-6 bg-pattern3">
        <div className="flex flex-col gap-6 py-10 lg:p-10">
          {" "}
          <h2 className="text-3xl lg:text-5xl font-bold lg:text-center text-main w-[90%] lg:w-[70%] mx-auto">
            {translation.verde.title}
          </h2>
          <p className="text-xl lg:text-center text-main w-[90%] lg:w-[80%] mx-auto">
            {translation.verde.descrizione}
          </p>
        </div>
        <div className="w-[90%] mx-auto  grid items-center grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/assets/rifugio/rifugio1.webp"
                fill
                className="object-cover w-full h-full rounded-sm"
                alt="Dentro Verde"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-3xl font-bold text-main">
              {translation.verde.title2}
            </h2>
            <p className="text-xl text-main lg:w-[70%]">
              {translation.verde.descrizione2}
            </p>
            <div className="flex flex-col gap-6 max-w-max">
              <CtaOutlineBrown
                link="/pdf/certificato-TUV-impianto-idrico-di-colombaro-to.pdf"
                title="Certificato TUV pdf"
              >
                {translation.verde.tuv}
              </CtaOutlineBrown>
              <CtaOutlineBrown
                link="/pdf/Certificato-di-provenienza-ITA.pdf"
                title="Certificato di provenienza pdf"
              >
                {translation.verde.provenienza}
              </CtaOutlineBrown>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center lg:p-6 ">
        <div className="flex flex-col gap-6 py-10 lg:p-10  w-[90%] mx-auto">
          {" "}
          <h2 className="text-3xl font-bold lg:text-5xl lg:text-center text-main">
            {translation.packaging.title}
          </h2>
          <p className="text-xl lg:text-center text-main lg:w-[70%] mx-auto">
            {translation.packaging.descrizione}
          </p>
        </div>
        <div className="w-[90%] mx-auto  grid items-center grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/assets/tappo.webp"
                fill
                className="object-cover w-full h-full rounded-sm"
                alt="nomacorc"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-3xl font-bold text-main">
              {translation.packaging.tappo.title}
            </h2>
            <p className="text-xl text-main">
              {translation.packaging.tappo.descrizione}
            </p>
            <div className="flex flex-col gap-6 max-w-max">
              <CtaOutlineBrown
                link="/pdf/Nomacorc.pdf"
                title="Pdf sulla Linea Select Bio di Nomacorc"
              >
                {translation.packaging.tappo.cta}
              </CtaOutlineBrown>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto  grid items-center grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-main">
              {translation.packaging.bottiglie.title}
            </h2>
            <p className="text-xl text-main ">
              {translation.packaging.bottiglie.descrizione}
            </p>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/assets/elena.webp"
                fill
                className="object-cover w-full h-full rounded-sm"
                alt="bottiglie Les Crêtes"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sostenibilita;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = sostenibilitaIT;
      break;

    case "en":
      obj = sostenibilitaEN;
      break;
    case "fr":
      obj = sostenibilitaFR;
      break;
    case "de":
      obj = sostenibilitaDE;
      break;
    case "jp":
      obj = sostenibilitaJP;
      break;
    case "ko":
      obj = sostenibilitaKO;
      break;
    case "ru":
      obj = sostenibilitaRU;
      break;
    case "zh":
      obj = sostenibilitaZH;
      break;
    default:
      obj = sostenibilitaIT;
      break;
  }

  return {
    props: {
      translation: obj?.sostenibilita,
      locale: locale,
    },
    revalidate: 60,
  };
}
