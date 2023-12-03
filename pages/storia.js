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

export default function Storia({ translation }) {
  return (
    <>
      <Head>
        <title>Les Cretes - storia</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center w-full mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome2
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>
      <Sections1 />
      <Sections2 />
      <Sections3 />
      <div className="min-h-screen xl:min-h-[90vh] flex flex-col justify-center items-center relative ">
        <div className="w-[90%] mx-auto flex flex-col gap-8 lg:gap-20 ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-main text-[35px] leading-[36px] lg:text-[43.12px] font-bold  lg:leading-[55.10px]">
                Che dicono di Les Crêtes
              </h2>
              <p className="lg:w-[90%] text-main lg:text-[21.56px] font-normal leading-9">
                Lorem ipsum dolor sit amet consectetur adipiscing elit semper
                dalar elementum tempus hac tellus libero accumsan.{" "}
              </p>
            </div>
            <div className="flex items-end lg:justify-end">
              <Link
                className="capitalize font-bold py-2.5 px-6 xl:py-2 xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 xl:text-[1rem] 2xl:text-[1.2rem]  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow  text-white hover:transition-all  bg-[#4A4A49] max-w-max max-h-max"
                href="https://g.page/r/CXZcr8aa7zgbEBM/review"
                target="_blank"
              >
                Scrivi Recensione
              </Link>
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

  console.log(obj);

  return {
    props: {
      translation: obj?.storia,
    },
    revalidate: 60,
  };
}
