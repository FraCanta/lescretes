import storiaIT from "@/public/locales/it/storia.json";
import storiaEN from "@/public/locales/en/storia.json";
import storiaFR from "@/public/locales/fr/storia.json";
import storiaDE from "@/public/locales/de/storia.json";
import storiaJP from "@/public/locales/jp/storia.json";
import storiaKO from "@/public/locales/ko/storia.json";
import storiaRU from "@/public/locales/ru/storia.json";
import storiaZH from "@/public/locales/zh/storia.json";
import Sections1 from "@/components/storiaSections/Sections1";
import Sections2 from "@/components/storiaSections/Sections2";
import Sections3 from "@/components/storiaSections/Sections3";
import Head from "next/head";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Image from "next/image";
import HeroHome4 from "@/components/heroHome/HeroHome4";

export default function Storia({ translation, locale }) {
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
            href={`https://www.lescretes.it/${locale.locale}/la-famiglia-charrere`}
          />
          <link
            rel="alternate"
            hrefLang="it"
            href="https://www.lescretes.it/it/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.lescretes.it/en/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="de"
            href="https://www.lescretes.it/de/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href="https://www.lescretes.it/fr/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="jp"
            href="https://www.lescretes.it/jp/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="ko"
            href="https://www.lescretes.it/ko/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="ru"
            href="https://www.lescretes.it/ru/la-famiglia-charrere"
          />
          <link
            rel="alternate"
            hrefLang="zh"
            href="https://www.lescretes.it/zh/la-famiglia-charrere"
          />

          <meta
            property="og:url"
            content={`https://www.lescretes.it/${locale.locale}/la-famiglia-charrere`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={translation.seo.title} />
          <meta property="og:locale" content={locale.locale} />
          <meta
            property="og:description"
            content={translation.seo.description}
          />
          <meta property="og:site_name" content="Les Crêtes" />
          <meta
            property="og:image"
            content="https://www.lescretes.it/assets/seo/cover_storia.png"
          />
          <meta property="og:image:alt" content="Les Crêtes cover image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="lescretes.it" />
          <meta
            property="twitter:url"
            content={`https://www.lescretes.it/${locale.locale}/la-famiglia-charrere`}
          />
          <meta name="twitter:title" content={translation.seo.title} />
          <meta
            name="twitter:description"
            content={translation.seo.description}
          />
          <meta
            name="twitter:image"
            content="https://www.lescretes.it/assets/seo/cover_storia.png"
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
            "url": "https://www.lescretes.it/${locale.locale}/la-famiglia-charrere",
            "logo": "https://www.lescretes.it/favicon.ico"
          }
        `,
            }}
          />
        </>
      </Head>
      <div className="bg-second/20 bg-pattern2a flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_60px)] md:min-h-[calc(100vh_-_90px)] fxl:min-h-[calc(100vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <HeroHome4
          title={translation?.hero?.title}
          img={translation?.hero?.img}
          subText={translation?.hero?.subText}
        />
      </div>
      <Sections1 translation={translation.section1} />
      <Sections2 />

      <Sections3 translation={translation.section3} />

      {/* <div className="w-[90%] mx-auto lg:py-10">
        <VideoPlayer video="/video/video2.mp4" poster="/video/cover.jpg" />
      </div> */}
      <div className="w-[90%] mx-auto lg:py-10 lg:text-center flex flex-col gap-6 3xl:gap-10 3xl:py-32">
        <div className="flex flex-col gap-4 py-10 mx-auto lg:w-2/3 xl:w-[90%] 2xl:w-2/3 3xl:gap-10 3xl:w-11/12">
          <h2 className="text-3xl font-bold text-main lg:text-5xl 3xl:text-7xl">
            {translation.section4.title}
          </h2>
          <p className="text-lg 2xl:text-xl text-main/80 3xl:text-4xl 3xl:leading-normal ">
            {translation.section4.descrizione}
          </p>
        </div>

        <div className="grid gap-y-16 xl:gap-4 lg:grid-cols-3">
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
              <div className="flex flex-col gap-1 px-3 3xl:gap-4">
                <h3 className="text-2xl font-bold text-main 3xl:text-3xl">
                  {t.name}
                </h3>
                <p className="text-lg xl:text-base 2xl:text-md text-main/80 3xl:text-2xl">
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
      locale: locale,
    },
    revalidate: 60,
  };
}
