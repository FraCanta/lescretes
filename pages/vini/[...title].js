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
import Vini from "../vini";
import Tabs from "@/components/TabsWines/Tabs";
import TabWine from "@/components/TabWine/TabWine";
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import { Icon } from "@iconify/react";
const SingleWine = ({ wine, others }) => {
  return (
    <>
      <Head>
        <title>{`Les Cretes - ${wine?.name}`}</title>

        <meta
          property="og:image"
          content={`https://lescretes-liard.vercel.app${wine.img}`}
        />
      </Head>
      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_60px)] fxl:min-h-[calc(100vh_-_100px)] w-full h-full relative grid grid-cols-1 xl:grid-cols-2">
        <div className="flex items-center justify-center relative bg-pattern min-h-[calc(100vh_-_70px)] xl:h-[calc(100vh_-_60px)]">
          <Image src={wine.img} alt="" fill className="object-contain p-8" />
        </div>
        <div className="flex py-8 w-[90%] mx-auto xl:mx-0">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <h1 className="text-main text-[35px] md:text-[42.08px] font-black  md:leading-[53.77px]">
              {wine.name}
            </h1>
            {/* <p className="text-[18px] leading-[32px]">{wine.descrizione} </p> */}
            {/* <h3 className="text-main text-[30px] font-bold  leading-normal">
              Caratteristiche:
            </h3> */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[80%] gap-4 xl:gap-2">
              <ul className="flex flex-col justify-between gap-4 xl:gap-0">
                <li className="flex gap-4 items-center">
                  <Image src={Denominazione} className="text-main w-8 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.denominazioneTitle}
                    </h2>
                    <p className="text-main/70">{wine.denominazione}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Vitigni} className="text-main w-8 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.vitigniTitle}
                    </h2>
                    <p className="text-main/70"> {wine.vitigni}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Tipologia} className="text-main w-8 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.tipologiaTitle}
                    </h2>
                    <p className="text-main/70">{wine.tipologia}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Gradazione} className="text-main w-8 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.gradazioneTitle}
                    </h2>
                    <p className="text-main/70">{wine.gradazione}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Type} className="text-main w-8 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.bicchiereTitle}
                    </h2>
                    <p className="text-main/70">{wine.bicchiere}</p>
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col justify-between gap-4">
                <li className="flex gap-4 items-center">
                  <Image src={Formati} className="text-main w-10 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.formatoTitle}
                    </h2>
                    <p className="text-main/70"> {wine.formato}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Vinificazione} className="text-main w-10 h-9" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.vinificazioneTitle}
                    </h2>
                    <p className="text-main/70"> {wine.vinificazione}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Zona} className="text-main w-10 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.zonaTitle}
                    </h2>
                    <p className="text-main/70"> {wine.zona}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Affinamento} className="text-main w-10 h-10" />
                  <div className="flex flex-col">
                    <h2 className="text-[18px] font-black text-main/90">
                      {wine.affinamentoTitle}
                    </h2>
                    <p className="text-main/70">{wine.affinamento}</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Image src={Servizio} className="text-main w-9 h-11" />
                  <div className="flex flex-col ">
                    <h2 className="text-[20px] font-black text-main/90">
                      {wine.servizioTitle}
                    </h2>
                    <p className="text-main/70">{wine.servizio}</p>
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
        <div className="flex flex-col xl:flex-row w-full xl:justify-between gap-10">
          <Link
            href="/mani.pdf"
            download
            target="_blank"
            className="flex items-center text-lg xl:text-2xl gap-2 text-main font-bold w-full max-w-max text-center  lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
          >
            Scarica qui
            <Icon icon="material-symbols:download" color="#4A4A49" width={30} />
          </Link>
          <div className="flex gap-6 items-center ">
            <p className="text-lg xl:text-xl">Condividi su</p>
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
                  />
                </WhatsappShareButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto pb-10">
        <h2 className="text-main text-[40px] font-bold mb-10">
          Ti potrebbe anche interessare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {others.map((otherWine) => (
            <div key={otherWine.name} className="flex flex-col items-center">
              <Link
                href={otherWine.link}
                key={otherWine.name}
                className="w-full h-[450px] fxl:h-[450px] relative bg-[#F4F3EF] rounded-3xl hover:bg-main hover:text-white"
              >
                <div className="w-full h-[450px] fxl:h-[450px]  relative bg-[#F4F3EF] rounded-3xl hover:bg-main hover:text-white">
                  <Image
                    className="object-contain left-20 top-[1.5rem] absolute w-[50%] h-[80%]"
                    src={otherWine.img}
                    alt={otherWine.name}
                    width={100}
                    height={100}
                  />
                  <p className="w-[100%] left-0 bottom-8 absolute text-center text-main text-[16px] font-bold  leading-snug">
                    {otherWine.name}{" "}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
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
