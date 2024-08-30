import Hero from "@/components/heroHome/Hero";
import React from "react";
import Head from "next/head";
import terroirIT from "@/public/locales/it/terroir.json";
import terroirEN from "@/public/locales/en/terroir.json";
import terroirFR from "@/public/locales/fr/terroir.json";
import terroirDE from "@/public/locales/de/terroir.json";
import terroirJP from "@/public/locales/jp/terroir.json";
import terroirKO from "@/public/locales/ko/terroir.json";
import terroirRU from "@/public/locales/ru/terroir.json";
import terroirZH from "@/public/locales/zh/terroir.json";
import Image from "next/image";
import Denominazione from "@/public/assets/denomi.png";
import Valle from "@/public/assets/valle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import HeroHome2 from "@/components/heroHome/HeroHome2";

const Terroir = ({ translation, locale }) => {
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
            href={`https://www.lescretes.it/${locale.locale}/il-terroir`}
          />
          <link
            rel="alternate"
            hrefLang="it"
            href="https://www.lescretes.it/it/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.lescretes.it/en/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="de"
            href="https://www.lescretes.it/de/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href="https://www.lescretes.it/fr/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="jp"
            href="https://www.lescretes.it/jp/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="ko"
            href="https://www.lescretes.it/ko/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="ru"
            href="https://www.lescretes.it/ru/il-terroir"
          />
          <link
            rel="alternate"
            hrefLang="zh"
            href="https://www.lescretes.it/zh/il-terroir"
          />

          <meta
            property="og:url"
            content={`https://www.lescretes.it/${locale.locale}/il-terroir`}
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
            content="https://lescretes-liard.vercel.app/assets/seo/cover_terroir.png"
          />
          <meta property="og:image:alt" content="Les Crêtes cover image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="lescretes.it" />
          <meta
            property="twitter:url"
            content={`https://www.lescretes.it/${locale.locale}/il-terroir`}
          />
          <meta name="twitter:title" content={translation.seo.title} />
          <meta
            name="twitter:description"
            content={translation.seo.description}
          />
          <meta
            name="twitter:image"
            content="https://lescretes-liard.vercel.app/assets/seo/cover_terroir.png"
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
            "url": "https://www.lescretes.it/${locale.locale}/il-terroir",
            "logo": "https://www.lescretes.it/favicon.ico"
          }
        `,
            }}
          />
        </>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero img="/assets/coteau2.webp" text={translation.hero.title} />
      </div>
      <div className="w-[90%]  flex-col justify-start items-start gap-[50px] flex mx-auto py-20 fxl:gap-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold lg:text-center lg:text-5xl">
            {translation.section1.title}
          </h2>
          <div className="relative w-full lg:w-[80%] h-full aspect-square lg:aspect-video mx-auto grayscale opacity-95">
            <Image
              src={Valle}
              alt="denominazione"
              fill
              className="object-contain "
            />
          </div>
          {translation.section1.intro.map((el, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-10 text-lg font-normal lg:text-center text-main/80 fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              >
                <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full gap-10">
          <h2 className="text-4xl font-bold lg:text-5xl lg:text-center">
            {translation.section2.title}
          </h2>
          <div className="relative w-full lg:w-[50%] h-full aspect-video lg:mx-auto">
            <Image
              src={Denominazione}
              alt="denominazione"
              fill
              className="object-contain"
            />
          </div>
          <p className="lg:w-[80%] mx-auto text-lg lg:text-center lg:text-xl text-main/80">
            {translation.section2.paragrafo}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 w-[90%] mx-auto text-center py-10">
          {translation.section3.map((el, i) => {
            return (
              <div className="stats  !bg-white text-main" key={i}>
                <div className="flex flex-col justify-center  gap-4 mx-auto text-center w-[90%]">
                  <h2 className="font-bold text-8xl lg:text-8xl">
                    {el.number}
                  </h2>
                  <hr />
                  <p className="flex flex-wrap text-base text-main/80">
                    {el.didascalia}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full mb-20">
        <div className="flex flex-col lg:items-center lg:justify-center gap-6 mb-10 lg:py-10 w-[90%] mx-auto lg:text-center">
          <h2 className="text-4xl font-bold lg:text-5xl text-main">
            {translation.section4.title}
          </h2>{" "}
          <p className="w-11/12 text-lg lg:text-xl text-main/80">
            {translation.section4.descrizione}
          </p>
          <CtaOutlineBrown link="/sostenibilita" title="storia">
            {translation.section4.cta}
          </CtaOutlineBrown>
        </div>
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          loop={true}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/1.webp"
                alt="vendemmia"
                fill
                className="object-cover object-top rounded-sm"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/2.jpg"
                alt="vendemmia"
                fill
                className="object-cover object-right rounded-sm"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/3.jpg"
                alt="vendemmia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/4.JPG"
                alt="vendemmia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/5.jpg"
                alt="vendemmia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/6.jpg"
                alt="vendemmia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/7.jpg"
                alt="vendemmia"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-[90%] mx-auto flex flex-col lg:gap-10 lg:text-center pb-10">
        <h2 className="py-10 text-4xl font-bold lg:text-5xl text-main">
          {translation.section5.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 gap-y-20">
          {translation.section5.menupage.map((m, i) => {
            return (
              <div
                className="flex flex-col justify-start gap-4 lg:gap-6 lg:items-center"
                key={i}
              >
                {" "}
                <div className="relative w-full aspect-square">
                  <Image
                    src={m.img}
                    alt="vendemmia"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <p className="text-2xl font-bold text-main">{m.name}</p>
                <CtaOutlineBrown link={m.link} title="degustazioni">
                  {m.cta}
                </CtaOutlineBrown>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Terroir;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = terroirIT;
      break;

    case "en":
      obj = terroirEN;
      break;
    case "fr":
      obj = terroirFR;
      break;
    case "de":
      obj = terroirDE;
      break;
    case "jp":
      obj = terroirJP;
      break;
    case "ko":
      obj = terroirKO;
      break;
    case "ru":
      obj = terroirRU;
      break;
    case "zh":
      obj = terroirZH;
      break;
    default:
      obj = terroirIT;
      break;
  }

  return {
    props: {
      translation: obj?.terroir,
      locale: locale,
    },
    revalidate: 60,
  };
}
