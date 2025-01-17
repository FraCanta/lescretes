import React from "react";
import degustazioniIT from "../public/locales/it/degustazioni.json";
import degustazioniEN from "../public/locales/en/degustazioni.json";
import degustazioniFR from "../public/locales/fr/degustazioni.json";
import degustazioniDE from "@/public/locales/de/degustazioni.json";
import degustazioniJP from "@/public/locales/jp/degustazioni.json";
import degustazioniKO from "@/public/locales/ko/degustazioni.json";
import degustazioniRU from "@/public/locales/ru/degustazioni.json";
import degustazioniZH from "@/public/locales/zh/degustazioni.json";
import dynamic from "next/dynamic";
const Cards2 = dynamic(() => import("@/components/Cards/Cards2"));
const FAQ = dynamic(() => import("@/components/FAQ/FAQ"));
const Banner = dynamic(() => import("@/components/Banner/Banner"));
const HeroHome4 = dynamic(() => import("@/components/heroHome/HeroHome4"));
import Head from "next/head";
import Rif from "@/public/assets/rifugio/rifugio6.webp";
import Deg from "@/public/assets/deg3.jpg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Degustazioni = ({ translation, locale }) => {
  return (
    <>
      <Head>
        <title>{translation.seo.title}</title>
        <meta name="author" content="Les Crêtes" />
        <meta name="description" content={translation.seo.description} />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`https://www.lescretes.it/${locale.locale}/le-degustazioni`}
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://www.lescretes.it/it/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.lescretes.it/en/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://www.lescretes.it/de/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.lescretes.it/fr/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="jp"
          href="https://www.lescretes.it/jp/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://www.lescretes.it/ko/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href="https://www.lescretes.it/ru/le-degustazioni"
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href="https://www.lescretes.it/zh/le-degustazioni"
        />

        <meta
          property="og:url"
          content={`https://www.lescretes.it/${locale.locale}/le-degustazioni`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={translation.seo.title} />
        <meta property="og:locale" content={locale.locale} />
        <meta property="og:description" content={translation.seo.description} />
        <meta property="og:site_name" content="Les Crêtes" />
        <meta
          property="og:image"
          content="https://www.lescretes.it/assets/deg3.jpg"
        />
        <meta property="og:image:alt" content="Les Crêtes cover image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lescretes.it" />
        <meta
          property="twitter:url"
          content="https://www.lescretes.it/le-degustazioni"
        />
        <meta name="twitter:title" content={translation.seo.title} />
        <meta
          name="twitter:description"
          content={translation.seo.description}
        />
        <meta
          name="twitter:image"
          content="https://www.lescretes.it/assets/deg3.jpg"
        />
        <meta name="twitter:image:alt" content="Les Crêtes - degustazioni" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${translation.seo.title}",
            "description": "${translation.seo.description}",
            "url": "https://www.lescretes.it/${locale.locale}/le-degustazioni",
            "logo": "https://www.lescretes.it/favicon.ico"
          }
        `,
          }}
        />
      </Head>
      <div className="bg-second/30 bg-pattern2a flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <HeroHome4
          img={Deg}
          title={translation.hero.title}
          seoTitle={translation.seo.title}
        />
      </div>

      <div className="w-[90%] mx-auto my-10 lg:my-[80px]">
        <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-2">
          <h2 className="text-3xl font-bold lg:max-w-2xl lg:text-4xl 2xl:text-5xl">
            {translation.intro.title}
          </h2>
          <p
            className="text-lg text-main/80"
            dangerouslySetInnerHTML={{ __html: translation.intro.text }}
          ></p>
        </div>
        <div className="relative w-full overflow-visible">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            className="lg:!my-20 !h-full"
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              820: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              2500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {translation.intro.cards.map((el, i) => (
              <SwiperSlide key={i}>
                <div className="!h-full !flex !flex-col !justify-between !p-4  transition-all duration-500 ease-out bg-white  border border-main/10   !rounded-sm">
                  <figure>
                    <Image
                      src={el.img}
                      alt={el.title}
                      className="object-cover w-full h-full 2xl:h-[350px] rounded-t-sm"
                      width={500}
                      height={800}
                    />
                  </figure>
                  <div className="card-body  !p-0 !py-4 !gap-y-4  !h-full">
                    <div className="flex flex-col justify-evenly gap-y-4">
                      <h2 className="text-xl font-bold card-title lg:text-2xl fxl:text-3xl">
                        {el.title}
                      </h2>

                      <div className="flex flex-col gap-4">
                        <p className="text-lg whitespace-normal fxl:text-xl text-main/80">
                          {el.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="relative flex justify-center w-full gap-2 mt-10 lg:hidden">
              <div className="mt-6 swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 lg:flex-row bg-second py-10 lg:p-[60px]">
        {/* Contenitore Sticky */}
        <div className="w-full lg:w-[40%] flex flex-col gap-10">
          <div className="w-[90%] mx-auto flex flex-col  lg:sticky top-[40px] ">
            <h3 className="text-3xl font-bold text-main lg:text-5xl 2xl:text-6xl">
              {translation.prenota.title}
            </h3>
            <p className="font-[400] text-[22px] mt-4 text-main/80">
              {translation.prenota.text}
            </p>

            <p
              className="text-main text-[18px] xl:text-[20px] font-normal leading-[33.20px]"
              dangerouslySetInnerHTML={{ __html: translation.prenota.nota }}
            ></p>
          </div>
        </div>

        {/* Contenuto Scrollabile */}
        <div className="w-[90%] mx-auto lg:w-[60%] flex flex-col gap-10">
          {translation?.cards?.map((el, i) => (
            <Cards2
              key={i}
              img={el?.img}
              title={el?.title}
              descrizione={el?.descrizione}
              price={el?.price}
              link={el.link}
              bed={el.bed}
              wine={el.wine}
              fork={el.fork}
              tempo={el.tempo}
              alt={el.title}
              priceTitle={el.priceTitle}
              ctaTitle={el.ctaTitle}
            />
          ))}
        </div>
      </div>
      <div className="w-[90%] mx-auto my-10 lg:my-[80px]">
        <div className="grid grid-cols-1 gap-6 lg:px-20 lg:grid-cols-2">
          {translation.info.cards.map((el, i) => (
            <div
              key={i}
              className="h-full  !p-4  transition-all duration-500 ease-out bg-white  border border-main/10   !rounded-sm"
            >
              <figure>
                <Image
                  src={el.img}
                  alt={el.title}
                  className="object-cover w-full lg:h-[350px] rounded-t-sm"
                  width={500}
                  height={800}
                />
              </figure>
              <div className="card-body !p-0 !py-4 !gap-y-4 !justify-between !h-full">
                <div className="flex flex-col gap-y-4 ">
                  <h2 className="text-xl font-bold card-title lg:text-2xl fxl:text-3xl">
                    {el.title}
                  </h2>

                  <div className="flex flex-col gap-4">
                    <p className="text-lg whitespace-normal fxl:text-xl text-main/80">
                      {el.text}
                    </p>
                  </div>
                  <Link
                    href={el.link}
                    title={el.title}
                    className="uppercase justify-center font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-base  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow text-main   hover:bg-white hover:transition-all bg-second flex items-center gap-4"
                  >
                    {el.ctaText} <Icon icon={el.icon} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
      <div></div>
      <Banner
        img={Rif}
        title={translation.banner.title}
        paragraph={translation.banner.paragraph}
        btn2={translation.banner.btn}
        link2={translation.banner.link}
      />
    </>
  );
};

export default Degustazioni;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = degustazioniIT;
      break;

    case "en":
      obj = degustazioniEN;
      break;
    case "fr":
      obj = degustazioniFR;
      break;
    case "de":
      obj = degustazioniDE;
      break;
    case "jp":
      obj = degustazioniJP;
      break;
    case "ko":
      obj = degustazioniKO;
      break;
    case "ru":
      obj = degustazioniRU;
      break;
    case "zh":
      obj = degustazioniZH;
      break;
    default:
      obj = degustazioniIT;
      break;
  }

  return {
    props: {
      translation: obj?.degustazioni,
      locale: locale,
    },
    revalidate: 60,
  };
}
