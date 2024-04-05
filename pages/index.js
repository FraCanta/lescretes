import HeroHome3 from "@/components/heroHome/HeroHome3";
import homeIT from "../public/locales/it/home.json";
import homeEN from "../public/locales/en/home.json";
import homeFR from "../public/locales/fr/home.json";
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
          name="description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        {/* <meta
          name="keywords"
          content="Studio grafico, 
          Grafica,
          Arte grafica,
          Agenzia di graphic design,
          Graphic design,
          Branding, 
          Agenzia di branding,
          Agenzia di comunicazione, 
          Comunicazione visiva, 
          studio grafico Milano, 
          Milano,
          Agenzia di branding Milano,
          Grafico Milano,
          Grafica Milano,
          Graphic design studio,
          Soluzioni creative,
          Soluzioni creative su misura,
          Immagine coordinata, 
          Studio di graphic design Milano,
          Grafico,
          Graphic designer,
          Designer grafico,
          Studio di comunicazione, 
          Identità visiva, 
          Logo maker, 
          Creative agendo,
          Creative solutions, 
          Comunicazione visiva, 
          Arte del comunicare"
        />
        <meta name="author" content="Elisa Avantey" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Miao graphics - grafismi itineranti"
        />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta
          name="twitter:title"
          content="Miao graphics - grafismi itineranti"
        />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        /> */}
      </Head>
      <div className="h-[calc(100vh_-_60px)] md:h-[calc(100vh_-_70px)] overflow-hidden fxl:min-h-[calc(100vh_-_100px)] 3xl:min-h-[calc(100vh_-_180px)] w-full hero  relative flex text-end items-end">
        <HeroHome3 translation={translation?.hero} />
      </div>
      <div className="min-h-screen">
        <Sections2 />
      </div>
      <div className=" bg-main flex flex-col justify-center items-center relative ">
        <Sections3 />
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center relative ">
        <Sections4 tabs={translation.tabs} />
      </div>
      <div className="min-h-screen fxl:min-h-[80vh] bg-main flex flex-col justify-center items-center relative ">
        <Sections5 />
      </div>
      <div className="min-h-[60vh] xl:min-h-[80vh]  flex flex-col justify-center items-center relative ">
        <div className="w-[90%] mx-auto flex flex-col gap-8 lg:gap-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-main text-3xl md:text-5xl lg:text-[43.12px] fxl:text-6xl font-bold  lg:leading-[55.10px]">
                Dicono di noi
              </h2>
              {/* <p className="lg:w-[90%] text-main lg:text-[21.56px] font-normal leading-9">
                Lorem ipsum dolor sit amet consectetur adipiscing elit semper
                dalar elementum tempus hac tellus libero accumsan.{" "}
              </p> */}
            </div>
            <div className="flex items-end md:justify-end">
              <CtaPrimary link="https://g.page/r/CXZcr8aa7zgbEBM/review">
                Scrivi Recensione
              </CtaPrimary>
            </div>
          </div>

          <div>
            <Reviews />
          </div>
        </div>
      </div>
      <div className="w-full  bg-main flex flex-col justify-center items-center relative ">
        <Sections6 />
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
