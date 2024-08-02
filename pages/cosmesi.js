import HeroHome2 from "@/components/heroHome/HeroHome2";
import React from "react";
import Cosmetico from "@/public/assets/cosmesi_hero.webp";
import Head from "next/head";
import cosmesiIT from "../public/locales/it/cosmesi.json";
import cosmesiEN from "../public/locales/en/cosmesi.json";
import cosmesiFR from "../public/locales/fr/cosmesi.json";
import cosmesiDE from "../public/locales/de/cosmesi.json";
import cosmesiJP from "../public/locales/jp/cosmesi.json";
import cosmesiKO from "../public/locales/ko/cosmesi.json";
import cosmesiRU from "../public/locales/ru/cosmesi.json";
import cosmesiZH from "../public/locales/zh/cosmesi.json";
import Cards from "@/components/Cards/Cards";
import Image from "next/image";
const Cosmesi = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - DeVin Cosmetica</title>
      </Head>
      {/* <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]"> */}
      <HeroHome2 title={translation.hero.title} img={Cosmetico} />
      {/* </div> */}
      <div className="w-[90%] min-h-screen flex-col justify-start items-center gap-[60px]  flex mx-auto py-10 ">
        <div className="flex flex-col gap-8 text-xl font-normal text-main/80 fxl:text-2xl">
          <h2 className="text-3xl font-bold text-main md:text-5xl fxl:text-5xl">
            {translation.intro.title}
          </h2>
          <p>{translation.intro.text}</p>
          <h2 className="text-3xl font-bold text-main md:text-5xl fxl:text-5xl">
            {translation.section.title}
          </h2>
          <p>{translation.section.text}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {translation?.cards?.map((el, i) => {
            return (
              <Cards
                key={i}
                img={el?.img}
                name={el?.name}
                details={el?.details}
                button={el.button}
                price={el.price}
              />
            );
          })}
        </div>

        <div className="w-full flex-col   gap-[60px] flex">
          <h2 className="text-3xl font-bold text-main md:text-6xl ">
            {translation.well.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 uppercase xl:grid-cols-3">
            {translation.well.imgWell.map((el, i) => {
              return (
                <div className="flex flex-col" key={i}>
                  <div className="relative aspect-square">
                    <Image
                      className="object-cover w-full h-full rounded-sm "
                      src={el.img}
                      fill
                    />
                  </div>

                  <p className="text-center text-neutral-600 text-[22.20px] font-bold font-['MinervaModern'] leading-[50.20px]">
                    {el.text}
                  </p>
                </div>
              );
            })}
          </div>
          <h2 className="text-3xl font-bold text-main md:text-5xl ">
            {translation.well.ingredients.title}
          </h2>
          <div className="flex flex-col gap-4">
            {translation.well.listIngredients.map((l, i) => {
              return (
                <div
                  className="collapse collapse-plus !rounded-sm bg-second"
                  key={i}
                >
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">
                    <h3 className="text-xl font-black text-main fxl:text-3xl">
                      {l.name}
                    </h3>
                  </div>
                  <div className="collapse-content ">
                    <p className="text-lg font-normal text-main/80 fxl:text-2xl">
                      {l.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cosmesi;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = cosmesiIT;
      break;

    case "en":
      obj = cosmesiEN;
      break;
    case "fr":
      obj = cosmesiFR;
      break;
    case "de":
      obj = cosmesiDE;
      break;
    case "jp":
      obj = cosmesiJP;
      break;
    case "ko":
      obj = cosmesiKO;
      break;
    case "ru":
      obj = cosmesiRU;
      break;
    case "zh":
      obj = cosmesiZH;
      break;
    default:
      obj = cosmesiIT;
      break;
  }

  return {
    props: {
      translation: obj?.cosmesi,
    },
    revalidate: 60,
  };
}
