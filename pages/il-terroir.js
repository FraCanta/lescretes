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
            Valle d'Aosta: La Gemma delle Alpi
          </h2>
          <div className="relative w-full lg:w-[80%] h-full aspect-video mx-auto">
            <Image
              src={Valle}
              alt="denominazione"
              fill
              className="object-contain"
            />
          </div>
          {translation.intro.map((el, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-10 text-xl font-normal lg:text-center text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              >
                <p dangerouslySetInnerHTML={{ __html: el.p }}></p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full gap-10">
          <h2 className="text-3xl font-bold lg:text-5xl lg:text-center">
            La denominazione di origine Valle d'Aosta: zone di produzione
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
            La cantina Les Crêtes si trova ad Aymavilles, ai piedi del Monte
            Bianco, con la sua sala degustazione "Rifugio del Vino" ed il suo
            vigneto più esteso dominato da una torre medievale.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto text-center py-10">
          <div className="  !bg-white text-main">
            <div className="flex flex-col justify-center w-full gap-4 text-center">
              <h2 className="text-6xl font-bold lg:text-8xl">1</h2>
              <hr />
              <p className="flex flex-wrap text-center lg:text-lg text-main">
                Cantina di vinificazione e affinamento
              </p>
            </div>
          </div>
          <div className=" stats !bg-white text-main">
            <div className="flex flex-col justify-center w-full gap-4 text-center">
              <h2 className="text-6xl font-bold lg:text-8xl">16</h2>
              <hr />
              <p className="flex flex-wrap lg:text-lg text-main">
                Varietà in produzione tra autoctoni ed internazionali
              </p>
            </div>
          </div>
          <div className=" stats !bg-white text-main">
            <div className="flex flex-col justify-center w-full gap-4 text-center">
              <h2 className="text-6xl font-bold lg:text-8xl">35</h2>
              <hr />
              <p className="flex flex-wrap lg:text-lg text-main">
                Ettari di vigneto suddivisi in 11 comuni della Valle d'Aosta
              </p>
            </div>
          </div>
          <div className=" stats !bg-white text-main">
            <div className="flex flex-col justify-center w-full gap-4 text-center">
              <h2 className="text-6xl font-bold lg:text-8xl">180</h2>
              <hr />
              <div className="flex flex-wrap lg:text-lg text-main">
                Piccole vigne, ognuna con caratteristiche uniche
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full mb-20">
        <div className="flex flex-col lg:items-center lg:justify-center gap-6 mb-10 lg:py-10 w-[90%] mx-auto lg:text-center">
          <h2 className="text-3xl font-bold lg:text-5xl text-main">
            Ciò che conta in campo
          </h2>{" "}
          <p className="text-xl text-main">
            Rispetto del territorio e dell'ambiente: vigneti integrati
            nell'ecosistema alpino con interventi minimi. Pratiche viticole
            naturali che proteggono l'habitat originario del vigneto (gestione
            agronomica basata sul rispetto per la vigna, il terroir e la natua a
            tutela dell'ambiente).
          </p>
          <CtaOutlineBrown link="/sostenibilita" title="storia">
            Scopri il nostro impegno
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
                src="/assets/terroir/1.jpg"
                alt="vendemmia"
                fill
                className="object-cover object-top"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/2.jpg"
                alt="vendemmia"
                fill
                className="object-cover object-right"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/3.jpg"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/4.JPG"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/5.jpg"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/6.jpg"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-square lg:h-screen">
              <Image
                src="/assets/terroir/7.jpg"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Banner
        img={Wine}
        title={translation.banner.title}
        btn2={translation.banner.btn2}
        link2={translation.banner.link2}
      /> */}
      <div className="w-[90%] mx-auto flex flex-col gap-10 lg:text-center pb-10">
        <h2 className="py-10 text-3xl font-bold lg:text-5xl text-main">
          Comincia la tua esperienza con Les Crêtes
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 gap-y-10">
          <div className="flex flex-col justify-start gap-4 lg:gap-6 lg:items-center">
            {" "}
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/degustazione.webp"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-2xl text-main">Le degustazioni</p>
            <CtaOutlineBrown link="/le-degustazioni" title="degustazioni">
              Scopri di più
            </CtaOutlineBrown>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 lg:items-center">
            {" "}
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/vini.webp"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-2xl text-main">I nostri vini</p>
            <CtaOutlineBrown link="/i-vini" title="i nostri vini">
              Scopri di più
            </CtaOutlineBrown>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6 lg:items-center">
            {" "}
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/cosmetici/bio_pack3.webp"
                alt="vendemmia"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-2xl text-main">DeVin Cosmetica</p>
            <CtaOutlineBrown link="/cosmesi" title="DeVin Cosmesi">
              Scopri di più
            </CtaOutlineBrown>
          </div>
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
