import Hero from "@/components/heroHome/Hero";
import React from "react";
import Ter from "@/public/assets/terroir2.webp";
import Banner from "@/components/Banner/Banner";
import Wine from "@/public/assets/vinibanner.webp";
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

const Terroir = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - Il Terroir</title>
        <meta
          name="description"
          content="Immersa tra i giganti delle Alpi, la Valle d'Aosta è la più piccola regione italiana ma vanta la più alta concentrazione di aree protette d'Europa, con parchi come il Gran Paradiso. Divisa dalla Dora Baltea, offre paesaggi diversificati e ospita una ricca viticoltura sui suoi terrazzamenti ventilati. Esplora le sue valli laterali e assapora i suoi vini unici."
        />

        <meta
          property="og:url"
          content="https://lescretes-liard.vercel.app/terroir"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Les Crêtes - Il Terroir" />
        <meta
          property="og:description"
          content="Immersa tra i giganti delle Alpi, la Valle d'Aosta è la più piccola regione italiana ma vanta la più alta concentrazione di aree protette d'Europa, con parchi come il Gran Paradiso. Divisa dalla Dora Baltea, offre paesaggi diversificati e ospita una ricca viticoltura sui suoi terrazzamenti ventilati. Esplora le sue valli laterali e assapora i suoi vini unici."
        />
        <meta
          property="og:image"
          content="https://lescretes-liard.vercel.app/assets/terroir2.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lescretes-liard.vercel.app" />
        <meta
          property="twitter:url"
          content="https://lescretes-liard.vercel.app/terroir"
        />
        <meta name="twitter:title" content="Les Crêtes - Il Terroir" />
        <meta
          name="twitter:description"
          content="Immersa tra i giganti delle Alpi, la Valle d'Aosta è la più piccola regione italiana ma vanta la più alta concentrazione di aree protette d'Europa, con parchi come il Gran Paradiso. Divisa dalla Dora Baltea, offre paesaggi diversificati e ospita una ricca viticoltura sui suoi terrazzamenti ventilati. Esplora le sue valli laterali e assapora i suoi vini unici."
        />
        <meta
          name="twitter:image"
          content="https://lescretes-liard.vercel.app/assets/terroir2.png"
        />
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero img={Ter} text={translation.hero.title} />
      </div>
      <div className="w-[90%]  flex-col justify-start items-start gap-[50px] flex mx-auto py-20 fxl:gap-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-bold lg:text-center lg:text-5xl">
            {translation.section1.title}
          </h2>
          <div className="relative w-full lg:w-[80%] h-full aspect-video mx-auto grayscale opacity-95">
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
                className="flex flex-col gap-10 text-xl font-normal lg:text-center text-main fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              >
                <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full gap-10">
          <h2 className="text-3xl font-bold lg:text-5xl lg:text-center">
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
          <p className="lg:w-[80%] mx-auto text-xl lg:text-center text-main">
            {translation.section2.paragrafo}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto text-center py-10">
          {translation.section3.map((el, i) => {
            return (
              <div className="stats  !bg-white text-main" key={i}>
                <div className="flex flex-col justify-center w-[90%] gap-4 mx-auto text-center 2xl:w-[90%]">
                  <h2 className="text-6xl font-bold lg:text-8xl">
                    {el.number}
                  </h2>
                  <hr />
                  <p className="flex flex-wrap lg:text-lg xl:text-base 2xl:text-lg text-main">
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
          <h2 className="text-3xl font-bold lg:text-5xl text-main">
            {translation.section4.title}
          </h2>{" "}
          <p className="w-11/12 text-xl text-main">
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

      <div className="w-[90%] mx-auto flex flex-col gap-10 lg:text-center pb-10">
        <h2 className="py-10 text-3xl font-bold lg:text-5xl text-main">
          {translation.section5.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 gap-y-10">
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
                <p className="text-2xl text-main">{m.name}</p>
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
    },
    revalidate: 60,
  };
}
