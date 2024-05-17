import HeroHome3 from "@/components/heroHome/HeroHome3";
import homeIT from "@/public/locales/it/home.json";
import homeEN from "@/public/locales/en/home.json";
import homeFR from "@/public/locales/fr/home.json";
import homeDE from "@/public/locales/de/home.json";
import homeJP from "@/public/locales/jp/home.json";
import homeKO from "@/public/locales/ko/home.json";
import homeRU from "@/public/locales/ru/home.json";
import homeZH from "@/public/locales/zh/home.json";
import Sections2 from "@/components/sections/Sections2";
import Sections3 from "@/components/sections/Sections3";
import Sections4 from "@/components/sections/Sections4/Sections4";
import Sections5 from "@/components/sections/Sections5";
import Sections6 from "@/components/sections/Sections6";
import Sections7 from "@/components/sections/Sections7";
import Reviews from "@/components/sections/Reviews";
import Link from "next/link";
import Head from "next/head";
import CtaPrimary from "@/components/Cta/CtaPrimary";

export default function Home({ translation }) {
  return (
    <>
      <Head>
        <title>Les Crêtes </title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="h-[calc(100vh_-_60px)] md:h-[calc(100vh_-_70px)] overflow-hidden fxl:min-h-[calc(100vh_-_100px)] 3xl:min-h-[calc(100vh_-_180px)] w-full hero  relative flex text-end items-end">
        <HeroHome3 translation={translation?.hero} />
      </div>
      <div className="min-h-screen">
        <Sections2 translation={translation?.section2} />
      </div>
      <div className=" bg-main flex flex-col justify-center items-center relative ">
        <Sections3 translation={translation?.section3} />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center relative ">
        <Sections4 translation={translation.section4} tabs={translation.tabs} />
      </div>
      <div className="fxl:min-h-[80vh] bg-main flex flex-col justify-center items-center relative ">
        <Sections5 translation={translation.section5} />
      </div>
      <div className="min-h-[60vh] xl:min-h-[80vh] 3xl:min-h-[60vh]  flex flex-col justify-center items-center relative ">
        <div className="w-[90%] mx-auto flex flex-col gap-8 lg:gap-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-main text-3xl md:text-5xl lg:text-[43.12px] fxl:text-6xl font-bold  lg:leading-[55.10px]">
                {translation.testimonials.title}
              </h2>
            </div>
            <div className="flex items-end md:justify-end">
              <CtaPrimary link="https://g.page/r/CXZcr8aa7zgbEBM/review">
                {translation.testimonials.button}
              </CtaPrimary>
            </div>
          </div>

          <div>
            <Reviews />
          </div>
        </div>
      </div>
      <div className="w-full  bg-main flex flex-col justify-center items-center relative ">
        <Sections6 translation={translation.section6} />
      </div>
      {/* <div className="min-h-screen 2xl:min-h-[80vh] flex flex-col justify-center items-center relative ">
        <Sections7 />
      </div> */}
    </>
  );
}

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = homeIT;
      break;

    case "en":
      obj = homeEN;
      break;
    case "fr":
      obj = homeFR;
      break;
    case "de":
      obj = homeDE;
      break;
    case "jp":
      obj = homeJP;
      break;
    case "ko":
      obj = homeKO;
      break;
    case "ru":
      obj = homeRU;
      break;
    case "zh":
      obj = homeZH;
      break;
    default:
      obj = homeIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
    },
    revalidate: 60,
  };
}
