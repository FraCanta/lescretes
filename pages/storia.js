import storiaIT from "../public/locales/it/storia.json";
import storiaEN from "../public/locales/en/storia.json";
import storiaFR from "../public/locales/fr/storia.json";
import HeroHome2 from "@/components/heroHome/HeroHome2";
import Sections1 from "@/components/storiaSections/Sections1";
import Sections2 from "@/components/storiaSections/Sections2";
import Sections3 from "@/components/storiaSections/Sections3";
import Link from "next/link";
import Reviews from "@/components/sections/Reviews";
import Head from "next/head";
import CtaPrimary from "@/components/Cta/CtaPrimary";

export default function Storia({ translation }) {
  return (
    <>
      <Head>
        <title>Les Crêtes - storia</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome2
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>
      <Sections1 />
      <Sections2 />
      <Sections3 />
      <div className="min-h-[60vh] md:min-h-[50vh] xl:min-h-[80vh] flex flex-col justify-center items-center relative ">
        <div className="w-[90%] mx-auto flex flex-col gap-8 md:gap-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-main text-3xl md:text-5xl lg:text-[43.12px] fxl:text-6xl font-bold  lg:leading-[55.10px]">
                Dicono di noi
              </h2>
            </div>
            <div className="flex items-end md:justify-end">
              <CtaPrimary
                link="https://g.page/r/CXZcr8aa7zgbEBM/review"
                target="_blank"
              >
                Scrivi Recensione
              </CtaPrimary>
            </div>
          </div>

          <div className="w-full overflow-x-hidden">
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = storiaIT;
      break;

    case "en":
      obj = storiaEN;
      break;
    case "fr":
      obj = storiaFR;
      break;
    default:
      obj = storiaIT;
      break;
  }

  return {
    props: {
      translation: obj?.storia,
    },
    revalidate: 60,
  };
}
