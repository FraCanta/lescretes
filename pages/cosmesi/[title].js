import React from "react";
import cosmesiIT from "../../public/locales/it/cosmesi.json";
import cosmesiEN from "../../public/locales/en/cosmesi.json";
import cosmesiFR from "../../public/locales/fr/cosmesi.json";
import Head from "next/head";
import Image from "next/image";
import Cards from "@/components/Cards/Cards";
import IconaUno from "@/public/assets/cosmetici/icone/icone_cosmesi1.svg";
import IconaDue from "@/public/assets/cosmetici/icone/icone_cosmesi2.svg";
import IconaTre from "@/public/assets/cosmetici/icone/icone_cosmesi3.svg";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import FAQ from "@/components/FAQ/FAQ";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";

const SingleCosmetic = ({ cosm, others }) => {
  return (
    <>
      <Head>
        <title>
          Les Crêtes - {cosm.name} - {cosm.details}
        </title>
        <meta
          property="og:image"
          content={`https://lescretes-liard.vercel.app${cosm.img}`}
        />
      </Head>

      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="w-full aspect-square 2xl:min-h-screen relative">
          <Image src={cosm?.img} fill className="object-cover" />
        </div>
        <div className=" flex flex-col gap-[30px] fxl:gap-[50px] w-[90%] mx-auto xl:mx-0 py-4 fxl:py-8">
          <div className="flex flex-col">
            <div className="flex flex-col xl:flex-row xl:justify-between w-full xl:items-center">
              <h1 className="text-main text-[30px] leading-[40px] xl:text-[40px] xl:leading-[50px] fxl:text-[60px] font-bold">
                {cosm?.name}
              </h1>
              <p className="text-main font-bold xl:text-[20px] fxl:text-[30px]">
                {cosm?.ml}
              </p>
            </div>
            <p className="text-main/60 font-[500] text-[16px] fxl:text-[25px] !-py-2">
              {cosm.details}
            </p>
          </div>
          {cosm?.descrizione?.map((el, i) => (
            <p className="text-base fxl:text-2xl" key={i}>
              {el.testo}
            </p>
          ))}

          <div className="collapse collapse-arrow bg-second">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium ">
              <h2 className="text-[20px] font-bold fxl:text-2xl">
                {cosm.ingredientiTitle}
              </h2>
            </div>
            <div className="collapse-content">
              <p className="text-base fxl:text-2xl">{cosm.ingredienti}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-second">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium ">
              <h2 className="text-[20px] font-bold fxl:text-2xl">
                {cosm.istruzioniTitle}
              </h2>
            </div>
            <div className="collapse-content">
              <p className="text-base fxl:text-2xl">{cosm.istruzioni}</p>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            {/* <div className="bg-main h-20 w-20 rounded-full"></div>
            <div className="bg-main h-20 w-20 rounded-full"></div>
            <div className="bg-main h-20 w-20 rounded-full"></div> */}
            <Image src={IconaTre} width={90} height={90} />
            <Image src={IconaUno} width={90} height={90} />
            <Image src={IconaDue} width={90} height={90} />
          </div>
          <div className="flex flex-col xl:flex-row w-full xl:justify-between gap-10">
            <CtaOutlineBrown link="/mani.pdf" download>
              Scarica qui
              <Icon
                icon="material-symbols:download"
                color="#4A4A49"
                width={30}
              />
            </CtaOutlineBrown>
            <div className="flex gap-6 items-center ">
              <p className="text-lg xl:text-xl">Condividi su</p>
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
        <h2 className="text-6xl font-bold py-6">FAQs</h2>
        <FAQ />
      </div>
      <div className="flex flex-col w-[90%] mx-auto py-10 gap-[30px] fxl:gap-[50px] fxl:py-20">
        <h2 className="text-[35px] font-bold fxl:text-[55px]">
          Ti potrebbero anche interessare
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
          {others.map((el, i) => (
            <Cards img={el.img} name={el.name} button={el.button} />
          ))}
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
  const paths = pathIt.concat(pathEn).concat(pathFr);
  return {
    paths,
    fallback: false,
  };
}
