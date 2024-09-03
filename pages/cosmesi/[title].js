import cosmesiIT from "../../public/locales/it/cosmesi.json";
import cosmesiEN from "../../public/locales/en/cosmesi.json";
import cosmesiFR from "../../public/locales/fr/cosmesi.json";
import cosmesiDE from "../../public/locales/de/cosmesi.json";
import cosmesiJP from "../../public/locales/jp/cosmesi.json";
import cosmesiKO from "../../public/locales/ko/cosmesi.json";
import cosmesiRU from "../../public/locales/ru/cosmesi.json";
import cosmesiZH from "../../public/locales/zh/cosmesi.json";
import Head from "next/head";
import Image from "next/image";
import Cards from "@/components/Cards/Cards";
import IconaUno from "@/public/assets/cosmetici/icone/icone_cosmesi1.svg";
import IconaDue from "@/public/assets/cosmetici/icone/icone_cosmesi2.svg";
import IconaTre from "@/public/assets/cosmetici/icone/icone_cosmesi3.svg";
import { Icon } from "@iconify/react";
import { FacebookShareButton, WhatsappShareButton } from "next-share";
import FAQ from "@/components/FAQ/FAQ";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import { parse } from "dom-parser-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import SwiperButtons from "@/components/SwiperButtons/SwiperButtons";

