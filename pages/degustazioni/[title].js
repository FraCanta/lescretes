import React from "react";
import degustazioniIT from "../../public/locales/it/degustazioni.json";
import degustazioniEN from "../../public/locales/en/degustazioni.json";
import degustazioniFR from "../../public/locales/fr/degustazioni.json";
import Image from "next/image";
import Bicchiere from "@/public/assets/iconeperdegustazioni/bicchiere.svg";
import Durata from "@/public/assets/iconeperdegustazioni/durata.svg";
import Cantina from "@/public/assets/iconeperdegustazioni/cantina.svg";
import Lingue from "@/public/assets/iconeperdegustazioni/lingue.svg";
import Link from "next/link";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { FacebookShareButton, WhatsappShareButton } from "next-share";
import Drawer from "@/components/drawer/drawer";
import CtaPrimary from "@/components/Cta/CtaPrimary";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";

const SingleDeg = ({ deg }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Head>
        <title>{`Les Crêtes  - ${deg?.name}`}</title>

        <meta name="og:description" content={deg.descrizione.content} />
        <meta
          property="og:image"
          content={`https://lescretes-liard.vercel.app${deg.img}`}
        />
      </Head>
      <div className="min-h-[55vh] xl:min-h-[90vh] fxl:min-h-[90vh] w-full my-6 mx-auto flex items-center justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main before:opacity-40 before:rounded-lg">
        <div className="p-8 w-full h-full ">
          <Image
            src={deg?.img}
            alt={deg.name}
            fill
            priority
            className="object-cover  h-full"
          />
        </div>
        <div className=" flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between w-[90%] translate-x-[6%]  absolute bottom-4 xl:bottom-0 left-0  xl:py-8 z-[999]">
          <h1 className="text-white text-[40px] leading-[52px] xl:text-[56px] xl:leading-[66px] font-bold fxl:text-7xl">
            {deg?.name}
          </h1>
        </div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-2 py-10 flex-col">
        <div className="flex h-full ">
          <Image
            src={Bicchiere}
            className="h-full w-12 fxl:w-20 "
            alt="bicchiere"
          />
          <div className="flex flex-col ">
            <h2 className="font-bold text-[18px] text-main fxl:text-2xl">
              {deg.degustazione.title}
            </h2>
            <p className="text-[16px]">{deg.degustazione.vini}</p>
          </div>
        </div>
        <div className="flex h-full items-center">
          <Image src={Durata} className="h-full w-10 xl:w-12" alt="bicchiere" />
          <div className="flex flex-col h-full justify-center">
            <h2 className="font-bold text-[18px] text-main">
              {deg.durata?.title}
            </h2>
            <p className="text-[16px]">{deg.durata?.tempo}</p>
          </div>
        </div>
        <div className="flex h-full items-center">
          <Image
            src={Cantina}
            className="h-full w-10 xl:w-12"
            alt="bicchiere"
          />
          <div className="flex flex-col h-full justify-center">
            <h2 className="font-bold text-[18px] text-main">
              {deg.visita?.title}
            </h2>
            <p className="text-[16px]">{deg.visita?.cantina}</p>
          </div>
        </div>
        <div className="flex h-full items-center">
          <Image src={Lingue} className="h-full w-12" alt="bicchiere" />
          <div className="flex flex-col ">
            <h2 className="font-bold text-[18px] text-main">
              {deg.lingua?.title}
            </h2>
            <p className="text-[16px]">{deg.lingua.tipo}</p>
          </div>
        </div>
        <div className="flex items-center ">
          {deg.prenotaBtn ? (
            <CtaPrimary link={deg.prenotaBtn}>
              <div className="flex items-center gap-2">
                Prenota ora{" "}
                <Icon
                  icon="mingcute:calendar-line"
                  color="white"
                  className="w-5 h-5"
                />
              </div>
            </CtaPrimary>
          ) : (
            <button
              onClick={handleDrawerToggle}
              className="flex items-center justify-center text-[18px]  gap-2 text-center capitalize font-medium py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-white hover:transition-all  bg-main w-full "
            >
              Prenota ora
              <Icon
                icon="mingcute:calendar-line"
                color="white"
                className="w-5 h-5"
              />
            </button>
          )}
        </div>
      </div>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        deg={deg.name}
      />

      <div className="w-[90%] mx-auto flex-col justify-start items-start gap-[34px] flex py-10">
        <h2 className=" text-main text-3xl xl:text-5xl font-bold  flex items-center gap-2">
          {deg.descrizione.title}{" "}
        </h2>
        <p className="text-xl xl:text-2xl font-normal  !leading-[33.2px]">
          {deg.descrizione.content}
        </p>
        <div className="w-full text-main flex flex-col gap-6">
          <h2 className="text-main text-3xl xl:text-5xl font-bold  leading-[46px]">
            {deg?.descrizione?.pacchetto?.title}
          </h2>
          <ul className="flex flex-col gap-2">
            {deg?.descrizione?.pacchetto?.lista?.map((l, i) => (
              <li className="text-xl xl:text-2xl" key={i}>
                {l.testo}
              </li>
            ))}
          </ul>
          {deg?.descrizione?.opzione ? (
            <div className="bg-[#F4F3EF] flex flex-col gap-[20px] p-4">
              <h2 className="text-main text-3xl xl:text-5xl font-bold  ">
                {deg?.descrizione?.opzione?.title}
              </h2>
              <p className="text-xl lg:text-2xl">
                {" "}
                {deg?.descrizione?.opzione?.uno}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full text-main flex flex-col gap-6">
          <h2 className="text-main text-3xl xl:text-5xl font-bold  leading-[46px]">
            {deg?.priceTitle}
          </h2>
          <p className="text-xl lg:text-2xl text-main">{deg?.price}</p>
        </div>
        {deg?.descrizione?.asterisco ? (
          <p className="text-main/60">{deg?.descrizione?.asterisco}</p>
        ) : (
          ""
        )}
        {deg.download ? (
          <CtaOutlineBrown link={deg.download}>
            Scarica qui
            <Icon icon="material-symbols:download" color="#4A4A49" width={30} />
          </CtaOutlineBrown>
        ) : null}
      </div>
      <div className="w-full h-[1px] bg-second my-2"></div>
      <div className="w-[90%] mx-auto flex flex-wrap justify-end  gap-6 xl:justify-between text-sm md:text-xl breadcrumbs">
        <div className="flex gap-6 items-center ">
          <p className="text-xl xl:text-2xl">Condividi su</p>
          <ul className="flex gap-6">
            <li>
              {" "}
              <FacebookShareButton
                url={`https://lescretes-liard.vercel.app/degustazioni/${deg?.title}`}
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
                url={`https://lescretes-liard.vercel.app/degustazioni/${deg?.title}`}
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
        <ul className="px-6 py-2 max-w-max bg-main rounded-[30px]">
          <li>
            <Link href="/degustazioni" title="Back to Degustazioni"></Link>
            <CtaPrimary link="/degustazioni">
              {" "}
              <Icon
                icon="lets-icons:back"
                className="text-white w-4 h-4 2xl:w-6 2xl:h-6 3xl:w-8 3xl:h-8 mr-2 stroke-current"
              />{" "}
              <p className="text-lg xl:text-xl fxl:text-xl 3xl:text-3xl text-white">
                Torna alle Degustazioni
              </p>
            </CtaPrimary>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleDeg;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = degustazioniIT;
      break;

    case "en":
      obj = degustazioniEN;
      break;
    case "fr":
      obj = degustazioniFR;
      break;
    default:
      obj = degustazioniIT;
      break;
  }
  let targetObj = obj?.degustazioni?.singleDeg?.[params?.title];

  return {
    props: {
      deg: targetObj,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = degustazioniIT;
      break;

    case "en":
      obj = degustazioniEN;
      break;
    case "fr":
      obj = degustazioniFR;
      break;
    default:
      obj = degustazioniIT;
      break;
  }

  const degs = Object.keys(obj?.degustazioni?.singleDeg);
  const pathEn = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathFr = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "fr",
    };
  });
  const pathIt = degs?.map((el) => {
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
