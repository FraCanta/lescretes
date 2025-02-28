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
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";

import Cards from "@/components/Cards/Cards";
import Reviews from "@/components/sections/Reviews";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import FormPrenotazione from "@/components/formPrenotazione/formPrenotazione";

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
          content={`https://lescretes.it${deg.seoImg}`}
        />
      </Head>
      <div className="min-h-[55vh] xl:min-h-[90vh] fxl:min-h-[90vh] w-full  mx-auto flex items-center justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main before:opacity-40 before:rounded-lg">
        <div className="w-full h-full p-8 ">
          <Image
            src={deg?.img}
            alt={deg.name}
            fill
            className="object-cover h-full"
          />
        </div>
        <div className=" flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between w-[90%] translate-x-[3%]  absolute bottom-0 left-0 mx-auto   z-[999]">
          <h1 className="text-white text-[40px]  leading-[40px] md:text-5xl xl:text-7xl 2xl:text-8xl 2xl:leading-[70px] font-bold fxl:text-7xl uppercase lg:whitespace-nowrap">
            {deg?.name}
          </h1>
        </div>
      </div>
      <div className="w-full bg-[#F4F3EF] ">
        <div className="w-[94%] mx-auto flex gap-6 xl:gap-10  py-7 text-main flex-col lg:flex-row">
          <div className="flex items-center h-full">
            <Image
              src={Bicchiere}
              className="h-full w-9 fxl:w-20 "
              alt="bicchiere"
            />
            <div className="flex flex-wrap items-center justify-center gap-2">
              <h2 className="font-bold text-[16px] text-main fxl:text-2xl uppercase">
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
              <h2 className="font-bold text-[16px] text-main fxl:text-2xl uppercase">
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
              <h2 className="font-bold text-[16px] text-main fxl:text-2xl uppercase">
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
              <h2 className="font-bold text-[16px] text-main fxl:text-2xl uppercase">
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
              <h2 className="font-bold text-[16px] text-main fxl:text-2xl uppercase">
                {deg.gradi?.title}:{" "}
                <span className="text-base font-regular">{deg.gradi.tipo}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-6 py-6">
        <div className="flex-col justify-start items-start gap-[34px] flex">
          <div className="flex items-center gap-2">
            <div
              className="elfsight-app-2b4b1507-2bea-400a-ad8d-c5532847a4ea"
              data-elfsight-app-lazy
            ></div>{" "}
            <Link href="#recensioni" className="underline lowercase">
              {deg.reviewlink}
            </Link>
          </div>

          <h2 className="flex items-center gap-2 text-3xl font-bold text-main xl:text-4xl">
            {deg.descrizione.title}{" "}
          </h2>
          <p className="text-lg fxl:text-2xl font-normal  !leading-[33.2px] text-main/80">
            {deg.descrizione.content}
          </p>
          <div className="flex flex-col w-full h-full gap-6 text-main">
            <h2 className="text-main text-3xl xl:text-4xl font-bold  leading-[46px]">
              {deg?.descrizione?.pacchetto?.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {deg?.descrizione?.pacchetto?.lista?.map((l, i) => (
                <li className="text-lg fxl:text-2xl text-main/80" key={i}>
                  {l.testo}
                </li>
              ))}
            </ul>
            {deg?.opzione ? (
              <div className="flex flex-col gap-4 p-4 my-10 bg-second">
                <h2 className="text-main text-3xl xl:text-2xl font-bold  leading-[46px]">
                  {deg?.opzione?.title}
                </h2>
                <p className="text-lg fxl:text-2xl font-normal  !leading-[33.2px] text-main">
                  {deg?.opzione?.content}
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
          <div className="flex flex-wrap justify-between w-full mt-10 gap-y-6">
            {deg.download ? (
              <CtaOutlineBrown link={deg.download}>
                {deg.downloadCta}
                <Icon
                  icon="material-symbols:download"
                  color="#4A4A49"
                  width={30}
                />
              </CtaOutlineBrown>
            ) : null}
            <div className="flex items-center gap-6 ">
              <p className="text-lg fxl:text-2xl text-main/80">
                {deg.shareTitle}
              </p>
              <ul className="flex gap-6">
                <li>
                  {" "}
                  <FacebookShareButton
                    url={`https://lescretes.it/degustazioni/${deg?.title}`}
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
                    url={`https://lescretes.it/degustazioni/${deg?.title}`}
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
              {deg.bookNow}
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
              {deg.bookNow} <Icon icon="oui:arrow-down" />
            </button>
          )}
        </div>
        {deg.opzione ? (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            deg={deg.name}
            link={deg.title}
            price={deg.price}
            durata={deg.durata?.tempo}
            tipo={deg.degustazione.vini}
            form={deg.form}
            optPrice={deg.opzione.price}
            opzione={deg.opzione}
          />
        ) : (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            deg={deg.name}
            link={deg.title}
            price={deg.price}
            durata={deg.durata?.tempo}
            tipo={deg.degustazione.vini}
            form={deg.form}
            opzione={deg.opzione}
          />
        )}

        {deg.prenotaBtn ? (
          <div className="flex flex-col w-full gap-6">
            <h2 className="py-6 text-2xl font-bold">{deg.prenotaTitle}</h2>
            <Link
              href={deg.prenotaBtn}
              target="_blank"
              title={"prenotazione"}
              className=" items-center justify-center text-[20px]  gap-2 text-center capitalize font-medium py-4 px-6   text-white hover:transition-all  bg-main w-full hidden xl:flex"
            >
              {deg.bookWell}{" "}
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
          <div className="hidden lg:flex flex-col w-[80%] mx-auto h-full">
            <div className="p-4 text-center xl:text-2xl bg-main">
              <h2 className="font-bold text-white uppercase">{deg.name}</h2>
            </div>
            {deg.opzione ? (
              <FormPrenotazione
                deg={deg.name}
                link={deg.title}
                price={deg.price}
                durata={deg.durata?.tempo}
                tipo={deg.degustazione.vini}
                form={deg.form}
                optPrice={deg.opzione.price}
              />
            ) : (
              <FormPrenotazione
                deg={deg.name}
                link={deg.title}
                price={deg.price}
                durata={deg.durata?.tempo}
                tipo={deg.degustazione.vini}
                form={deg.form}
              />
            )}
          </div>
        )}
      </div>

      <div className="w-full h-[1px] bg-second my-10"></div>
      <div
        className="relative flex flex-col items-center justify-center py-10 lg:py-20"
        id="recensioni"
      >
        <div className="w-[90%] mx-auto flex flex-col gap-8 lg:gap-20 ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-main md:text-5xl lg:text-5xl fxl:text-6xl ">
                {deg.testimonials.title}
              </h2>
            </div>
            <div className="flex items-end md:justify-end">
              <CtaOutlineBrown link="https://g.page/r/CXZcr8aa7zgbEBM/review">
                {deg.testimonials.button} <Icon icon="jam:write" />
              </CtaOutlineBrown>
            </div>
          </div>

          <div>
            <Reviews />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-wrap justify-end  gap-6 xl:justify-between text-sm md:text-xl breadcrumbs"></div>
      <div className="w-full bg-second">
        <div className="flex flex-col w-full gap-10 py-20 mx-auto">
          <div className="w-[90%] mx-auto flex items-center">
            <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold xl:leading-[46px] 3xl:text-7xl ">
              {deg.othersTitle}
            </h2>
            <div className="hidden gap-4 py-6 ml-auto lg:flex">
              <button className="p-2 hover:bg-white hover:rounded-full prev">
                <Icon
                  icon="prime:chevron-left"
                  width={30}
                  className="text-main"
                />
              </button>
              <button className="p-2 hover:bg-white hover:rounded-full next">
                <Icon
                  icon="prime:chevron-right"
                  width={30}
                  className="text-main"
                />
              </button>
            </div>
          </div>
          <div className="relative w-[90%] mx-auto lg:w-full ">
            <Swiper
              className="lg:!px-20"
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop
              modules={[Navigation, Pagination]}
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
                  <div>
                    <Cards
                      img={el?.img}
                      title={el?.name}
                      descrizione={el?.descrizione}
                      price={el?.price}
                      link={el.link}
                      tempo={el.tempo}
                      bed={el.bed}
                      wine={el.wine}
                      fork={el.fork}
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
};

export default SingleDeg;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  // Selezioniamo l'oggetto di degustazione basato sulla lingua
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

  // Otteniamo l'oggetto target per il titolo specificato
  let targetObj = obj?.degustazioni?.singleDeg?.[params?.title];

  // Creiamo un array con tutti i titoli delle degustazioni
  const arr = Object.keys(obj?.degustazioni?.singleDeg);

  // Filtriamo le degustazioni basandoci sui nuovi campi
  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Escludiamo il servizio corrente
    .map((el) => {
      const degustazione = obj?.degustazioni?.singleDeg?.[el];
      return {
        name: degustazione?.name,
        img: degustazione?.img,
        descrizione: degustazione?.cardDesc,
        price: degustazione?.priceCard,
        tempo: degustazione?.durata?.tempo,
        link: el,
        bed: degustazione?.bed, // Nuovo campo
        wine: degustazione?.wine, // Nuovo campo
        fork: degustazione?.fork, // Nuovo campo
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
