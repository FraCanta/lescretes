import React from "react";

import Image from "next/image";
import viniIT from "../../public/locales/it/vini.json";
import viniEN from "../../public/locales/en/vini.json";
import viniFR from "../../public/locales/fr/vini.json";
import Head from "next/head";
import Denominazione from "@/public/assets/iconewine/denominazione.svg";
import Vitigni from "@/public/assets/iconewine/vitigni.svg";
import Tipologia from "@/public/assets/iconewine/tipologia.svg";
import Gradazione from "@/public/assets/iconewine/gradazione.svg";
import Type from "@/public/assets/iconewine/type.svg";
import Formati from "@/public/assets/iconewine/formati.svg";
import Vinificazione from "@/public/assets/iconewine/vinificazione.svg";
import Zona from "@/public/assets/iconewine/zona.svg";
import Affinamento from "@/public/assets/iconewine/affinamento.svg";
import Servizio from "@/public/assets/iconewine/servizio.svg";
import TabWine from "@/components/TabWine/TabWine";
import Link from "next/link";
import { FacebookShareButton, WhatsappShareButton } from "next-share";
import { Icon } from "@iconify/react";
import Banner from "@/components/Banner/Banner";
import Deg from "@/public/assets/degustazione.webp";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import SwiperButtons from "@/components/SwiperButtons/SwiperButtons";
const SingleWine = ({ wine, others }) => {
  console.log(wine);
  return (
    <>
      <Head>
        <title>{`${wine?.name} - Les Crêtes`}</title>

        <meta
          property="og:image"
          content={`https://lescretes-liard.vercel.app${wine.seoimg}`}
        />
        <meta name="description" content={wine.tabs[0]?.content[0]?.text} />
      </Head>

      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_60px)] fxl:min-h-[calc(100vh_-_100px)] w-full h-full relative grid grid-cols-1 xl:grid-cols-2">
        <div className="flex items-center justify-center relative bg-pattern min-h-[calc(100vh_-_70px)] xl:h-[calc(100vh_-_60px)]">
          <Image src={wine.img} alt="" fill className="object-contain p-8" />
        </div>
        <div className="flex py-8 w-[90%] mx-auto xl:mx-0">
          <div className="flex-col justify-start items-start gap-[30px] flex fxl:gap-20">
            <h1 className="text-main text-[35px] md:text-[42.08px] font-black  md:leading-[53.77px] fxl:text-5xl">
              {wine.name}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[80%] gap-4 xl:gap-2 fxl:gap-4">
              <ul className="flex flex-col justify-between gap-4 xl:gap-0">
                <li className="flex items-center gap-4">
                  <Image
                    src={Denominazione}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.denominazioneTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">
                      {wine.denominazione}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Vitigni}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.vitigniTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.vitigni}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Tipologia}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-14"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.tipologiaTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.tipologia}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Gradazione}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-14"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.gradazioneTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.gradazione}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Type}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-14"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.bicchiereTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.bicchiere}</p>
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-4">
                <li className="flex items-center gap-4">
                  <Image
                    src={Formati}
                    className="w-8 h-10 text-main fxl:w-16 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.formatoTitle}
                    </h2>
                    <p className="text-main fxl:text-xl"> {wine.formato}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Vinificazione}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.vinificazioneTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">
                      {" "}
                      {wine.vinificazione}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Zona}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.zonaTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.zona}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Affinamento}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.affinamentoTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.affinamento}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Image
                    src={Servizio}
                    className="w-8 h-10 text-main fxl:w-12 fxl:h-16"
                  />
                  <div className="flex flex-col fxl:gap-2">
                    <h2 className="text-[20px] font-black text-main fxl:text-3xl">
                      {wine.servizioTitle}
                    </h2>
                    <p className="text-main fxl:text-xl">{wine.servizio}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <TabWine tabs={wine.tabs} />
      </div>
      <div className="w-[90%] mx-auto py-6">
        <div className="flex flex-col w-full gap-10 xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-6 xl:flex-row">
            <CtaOutlineBrown link={wine.download} download>
              Scheda vino
              <Icon icon="material-symbols:download" width={30} />
            </CtaOutlineBrown>
            <CtaOutlineBrown link={wine.recycle} download>
              Etichettatura ambientale
              <Icon icon="material-symbols:download" width={30} />
            </CtaOutlineBrown>
          </div>

          <div className="flex items-center gap-6 ">
            <p className="text-lg xl:text-xl fxl:text-2xl text-main">
              Condividi su
            </p>
            <ul className="flex gap-6">
              <li>
                {" "}
                <FacebookShareButton
                  url={`https://lescretes-liard.vercel.app/vini/${wine?.cat}/${wine?.title}`}
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
                  url={`https://lescretes-liard.vercel.app/vini/${wine?.cat}/${wine?.title}`}
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

      <div className="w-[90%] mx-auto py-10">
        <h2 className="text-main text-[40px] font-bold mb-10">{wine.more}</h2>

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
          className="carousel-wrapper"
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1500: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
        >
          <div className="flex w-full gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {others.map((otherWine, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={otherWine.link}
                  title={otherWine.name}
                  key={i}
                  className="w-full h-[450px] fxl:h-full 3xl:h-[800px] relative bg-[#F4F3EF] rounded-sm hover:bg-main hover:text-white "
                >
                  <div // Usa motion.div anziché div
                    className="w-full h-[450px] fxl:h-[500px] 3xl:h-[800px] relative"
                  >
                    <div className="w-full h-[450px] fxl:h-[500px] 3xl:h-[800px] left-0 top-0 absolute bg-[#F4F3EF]  hover:bg-main" />

                    <Image
                      className="object-contain left-0 top-[1.5rem] absolute w-full h-[80%]"
                      src={otherWine.img}
                      width={100}
                      height={100}
                      alt={otherWine.name}
                    />
                    <p className="w-[100%] left-0 bottom-8 absolute text-center text-main text-[16px] fxl:text-[22px] 3xl:text-3xl font-bold  leading-snug z-10">
                      {otherWine.name}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
          {wine.showButtons && <SwiperButtons />}
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
        link: obj?.vini?.singleWine?.[el]?.link,
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
  const paths = pathIt.concat(pathEn).concat(pathFr);

  return {
    paths,
    fallback: false,
  };
}
