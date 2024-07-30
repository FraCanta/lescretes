import storiaIT from "@/public/locales/it/storia.json";
import storiaEN from "@/public/locales/en/storia.json";
import storiaFR from "@/public/locales/fr/storia.json";
import storiaDE from "@/public/locales/de/storia.json";
import storiaJP from "@/public/locales/jp/storia.json";
import storiaKO from "@/public/locales/ko/storia.json";
import storiaRU from "@/public/locales/ru/storia.json";
import storiaZH from "@/public/locales/zh/storia.json";
import HeroHome2 from "@/components/heroHome/HeroHome2";
import Sections1 from "@/components/storiaSections/Sections1";
import Sections2 from "@/components/storiaSections/Sections2";
import Sections3 from "@/components/storiaSections/Sections3";
import Link from "next/link";
import Reviews from "@/components/sections/Reviews";
import Head from "next/head";
import CtaPrimary from "@/components/Cta/CtaPrimary";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Image from "next/image";

export default function Storia({ translation }) {
  return (
    <>
      <Head>
        <title>Les Crêtes - storia</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <HeroHome2
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>
      <Sections1 translation={translation.section1} />
      <Sections2 />

      <Sections3 translation={translation.section3} />
      <div className="w-[90%] mx-auto h-[0.08rem] bg-main/20 my-10"></div>

      <div className="w-[90%] mx-auto py-10">
        <VideoPlayer video="/video/video2.mp4" poster="/video/cover.jpg" />
      </div>
      <div className="w-[90%] mx-auto py-10 lg:text-center flex flex-col gap-6 3xl:gap-10 3xl:py-32">
        <div className="flex flex-col gap-4 py-10 mx-auto lg:w-2/3 xl:w-[90%] 2xl:w-2/3 3xl:gap-10 3xl:w-11/12">
          <h2 className="text-3xl font-bold text-main lg:text-5xl 3xl:text-7xl">
            {translation.section4.title}
          </h2>
          <p className="text-xl xl:text-lg 2xl:text-xl text-main 3xl:text-4xl 3xl:leading-normal ">
            {translation.section4.descrizione}
          </p>
        </div>

        <div className="grid gap-y-16 xl:gap-4 lg:grid-cols-4">
          {translation.section4.team.map((t, i) => (
            <div className="flex flex-col gap-4 3xl:gap-8" key={i}>
              <div className="relative w-full aspect-square">
                <Image
                  src={t.img}
                  alt={`Foto di ${t.name}`}
                  fill
                  className="object-cover object-right rounded-sm"
                />
              </div>
              <div className="flex flex-col px-3 3xl:gap-4">
                <h3 className="text-2xl font-bold text-main 3xl:text-3xl">
                  {t.name}
                </h3>
                <p className="text-lg xl:text-base 2xl:text-md text-main 3xl:text-2xl">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
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
    case "de":
      obj = storiaDE;
      break;
    case "jp":
      obj = storiaJP;
      break;
    case "ko":
      obj = storiaKO;
      break;
    case "ru":
      obj = storiaRU;
      break;
    case "zh":
      obj = storiaZH;
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
