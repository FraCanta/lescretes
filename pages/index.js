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
import Reviews from "@/components/sections/Reviews";
import Head from "next/head";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";

export default function Home({ translation }) {
  return (
    <>
      <Head>
        <>
          <title>
            Les Crêtes | Viticoltori dal 1750 | Valle d'Aosta - Italia
          </title>
          <meta name="author" content=" Les Crêtes" />
          <meta
            name="description"
            content="Les Crêtes - Viticoltori dal 1800 in Aymavilles (Aosta) - Produzione ed imbottigliamento - Visitaci e degusta i nostri vini - Scopri il Rifugio del Vino"
          />
          {/* <meta
            name="keywords"
            content="Mi chiamo Francesca Cantale, aka thallion dev, e sono una web designer specializzata nella UX/UI design e in Next.js. Mi occupo di consulenza e realizzazione Siti Web e E-Commerce."
          /> */}
          <meta property="og:url" content="https://www.lescretes.it/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content=" Les Crêtes | Viticoltori dal 1750 | Valle d'Aosta - Italia"
          />
          <meta
            property="og:description"
            content="Les Crêtes - Viticoltori dal 1800 in Aymavilles (Aosta) - Produzione ed imbottigliamento - Visitaci e degusta i nostri vini - Scopri il Rifugio del Vino"
          />
          {/* <meta
            property="og:image"
            content="https://www.thallion-dev.it/assets/cover_web.jpg"
          /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="lescretes.it" />
          <meta property="twitter:url" content="https://www.lescretes.it/" />
          <meta
            name="twitter:title"
            content=" Les Crêtes | Viticoltori dal 1750 | Valle d'Aosta - Italia"
          />
          <meta
            name="twitter:description"
            content="Les Crêtes - Viticoltori dal 1800 in Aymavilles (Aosta) - Produzione ed imbottigliamento - Visitaci e degusta i nostri vini - Scopri il Rifugio del Vino"
          />
          {/* <meta
            name="twitter:image"
            content="https://www.thallion-dev.it/assets/cover_web.jpg"
          /> */}
        </>
      </Head>
      <div className="h-[calc(100vh_-_60px)] md:h-[calc(100vh_-_70px)] overflow-hidden fxl:min-h-[calc(100vh_-_100px)] 3xl:min-h-[calc(100vh_-_180px)] w-full hero  relative flex text-end items-end">
        <HeroHome3 translation={translation?.hero} />
      </div>
      <div className="min-h-screen">
        <Sections2 translation={translation?.section2} />
      </div>
      <div className="relative flex flex-col items-center justify-center bg-main">
        <Sections3 translation={translation?.section3} />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen ">
        <Sections4 translation={translation.section4} tabs={translation.tabs} />
      </div>
      <div className="fxl:min-h-[80vh] bg-[#bfab25] flex flex-col justify-center items-center relative ">
        <Sections5 translation={translation.section5} />
      </div>
      <div className="min-h-[60vh] xl:min-h-[80vh] 3xl:min-h-[60vh]  flex flex-col justify-center items-center relative ">
        <div className="w-[90%] mx-auto flex flex-col gap-8 lg:gap-20 ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-main text-3xl md:text-5xl lg:text-[43.12px] fxl:text-6xl font-bold  lg:leading-[55.10px]">
                {translation.testimonials.title}
              </h2>
            </div>
            <div className="flex items-end md:justify-end">
              <CtaOutlineBrown link="https://g.page/r/CXZcr8aa7zgbEBM/review">
                {translation.testimonials.button}
              </CtaOutlineBrown>
            </div>
          </div>

          <div>
            <Reviews />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full bg-main ">
        <Sections6 translation={translation.section6} />
      </div>
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
