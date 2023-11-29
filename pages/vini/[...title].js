import React from "react";
import Image from "next/image";
import Merle from "@/public/assets/vinirossi/nebbiolo.webp";
import viniIT from "../../public/locales/it/vini.json";
import viniEN from "../../public/locales/en/vini.json";
import viniFR from "../../public/locales/fr/vini.json";

const SingleWine = ({ title }) => {
  // console.log(title);
  return (
    <>
      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_60px)] fxl:min-h-[calc(100vh_-_100px)] w-full h-full relative grid grid-cols-1 xl:grid-cols-2">
        <div className="flex items-center justify-center relative bg-pattern min-h-[calc(100vh_-_70px)] xl:h-[calc(100vh_-_60px)]">
          <Image src={Merle} alt="" fill className="object-contain p-8" />
        </div>
        <div className="flex py-8 w-[90%] mx-auto xl:mx-0">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <h1 className="text-main text-[42.08px] font-black  leading-[53.77px]">
              Nebbiolo ‘Sommet’ Les Crêtes
            </h1>
            <p className="text-[18px] leading-[32px]">
              Il “Sommet” di Les Cretes è un Nebbiolo valdostano di estrema
              finezza e freschezza, immagine coerente della cime della montagna
              verso cui guardano le viti. Dopo un passaggio in legno di un anno,
              sfodera al naso un ventaglio organolettico di fiori e frutti
              selvatici, muschio e liquirizia, cenere e eucalipto e rinfresca il
              palato con un assaggio succoso, sapido e finemente tannico
            </p>
            <h3 className="text-main text-[30px] font-bold  leading-normal">
              Caratteristiche:
            </h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full gap-4 xl:gap-0">
              <ul className="flex flex-col justify-between gap-4 xl:gap-0">
                <li>items 1</li>
                <li>items 2</li>
                <li>items 3</li>
                <li>items 4</li>
                <li>items 5</li>
              </ul>
              <ul className="flex flex-col justify-between gap-4 xl:gap-0">
                <li>items 1</li>
                <li>items 2</li>
                <li>items 3</li>
                <li>items 4</li>
                <li>items 5</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleWine;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
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
  let targetObj = obj?.vini?.singleWine?.[params?.title];

  return {
    props: {
      title: params.title,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
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

  const wines = Object.keys(obj?.vini?.singleWine);
  console.log(wines);
  const pathEn = wines?.map((el) => {
    return {
      params: {
        title: [el],
      },
      locale: "en",
    };
  });
  const pathFr = wines?.map((el) => {
    return {
      params: {
        title: [el],
      },
      locale: "fr",
    };
  });
  const pathIt = wines?.map((el) => {
    return {
      params: {
        title: [el],
      },
      locale: "it",
    };
  });
  // console.log(pathIt);
  const paths = [];
  return {
    paths,
    fallback: false,
  };
}