const SingleCosmetic = ({ cosm, others }) => {
  console.log(cosm);
  const contents = parse(cosm.name, {
    createElement: React.createElement,
    Fragment: React.Fragment,
  });

  return (
    <>
      <Head>
        <title>{`Les Crêtes - ${contents}`}</title>
        <meta
          property="og:image"
          content={`https://lescretes-liard.vercel.app${cosm.img}`}
        />
        <meta
          property="og:url"
          content={`https://lescretes-liard.vercel.app/cosmesi/${cosm?.title}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Les Crêtes - ${contents}`} />
        <meta property="og:description" content={cosm.details} />
        <meta
          property="og:image"
          content={`https://lescretes-liard.vercel.app${cosm.img}`}
        ></meta>
      </Head>

      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="relative w-full aspect-square 2xl:min-h-screen">
          <Image src={cosm?.img} fill className="object-cover" />
        </div>
        <div className=" flex flex-col gap-[30px] fxl:gap-[50px] w-[90%] mx-auto xl:mx-0 py-4 fxl:py-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-full xl:flex-row xl:justify-between xl:items-center">
              <h1 className="text-main text-[30px] leading-[40px] xl:text-[40px] xl:leading-[50px] fxl:text-[60px] font-bold">
                {cosm?.name}
              </h1>
              <p className="text-main font-bold xl:text-[20px] fxl:text-[30px]">
                {cosm?.ml}
              </p>
            </div>
            <p className="text-main font-[500] text-[16px] fxl:text-[25px] !-py-2">
              {cosm.details}
            </p>
          </div>
          {cosm?.descrizione?.map((el, i) => (
            <p
              className="text-xl xl:text-lg fxl:text-2xl text-main"
              key={i}
              dangerouslySetInnerHTML={{ __html: el.testo }}
            ></p>
          ))}

          <div className="collapse collapse-arrow bg-second !rounded-sm">
            <input type="radio" name="my-accordion-2" />
            <div className="font-medium collapse-title ">
              <h2 className="text-2xl font-bold ">{cosm.ingredientiTitle}</h2>
            </div>
            <div className="collapse-content">
              <p className="text-lg fxl:text-xl text-main">
                {cosm.ingredienti}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-second !rounded-sm">
            <input type="radio" name="my-accordion-2" />
            <div className="text-xl font-medium collapse-title ">
              <h2 className="text-2xl font-bold">{cosm.istruzioniTitle}</h2>
            </div>
            <div className="collapse-content">
              <p className="text-lg fxl:text-xl text-main">{cosm.istruzioni}</p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2 text-main ">
            <h2 className="text-main text-2xl font-bold  leading-[46px]">
              {cosm?.priceTitle}
            </h2>
            <p className="text-lg fxl:text-xl">{cosm?.price}</p>
          </div>
          <div className="flex gap-6 mt-4">
            <Image src={IconaTre} width={90} height={90} />
            <Image src={IconaUno} width={90} height={90} />
            <Image src={IconaDue} width={90} height={90} />
          </div>
          <div className="w-full h-[0.02rem] bg-main/30 my-2"></div>

          <div className="flex flex-col w-full gap-10 mt-2 xl:flex-row xl:justify-between hover:text-white text-main">
            <CtaOutlineBrown link={cosm.download} download>
              {cosm.downloadTitle}
              <Icon icon="material-symbols:download" width={30} />
            </CtaOutlineBrown>

            <div className="flex items-center gap-6 ">
              <p className="text-lg xl:text-xl text-main">{cosm.share}</p>
              <ul className="flex gap-6">
                <li>
                  {" "}
                  <FacebookShareButton
                    url={`https://lescretes-liard.vercel.app/cosmesi/${cosm?.title}`}
                    hashtag={"#lescretes"}
                  >
                    {/* <FacebookIcon size={32} round /> */}
                    <Icon
                      icon="entypo-social:facebook"
                      width={25}
                      color="#4A4A49"
                    />
                  </FacebookShareButton>
                </li>
                <li className="text-[#757575]">
                  {" "}
                  <WhatsappShareButton
                    url={`https://lescretes-liard.vercel.app/cosmesi/${cosm?.title}`}
                    separator="- "
                  >
                    <Icon
                      icon="mingcute:whatsapp-fill"
                      color="#4A4A49"
                      width="25"
                    />
                  </WhatsappShareButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-[50px]">
        <h2 className="py-6 text-6xl font-bold">FAQs</h2>
        <FAQ translation={cosm.faq} />
      </div>
      <div className="relative flex flex-col w-full bg-second  py-10 gap-[30px] fxl:gap-[50px] fxl:py-20">
        <div className="w-[90%] mx-auto flex items-center">
          <h2 className="mb-4 text-5xl font-bold fxl:text-5xl">
            {cosm.highlights.title}
          </h2>
          <div className="hidden gap-4 py-6 ml-auto lg:flex">
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
        </div>

        <div className="flex flex-col items-center w-full">
          <div className="relative w-[90%] mx-auto lg:w-full pb-10">
            <Swiper
              modules={[Navigation, Pagination]}
              className="lg:!px-20"
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
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
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
                1500: {
                  slidesPerView: 3.2,
                  spaceBetween: 10,
                },
              }}
            >
              {others.map((el, i) => (
                <SwiperSlide key={i}>
                  <div className="pb-8">
                    <Cards
                      img={el.img}
                      name={el.name}
                      details={el.details}
                      button={el.button}
                      price={el.price}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative flex w-full mt-10 ">
              <div className="mt-10 swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  ya;
};

export default SingleCosmetic;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = cosmesiIT;
      break;

    case "en":
      obj = cosmesiEN;
      break;
    case "fr":
      obj = cosmesiFR;
      break;
    case "de":
      obj = cosmesiDE;
      break;
    case "jp":
      obj = cosmesiJP;
      break;
    case "ko":
      obj = cosmesiKO;
      break;
    case "ru":
      obj = cosmesiRU;
      break;
    case "zh":
      obj = cosmesiZH;
      break;
    default:
      obj = cosmesiIT;
      break;
  }
  let targetObj = obj?.cosmesi?.singleCosmetic?.[params?.title];
  const arr = Object.keys(obj?.cosmesi?.singleCosmetic);

  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Exclude the current service
    .map((el) => {
      return {
        name: obj?.cosmesi?.singleCosmetic?.[el]?.name,
        img: obj?.cosmesi?.singleCosmetic?.[el]?.img,
        details: obj?.cosmesi?.singleCosmetic?.[el]?.details,
        price: obj?.cosmesi?.singleCosmetic?.[el]?.price,

        button: obj?.cosmesi?.singleCosmetic?.[el]?.button,
      };
    });

  return {
    props: {
      cosm: targetObj,
      others: filteredOthers,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = cosmesiIT;
      break;

    case "en":
      obj = cosmesiEN;
      break;
    case "fr":
      obj = cosmesiFR;
      break;
    case "de":
      obj = cosmesiDE;
      break;
    case "jp":
      obj = cosmesiJP;
      break;
    case "ko":
      obj = cosmesiKO;
      break;
    case "ru":
      obj = cosmesiRU;
      break;
    case "zh":
      obj = cosmesiZH;
      break;
    default:
      obj = cosmesiIT;
      break;
  }

  const cosmetics = Object.keys(obj?.cosmesi?.singleCosmetic);
  const pathEn = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathFr = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "fr",
    };
  });
  const pathIt = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const pathDe = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "de",
    };
  });
  const pathJp = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "jp",
    };
  });
  const pathKo = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "ko",
    };
  });
  const pathRu = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "ru",
    };
  });
  const pathZh = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "zh",
    };
  });
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
