import React from "react";
import degustazioniIT from "../../public/locales/it/degustazioni.json";
import degustazioniEN from "../../public/locales/en/degustazioni.json";
import degustazioniFR from "../../public/locales/fr/degustazioni.json";
import Image from "next/image";
import Bicchiere from "@/public/assets/iconeperdegustazioni/bicchiere.png";
import Durata from "@/public/assets/iconeperdegustazioni/durata.png";
import Cantina from "@/public/assets/iconeperdegustazioni/visita.png";
import Lingue from "@/public/assets/iconeperdegustazioni/lingua.png";
import Gradi from "@/public/assets/iconeperdegustazioni/gradi.png";

import Link from "next/link";
import Head from "next/head";
import { Icon } from "@iconify/react";
import { FacebookShareButton, WhatsappShareButton } from "next-share";
import Drawer from "@/components/drawer/drawer";
import CtaPrimary from "@/components/Cta/CtaPrimary";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import FormPrenotazione from "@/components/formPrenotazione/formPrenotazione";
import Cards from "@/components/Cards/Cards";
import FormPrenotazione2 from "@/components/formPrenotazione/formPrenotazione2";

const SingleDeg = ({ deg, others }) => {
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
          content={`https://lescretes-liard.vercel.app${deg.seoImg}`}
        />
      </Head>
      <div className="min-h-[55vh] xl:min-h-[90vh] fxl:min-h-[90vh] w-full  mx-auto flex items-center justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main before:opacity-40 before:rounded-lg">
        <div className="w-full h-full p-8 ">
          <Image
            src={deg?.img}
            alt={deg.name}
            fill
            priority
            className="object-cover h-full"
          />
        </div>
        <div className=" flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between w-[90%] translate-x-[6%]  absolute bottom-0 left-0   z-[999]">
          <h1 className="text-white text-[40px]  leading-[40px] md:text-5xl xl:text-7xl 2xl:text-8xl 2xl:leading-[70px] font-bold fxl:text-7xl uppercase lg:whitespace-nowrap">
            {deg?.name}
          </h1>
        </div>
      </div>
      <div className="w-full bg-[#F4F3EF] ">
        <div className="w-[90%] mx-auto flex gap-6 xl:gap-10  py-7 text-main flex-col lg:flex-row ">
          <div className="flex items-center h-full">
            <Image
              src={Bicchiere}
              className="h-full w-9 fxl:w-20 "
              alt="bicchiere"
            />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <h2 className="font-bold text-[18px] text-main fxl:text-2xl ">
                {deg.degustazione.title}:{" "}
                <span className="text-base font-regular">
                  {deg.degustazione.vini}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center h-full">
            <Image
              src={Durata}
              className="h-full w-9 fxl:w-12"
              alt="bicchiere"
            />
            <div className="flex flex-wrap items-center h-full gap-2">
              <h2 className="font-bold text-[18px] text-main">
                {deg.durata?.title}:{" "}
                <span className="text-base font-regular">
                  {deg.durata?.tempo}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center h-full">
            <Image
              src={Cantina}
              className="h-full w-9 fxl:w-12"
              alt="bicchiere"
            />
            <div className="flex items-center h-full gap-2">
              <h2 className="font-bold text-[18px] text-main">
                {deg.visita?.title}:{" "}
                <span className="text-base font-regular">
                  {deg.visita?.cantina}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center h-full gap-1">
            <Image src={Lingue} className="h-full w-9" alt="bicchiere" />
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-bold text-[18px] text-main">
                {deg.lingua?.title}:{" "}
                <span className="text-base font-regular">
                  {deg.lingua.tipo}
                </span>
              </h2>
            </div>
          </div>
          <div className="flex items-center h-full">
            <Image
              src={Gradi}
              className="h-full w-9 fxl:w-12"
              alt="bicchiere"
            />
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-bold text-[18px] text-main">
                {deg.gradi?.title}:{" "}
                <span className="text-base font-regular">{deg.gradi.tipo}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-6 py-6">
        <div className="flex-col justify-start items-start gap-[34px] flex py-10">
          <h2 className="flex items-center gap-2 text-3xl font-bold text-main xl:text-4xl">
            {deg.descrizione.title}{" "}
          </h2>
          <p className="text-xl fxl:text-2xl font-normal  !leading-[33.2px] text-main">
            {deg.descrizione.content}
          </p>
          <div className="flex flex-col w-full gap-6 text-main">
            <h2 className="text-main text-3xl xl:text-4xl font-bold  leading-[46px]">
              {deg?.descrizione?.pacchetto?.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {deg?.descrizione?.pacchetto?.lista?.map((l, i) => (
                <li className="text-xl fxl:text-2xl" key={i}>
                  {l.testo}
                </li>
              ))}
            </ul>
            {deg?.descrizione?.opzione ? (
              <div className="bg-[#F4F3EF] flex flex-col gap-[20px] p-4">
                <h2 className="text-3xl font-bold text-main xl:text-4xl ">
                  {deg?.descrizione?.opzione?.title}
                </h2>
                <p className="text-xl fxl:text-2xl">
                  {" "}
                  {deg?.descrizione?.opzione?.uno}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          {deg?.descrizione?.asterisco ? (
            <p className="text-main/60">{deg?.descrizione?.asterisco}</p>
          ) : (
            ""
          )}
          <div className="flex flex-wrap justify-between w-full gap-y-6">
            {deg.download ? (
              <CtaOutlineBrown link={deg.download}>
                Scarica qui
                <Icon
                  icon="material-symbols:download"
                  color="#4A4A49"
                  width={30}
                />
              </CtaOutlineBrown>
            ) : null}
            <div className="flex items-center gap-6 ">
              <p className="text-xl fxl:text-2xl text-main">Condividi su</p>
              <ul className="flex gap-6">
                <li>
                  {" "}
                  <FacebookShareButton
                    url={`https://lescretes-liard.vercel.app/degustazioni/${deg?.title}`}
                    hashtag={"#lescretes"}
                  >
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
          </div>
        </div>
        <div className="fixed bottom-0 left-0 z-20 flex items-center w-full lg:hidden">
          {deg.prenotaBtn ? (
            <Link
              href={deg.prenotaBtn}
              target="_blank"
              title={"prenotazione"}
              className="flex items-center justify-center text-[25px]  gap-2 text-center capitalize font-medium py-4 px-6   text-white hover:transition-all  bg-main w-full "
            >
              Prenota ora
              <Icon
                icon="mingcute:calendar-line"
                color="white"
                className="w-5 h-5"
              />
            </Link>
          ) : (
            <button
              onClick={handleDrawerToggle}
              className="flex items-center justify-center text-[25px]  gap-2 text-center  font-medium py-4 px-6   text-white hover:transition-all  bg-main w-full "
            >
              Prenota ora <Icon icon="oui:arrow-down" />
            </button>
          )}
        </div>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          deg={deg.name}
          link={deg.title}
          price={deg.price}
          durata={deg.durata?.tempo}
          tipo={deg.degustazione.vini}
        />
        {deg.prenotaBtn ? (
          <div className="flex flex-col w-full gap-6">
            <h2 className="py-6 text-2xl font-bold">
              La prenotazione a questa degustazione con percorso benessere
              avviene direttamente sulla piattaforma dell'hotel QC Terme.
            </h2>
            <Link
              href={deg.prenotaBtn}
              target="_blank"
              title={"prenotazione"}
              className=" items-center justify-center text-[20px]  gap-2 text-center capitalize font-medium py-4 px-6   text-white hover:transition-all  bg-main w-full hidden xl:flex"
            >
              Prenota ora{" "}
              <Icon
                icon="mingcute:calendar-line"
                color="white"
                className="w-5 h-5"
              />
            </Link>
            <div className="relative aspect-square">
              <Image
                src="/assets/degustazioni/wellness_form.webp"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="hidden p-4 lg:block w-[80%] mx-auto">
            <div className="p-4 text-center xl:text-2xl bg-main">
              <h2 className="font-bold text-white uppercase">{deg.name}</h2>
            </div>

            <FormPrenotazione
              deg={deg.name}
              link={deg.title}
              price={deg.price}
              durata={deg.durata?.tempo}
              tipo={deg.degustazione.vini}
            />
          </div>
        )}
      </div>

      <div className="w-full h-[1px] bg-second my-2"></div>
      <div className="w-[90%] mx-auto flex flex-wrap justify-end  gap-6 xl:justify-between text-sm md:text-xl breadcrumbs"></div>
      <div className="w-full bg-second">
        <div className="flex flex-col gap-10 py-20 text-center">
          <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold xl:leading-[46px] 3xl:text-7xl xl:w-[65%] mx-auto">
            Altre degustazioni in evidenza{" "}
          </h2>
          <div className="grid grid-cols-1 gap-6 mx-auto mt-10 xl:grid-cols-3 w-[90%] ">
            {others?.map((el, i) => (
              <Cards
                key={i}
                img={el?.img}
                title={el?.name}
                descrizione={el?.descrizione}
                price={el?.price}
                link={el.link}
              />
            ))}
          </div>
        </div>
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
  const arr = Object.keys(obj?.degustazioni?.singleDeg);

  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Exclude the current service
    .map((el) => {
      return {
        name: obj?.degustazioni?.singleDeg?.[el]?.name,
        img: obj?.degustazioni?.singleDeg?.[el]?.img,
        descrizione: obj?.degustazioni?.singleDeg?.[el]?.cardDesc,
        price: obj?.degustazioni?.singleDeg?.[el]?.priceCard,
        link: el,
      };
    });
  return {
    props: {
      deg: targetObj,
      others: filteredOthers,
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
  const pathDe = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "de",
    };
  });
  const pathJp = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "jp",
    };
  });
  const pathKo = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "ko",
    };
  });
  const pathRu = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "ru",
    };
  });
  const pathZh = degs?.map((el) => {
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
