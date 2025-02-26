import React from "react";

import Image from "next/image";
import viniIT from "../../public/locales/it/vini.json";
import viniEN from "../../public/locales/en/vini.json";
import viniFR from "../../public/locales/fr/vini.json";
import viniDE from "../../public/locales/de/vini.json";
import viniJP from "../../public/locales/jp/vini.json";
import viniKO from "../../public/locales/ko/vini.json";
import viniRU from "../../public/locales/ru/vini.json";
import viniZH from "../../public/locales/zh/vini.json";

import Head from "next/head";
import Piatti from "@/public/assets/piatti.svg";
import Vitigni from "@/public/assets/iconewine/vitigni.svg";
import Type from "@/public/assets/iconewine/type.svg";
import Affinamento from "@/public/assets/iconewine/affinamento.svg";
import Link from "next/link";
import { FacebookShareButton, WhatsappShareButton } from "next-share";
import { Icon } from "@iconify/react";
import Banner from "@/components/Banner/Banner";
import Deg from "@/public/assets/deg3.jpg";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import SwiperButtons from "@/components/SwiperButtons/SwiperButtons";
import Table from "@/components/TabWine/Table";
const SingleWine = ({ wine, others }) => {
  return (
    <>
      <Head>
        <title>{`${wine?.name} - Les Crêtes`}</title>

        <meta property="og:image" content={`https://lescretes${wine.seoimg}`} />
        <meta name="description" content={wine.tabs[0]?.content[0]?.text} />
      </Head>
      <div className="bg-second rounded-sm min-h-[calc(100vh_-_70px)] bg-pattern3a md:min-h-[calc(100vh_-_60px)] fxl:min-h-[calc(100vh_-_100px)]  h-full relative ">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-4 py-6 lg:py-0 fxl:gap-20">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold uppercase text-main/80">
                {wine.tipologia}
              </p>
              <h1 className="text-main text-[35px] md:text-6xl font-black fxl:text-8xl">
                {wine.name}
              </h1>
            </div>

            <p className="p-1 text-xs border rounded-sm text-main/80 border-main/70">
              {wine.origine}
            </p>
            <p className="text-main/80 text-lg md:w-[90%] fxl:!text-2xl flex flex-col gap-6">
              {wine.text}
            </p>
          </div>
          <div className="flex items-center justify-center relative  min-h-[calc(90vh_-_70px)] xl:h-[calc(100vh_-_60px)]">
            <Image src={wine.img} alt="" fill className="object-contain p-8" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto py-10 gap-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 ">
            <Image src={Type} className="w-6 h-6 text-main fxl:w-12 fxl:h-16" />
            <h2 className="text-2xl font-bold">{wine.carattersticheTitle}</h2>
          </div>{" "}
          <hr className="py-4 text-main/20" />
          <div>
            <div className="flex flex-col gap-4">
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.zonaTitle}
                </p>
                <p className="text-lg text-main/80"> {wine.zona}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.vitigniTitle}
                </p>
                <p className="text-lg text-main/80">{wine.vitigni}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.servizioTitle}
                </p>
                <p className="text-lg text-main/80"> {wine.servizio}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.bicchiereTitle}
                </p>
                <p className="text-lg text-main/80">{wine.bicchiere}</p>
              </div>
              {wine.longevitàTitle && wine.longevità ? (
                <div className="item">
                  <p className="text-sm font-bold uppercase text-main">
                    {wine.longevitàTitle}
                  </p>
                  <p className="text-lg text-main/80">{wine.longevità}</p>
                </div>
              ) : null}
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.climaTitle}
                </p>
                <p className="text-lg text-main/80">{wine.clima}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.vendemmiaTitle}
                </p>
                <p className="text-lg text-main/80">{wine.vendemmia}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.annataTitle}
                </p>
                <p className="text-lg text-main/80">{wine.annata}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.formatoTitle}
                </p>
                <div className="flex items-center gap-2 py-1">
                  {wine.formato.map((el, i) => (
                    <span
                      key={i}
                      className="p-1 text-lg border rounded-sm text-main/80 border-main/30 max-w-max"
                    >
                      {" "}
                      {el.f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 ">
            <Image
              src={Vitigni}
              className="w-6 h-6 text-main fxl:w-12 fxl:h-16"
            />
            <h2 className="text-2xl font-bold">{wine.vignetoTitle}</h2>
          </div>{" "}
          <hr className="py-4 text-main/20" />
          <div>
            <div className="flex flex-col gap-4">
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.vignetoTitle}
                </p>
                <p className="text-lg text-main/80">{wine.vigneto}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.altitudineTitle}
                </p>
                <p className="text-lg text-main/80">{wine.altitudine}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.terrenoTitle}
                </p>
                <p className="text-lg text-main/80">{wine.terreno}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {wine.images ? (
        <div className="w-full">
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
            className="carousel-wrapper lg:!px-20"
            loop
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {wine.images.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex} className="cursor-pointer">
                <Image
                  src={image}
                  className="object-cover w-full aspect-square"
                  width={800}
                  height={500}
                />
              </SwiperSlide>
            ))}
            <SwiperButtons />
            <div className="relative flex w-full mt-16 md:hidden">
              <div className="mt-10 swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      ) : null}

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto py-10 gap-20">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 ">
            <Image
              src={Affinamento}
              className="w-6 h-6 text-main fxl:w-12 fxl:h-16"
            />
            <h2 className="text-2xl font-bold">{wine.processoTitle}</h2>
          </div>{" "}
          <hr className="py-4 text-main/20" />
          <div>
            <div className="flex flex-col gap-4">
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.vinificazioneTitle}
                </p>
                <p className="text-lg text-main/80"> {wine.vinificazione}</p>
              </div>
              {wine.invecchiamentoTitle ? (
                <div className="item">
                  <p className="text-sm font-bold uppercase text-main">
                    {wine.invecchiamentoTitle}
                  </p>
                  <p className="text-lg text-main/80">{wine.invecchiamento}</p>
                </div>
              ) : null}
              {wine.affinamentoTitle ? (
                <div className="item">
                  <p className="text-sm font-bold uppercase text-main">
                    {wine.affinamentoTitle}
                  </p>
                  <p className="text-lg text-main/80"> {wine.affinamento}</p>
                </div>
              ) : null}
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.aciditàTitle}
                </p>
                <p className="text-lg text-main/80">{wine.acidità}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.phTitle}
                </p>
                <p className="text-lg text-main/80">{wine.ph}</p>
              </div>
              <div className="item">
                <p className="text-sm font-bold uppercase text-main">
                  {wine.estrattoTitle}
                </p>
                <p className="text-lg text-main/80">{wine.estratto}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 ">
              <Icon
                icon="hugeicons:stars"
                className="w-6 h-6 text-main/60 fxl:w-12 fxl:h-16"
              />
              <h2 className="text-2xl font-bold">{wine.noteTitle}</h2>
            </div>{" "}
            <hr className="py-4 text-main/20" />
            <div className="item">
              <p className="text-lg text-main/80">{wine.note}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 ">
              <Image
                src={Piatti}
                className="w-6 h-6 text-main/60 fxl:w-12 fxl:h-16"
              />
              <h2 className="text-2xl font-bold">{wine.abbinamentiTitle}</h2>
            </div>{" "}
            <hr className="py-4 text-main/20" />
            <div className="item">
              <p className="text-lg text-main/80">{wine.abbinamenti}</p>
            </div>
          </div>
        </div>
      </div>
      {wine.awardsTitle && wine.awards ? (
        <div className=" w-[90%] mx-auto py-10 gap-20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 ">
              <Icon
                icon="solar:cup-outline"
                className="w-6 h-6 text-main/60 fxl:w-12 fxl:h-16"
              />
              <h2 className="text-2xl font-bold">{wine.awardsTitle}</h2>
            </div>{" "}
            <hr className="py-4 text-main/20" />
            <div className="text-main !text-base md:!text-lg fxl:!text-2xl flex flex-col gap-6">
              {wine.awards && Array.isArray(wine.awards.content)
                ? wine.awards.content.map((el, i) => (
                    <div key={i}>
                      {el.table && (
                        <Table
                          headers={el.table.headers}
                          rows={el.table.rows}
                        />
                      )}
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-[90%] mx-auto py-6">
        <div className="flex flex-col w-full gap-10 xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-6 xl:flex-row">
            <CtaOutlineBrown link={wine.download} download>
              {wine.downloadtext}
              <Icon icon="material-symbols:download" width={30} />
            </CtaOutlineBrown>
            <CtaOutlineBrown link={wine.recycle} download>
              {wine.recycletext}
              <Icon icon="material-symbols:download" width={30} />
            </CtaOutlineBrown>
          </div>

          <div className="flex items-center gap-6 ">
            <p className="text-lg xl:text-xl fxl:text-2xl text-main">
              {wine.sharetext}
            </p>
            <ul className="flex gap-6">
              <li>
                {" "}
                <FacebookShareButton
                  url={`https://lescretes/i-vini/${wine?.cat}/${wine?.title}`}
                  hashtag={"#lescretes"}
                >
                  {/* <FacebookIcon size={32} round /> */}
                  <Icon
                    icon="entypo-social:facebook"
                    width={25}
                    color="#4A4A49"
                    className="fxl:w-[30px] fxl:h-[30px]"
                  />
                </FacebookShareButton>
              </li>
              <li className="text-[#757575]">
                {" "}
                <WhatsappShareButton
                  url={`https://lescretes/i-vini/${wine?.cat}/${wine?.title}`}
                  separator="- "
                >
                  <Icon
                    icon="mingcute:whatsapp-fill"
                    color="#4A4A49"
                    width="25"
                    className="fxl:w-[32px] fxl:h-[32px]"
                  />
                </WhatsappShareButton>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:w-full py-10 w-[90%] mx-auto">
        <div className="w-[90%] mx-auto flex items-center my-10">
          <h2 className="text-3xl font-bold 2xl:text-4xl text-main ">
            {wine.more} {wine.tipologia}
          </h2>
          {wine.showButtons && (
            <div className="hidden gap-4 ml-auto lg:flex">
              <button className="p-2 bg-white hover:rounded-full hover:bg-second prev">
                <Icon
                  icon="prime:chevron-left"
                  width={30}
                  className="text-main"
                />
              </button>
              <button className="p-2 bg-white hover:rounded-full hover:bg-second next">
                <Icon
                  icon="prime:chevron-right"
                  width={30}
                  className="text-main"
                />
              </button>
            </div>
          )}
        </div>

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
          className="lg:!px-20 carousel-wrapper"
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {others.map((otherWine, i) => (
            <SwiperSlide key={i}>
              <Link
                href={otherWine.link}
                title={otherWine.name}
                className="flex flex-col items-center justify-between  h-[600px] p-6 xl:p-10 rounded-sm bg-pattern2 bg-second"
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-sm uppercase text-main font-regular ">
                    {otherWine.tipologia}
                  </p>
                  <h2 className="p-2 text-2xl font-bold text-center text-main xl:text-xl fxl:text-xl">
                    {otherWine.name}
                  </h2>
                  <p className="text-sm text-center text-main/60">
                    {otherWine.vitigni}
                  </p>
                </div>
                <div className="flex justify-center w-full">
                  {" "}
                  <Image
                    className="object-contain"
                    src={otherWine.img}
                    width={100}
                    height={100}
                    alt={otherWine.name}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="relative flex w-full mt-16 md:hidden">
            <div className="mt-10 swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      <Banner
        img={Deg}
        title="Fai o regala a chi vuoi una degustazione a Les Crêtes"
        paragraph="Regala un’esperienza unica ed originale scegliendo una
              degustazione tra quelle disponibili sul nostro sito oppure, se hai
              esigenze particolari, contattaci per creare il tuo regalo
              personalizzato."
        btn1="Prenota subito"
        btn2="Scopri le proposte"
        link1="/contatti"
        link2="/le-degustazioni"
      />
    </>
  );
};

export default SingleWine;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
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
  let targetObj = obj?.vini?.singleWine?.[params?.title[1]];
  const arr = Object.keys(obj?.vini?.singleWine);
  const filteredOthers = arr
    .filter(
      (el) =>
        el !== params.title[1] &&
        obj?.vini?.singleWine?.[el]?.cat == params.title[0]
    )
    .map((el) => {
      return {
        name: obj?.vini?.singleWine?.[el]?.name,
        img: obj?.vini?.singleWine?.[el]?.img,
        link: obj?.vini?.singleWine?.[el]?.link || "",
        tipologia: obj?.vini?.singleWine?.[el]?.tipologia,
        cat: obj?.vini?.singleWine?.[el]?.cat,
        vitigni: obj?.vini?.singleWine?.[el]?.vitigni,
      };
    });
  return {
    props: {
      wine: targetObj,
      others: filteredOthers,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
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

  const wines = Object.keys(obj?.vini?.singleWine).map(
    (el) => obj?.vini?.singleWine[el]
  );

  const pathEn = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "en",
    };
  });
  const pathFr = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "fr",
    };
  });
  const pathIt = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "it",
    };
  });
  const pathDe = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "de",
    };
  });
  const pathJp = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "jp",
    };
  });
  const pathKo = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "ko",
    };
  });
  const pathRu = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "ru",
    };
  });
  const pathZh = wines?.map((el) => {
    return {
      params: {
        title: [el?.cat, el?.title],
      },
      locale: "zh",
    };
  });

  // Concatenazione di tutti i percorsi
  const paths = pathIt
    .concat(pathEn)
    .concat(pathFr)
    .concat(pathDe)
    .concat(pathJp)
    .concat(pathKo)
    .concat(pathRu)
    .concat(pathZh);

  return {
    paths,
    fallback: false,
  };
}
