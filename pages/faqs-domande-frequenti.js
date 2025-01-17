import FAQ from "@/components/FAQ/FAQ";
import React from "react";
import faqIT from "@/public/locales/it/faq.json";
import faqEN from "@/public/locales/en/faq.json";
import faqFR from "@/public/locales/fr/faq.json";
import faqDE from "@/public/locales/de/faq.json";
import faqJP from "@/public/locales/jp/faq.json";
import faqKO from "@/public/locales/ko/faq.json";
import faqRU from "@/public/locales/ru/faq.json";
import faqZH from "@/public/locales/zh/faq.json";
import Head from "next/head";

function faqsDomandeFrequenti({ translation }) {
  return (
    <>
      <Head>
        <title>{translation.title}</title>
      </Head>
      <div className="w-[90%] mx-auto my-[50px]">
        <div className="flex flex-col gap-4 my-10 text-main">
          <h1 className="text-4xl font-bold lg:text-6xl ">
            {translation.title}
          </h1>
          <p
            className="text-lg lg:text-xl"
            dangerouslySetInnerHTML={{
              __html: translation.p,
            }}
          ></p>
        </div>

        <FAQ translation={translation} />
      </div>
    </>
  );
}

export default faqsDomandeFrequenti;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = faqIT;
      break;

    case "en":
      obj = faqEN;
      break;
    case "fr":
      obj = faqFR;
      break;
    case "de":
      obj = faqDE;
      break;
    case "jp":
      obj = faqJP;
      break;
    case "ko":
      obj = faqKO;
      break;
    case "ru":
      obj = faqRU;
      break;
    case "zh":
      obj = faqZH;
      break;
    default:
      obj = faqIT;
      break;
  }

  return {
    props: {
      translation: obj?.faq,
      locale: locale,
    },
    revalidate: 60,
  };
}
