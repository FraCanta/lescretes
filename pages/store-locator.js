import { useState } from "react";
import data from "@/utils/storelocations.json";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Icon } from "@iconify/react";
import storeIT from "../public/locales/it/store.json";
import storeEN from "../public/locales/en/store.json";
import storeFR from "../public/locales/fr/store.json";
import storeDE from "@/public/locales/de/store.json";
import storeJP from "@/public/locales/jp/store.json";
import storeKO from "@/public/locales/ko/store.json";
import storeRU from "@/public/locales/ru/store.json";
import storeZH from "@/public/locales/zh/store.json";
import { useRouter } from "next/router";
const Map = dynamic(() => import("../components/StoreLocator/Map"), {
  ssr: false,
});

const Store = ({ translation }) => {
  const { locale } = useRouter();
  const [activeStore, setActiveStore] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const locationsPerPage = 5;

  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(data.storelocations.length / locationsPerPage);

  // Calcola gli elementi da visualizzare nella pagina corrente
  const startIndex = (currentPage - 1) * locationsPerPage;
  const currentLocations = data.storelocations.slice(
    startIndex,
    startIndex + locationsPerPage
  );

  // Gestione dei cambiamenti di pagina
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Head>
        <>
          <title>Stores Locator - Les Crêtes</title>
          <meta name="author" content="Les Crêtes" />
          <meta name="description" content={translation.heading.descrizione} />
          {/* <meta
            name="keywords"
            content="Mi chiamo Francesca Cantale, aka thallion dev, e sono una web designer specializzata nella UX/UI design e in Next.js. Mi occupo di consulenza e realizzazione Siti Web e E-Commerce."
          /> */}
          <meta
            property="og:url"
            content={`https://www.lescretes.it/${locale}/store-locator`}
          />
          <meta property="og:site_name" content="Les Crêtes"></meta>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Stores Locator - Les Crêtes" />
          <meta
            property="og:description"
            content={translation.heading.descrizione}
          />
          {/* <meta
            property="og:image"
            content="https://www.thallion-dev.it/assets/cover_web.jpg"
          /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="lescretes.it" />
          <meta
            property="twitter:url"
            content={`https://www.lescretes.it/${locale}/store-locator`}
          />
          <meta name="twitter:title" content="Stores Locator - Les Crêtes" />
          <meta
            name="twitter:description"
            content={translation.heading.descrizione}
          />
          {/* <meta
            name="twitter:image"
            content="https://www.thallion-dev.it/assets/cover_web.jpg"
          /> */}
        </>
      </Head>
      <div className="w-[90%] mx-auto min-h-screen py-10 text-main">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-main">
              {translation.heading.title}
            </h1>
            <p
              className="text-xl font-normal text-main md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal"
              dangerouslySetInnerHTML={{
                __html: translation.heading.descrizione,
              }}
            ></p>
            <ul className="flex flex-col transition-all duration-300 ease-in-out divide-y divide-main/30">
              {currentLocations.map((el) => {
                function handleOnClick() {
                  setActiveStore(el.id);
                }

                return (
                  <li key={el.id} className="py-4 ">
                    <p className="mb-2 text-xl font-bold">{el.name}</p>
                    <address>{el.address}</address>
                    <p>{el.phoneNumber}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        className="font-medium underline"
                        onClick={handleOnClick}
                      >
                        {translation.map.view}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap my-6 ">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-2 py-1 transition-all duration-300 ease-linear"
                >
                  <Icon icon="fluent:previous-32-filled" />
                </button>
              )}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-1 py-1 mx-1  ${
                    currentPage === index + 1
                      ? "font-bold  text-main transition-all ease-linear duration-300"
                      : "text-main/50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-2 py-1 "
                >
                  <Icon icon="fluent:next-32-filled" />
                </button>
              )}
            </div>
          </div>
          <div className="aspect-[900/1000] lg:aspect-square lg:col-span-2">
            <Map store={data.storelocations} activeStore={activeStore} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = storeIT;
      break;

    case "en":
      obj = storeEN;
      break;
    case "fr":
      obj = storeFR;
      break;
    case "de":
      obj = storeDE;
      break;
    case "jp":
      obj = storeJP;
      break;
    case "ko":
      obj = storeKO;
      break;
    case "ru":
      obj = storeRU;
      break;
    case "zh":
      obj = storeZH;
      break;
    default:
      obj = storeIT;
      break;
  }

  return {
    props: {
      translation: obj?.store,
    },
    revalidate: 60,
  };
}