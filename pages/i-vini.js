import Tabs from "@/components/TabsWines/Tabs";
import HeroHome2 from "@/components/heroHome/HeroHome2";
import React from "react";
import viniIT from "../public/locales/it/vini.json";
import viniEN from "../public/locales/en/vini.json";
import viniFR from "../public/locales/fr/vini.json";
import viniDE from "@/public/locales/de/vini.json";
import viniJP from "@/public/locales/jp/vini.json";
import viniKO from "@/public/locales/ko/vini.json";
import viniRU from "@/public/locales/ru/vini.json";
import viniZH from "@/public/locales/zh/vini.json";
import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import Terr from "@/public/assets/terroir2.png";
import Image from "next/image";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const Vini = ({ translation }) => {
  return (
    <>
      <Head>
        <title>Les Crêtes - vini</title>
      </Head>
      <div className="flex flex-col justify-center lg:flex-row items-center xl:w-[100%] mx-auto min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <HeroHome2
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>

      <div className="flex flex-col items-start justify-start gap-10 w-[90%] mx-auto lg:pb-20">
        <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold lg:leading-[46px] 3xl:text-7xl">
          {translation.intro.title}
        </h2>
        {translation.intro.descrizione.map((para, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-2 text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
            >
              <p dangerouslySetInnerHTML={{ __html: para.text }}></p>
            </div>
          );
        })}
      </div>

      <div className="w-full">
        <Tabs translation={translation?.tabs} />
      </div>
      <div className="w-full min-h-screen bg-[#F4F3EF] ">
        <div className="w-[90%] mx-auto py-10 xl:p-20 lg:text-center flex flex-col gap-10 justify-center items-center">
          <div className="relative w-full aspect-square lg:aspect-video ">
            <Image
              src="/assets/lc3.jpg"
              alt="les cretes family"
              fill
              className="object-cover object-[-130px] lg:object-center lg:object-contain"
            />
          </div>
          <div className="flex flex-col gap-10 lg:items-center lg:justify-center">
            <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold md:leading-[46px] 3xl:text-7xl">
              {translation.family.title}
            </h2>
            <p
              className="flex flex-col gap-10 text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              dangerouslySetInnerHTML={{
                __html: translation.family.descrizione,
              }}
            ></p>
            <CtaOutlineBrown link="/storia" title="storia">
              Scopri la nostra storia
            </CtaOutlineBrown>
          </div>
        </div>
      </div>
      <Banner
        img={Terr}
        title={translation.banner.title}
        paragraph={translation.banner.paragraph}
        btn1={translation.banner.btn}
        link1={translation.banner.link}
      />
      <div className="w-full min-h-screen bg-[#F4F3EF] ">
        <div className="flex flex-col w-full gap-20 mx-auto lg:text-center lg:items-center lg:justify-center">
          <div className="flex flex-col lg:items-center lg:justify-center gap-10 w-[90%] mx-auto pt-10 lg:pt-40">
            <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold xl:leading-[46px] 3xl:text-7xl">
              {translation.produzione.title}
            </h2>
            <p
              className="text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              dangerouslySetInnerHTML={{
                __html: translation.produzione.descrizione,
              }}
            ></p>
          </div>
          <div className="w-full gap-10">
            <div className="relative w-full aspect-square lg:aspect-video ">
              <Image
                src="/assets/lc2.jpg"
                alt="les cretes family"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-[#F4F3EF] ">
        <div className="flex flex-col w-full gap-20 mx-auto lg:text-center lg:items-center lg:justify-center">
          <div className="flex flex-col lg:items-center lg:justify-center gap-10 w-[90%] mx-auto pt-10 lg:pt-40">
            <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold xl:leading-[46px] 3xl:text-7xl xl:w-[65%] mx-auto">
              {translation.artigianalità.title}
            </h2>
            <p
              className="text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl fxl:gap-16 3xl:text-4xl"
              dangerouslySetInnerHTML={{
                __html: translation.artigianalità.descrizione,
              }}
            ></p>
          </div>
          <div className="w-full h-full">
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
                    src="/assets/lc4.jpg"
                    alt="les cretes family"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full aspect-square lg:h-screen">
                  <Image
                    src="/assets/lc5.jpg"
                    alt="les cretes family"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full aspect-square lg:h-screen">
                  <Image
                    src="/assets/lc6.jpg"
                    alt="les cretes family"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vini;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = viniIT;
      break;

    case "en":
      obj = viniEN;
      break;
    case "fr":
      obj = viniFR;
      break;
    case "de":
      obj = viniDE;
      break;
    case "jp":
      obj = viniJP;
      break;
    case "ko":
      obj = viniKO;
      break;
    case "ru":
      obj = viniRU;
      break;
    case "zh":
      obj = viniZH;
      break;
    default:
      obj = viniIT;
      break;
  }

  return {
    props: {
      translation: obj?.vini,
    },
    revalidate: 60,
  };
}
