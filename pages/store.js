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

const Map = dynamic(() => import("../components/StoreLocator/Map"), {
  ssr: false,
});

const Store = ({ translation }) => {
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
        <title>Stores Locator</title>
      </Head>
      <div className="w-[90%] mx-auto min-h-screen py-10 text-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-main text-4xl font-bold">
              {translation.heading.title}
            </h1>
            <p
              className=" text-main text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal "
              dangerouslySetInnerHTML={{
                __html: translation.heading.descrizione,
              }}
            ></p>
            <ul className="flex flex-col  divide-y divide-main/30 transition-all ease-in-out duration-300">
              {currentLocations.map((el) => {
                function handleOnClick() {
                  setActiveStore(el.id);
                }

                return (
                  <li key={el.id} className="py-4 ">
                    <p className="font-bold text-xl mb-2">{el.name}</p>
                    <address>{el.address}</address>
                    <p>{el.phoneNumber}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        className="underline font-medium"
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
                  className="px-2 py-1  transition-all ease-linear duration-300"
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
