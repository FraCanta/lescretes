import { useState, useEffect, useRef } from "react";
import data from "@/utils/storelocations.json";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Icon } from "@iconify/react";
import storeIT from "../public/locales/it/store.json";
import storeEN from "../public/locales/en/store.json";
import storeFR from "../public/locales/fr/store.json";
import storeDE from "@/public/locales/de/store.json";
import storeJP from "../public/locales/jp/store.json";
import storeKO from "../public/locales/ko/store.json";
import storeRU from "../public/locales/ru/store.json";
import storeZH from "../public/locales/zh/store.json";
import { useRouter } from "next/router";

const Map = dynamic(() => import("../components/StoreLocator/Map"), {
  ssr: false,
});

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const Store = ({ translation }) => {
  console.log(translation);
  const { locale } = useRouter();
  const [activeStore, setActiveStore] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const suggestionsRef = useRef(null);

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleSearch = (event) => {
    const query = normalizeText(event.target.value);
    setSearchQuery(query);

    if (query) {
      setShowSuggestions(true);

      const results = data.storelocations.filter((store) => {
        const normalizedAddress = normalizeText(store.address);
        const normalizedName = normalizeText(store.name);
        const normalizedProvinceCode = store.provinceCode;

        return (
          normalizedAddress.includes(query) ||
          normalizedName.includes(query) ||
          normalizedProvinceCode.includes(query)
        );
      });

      if (results.length > 0) {
        setFilteredLocations(results);
        setNoResults(false);
      } else {
        setFilteredLocations([]);
        setNoResults(true);
      }
    } else {
      setFilteredLocations([]);
      setShowSuggestions(false);
      setNoResults(false);
    }
  };

  const handleSuggestionClick = (store) => {
    setActiveStore(store.id);
    setSearchQuery(store.address);
    setFilteredLocations([]);
    setShowSuggestions(false);

    document
      .getElementById("map-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  useOnClickOutside(suggestionsRef, () => setShowSuggestions(false));

  const handleFocus = () => setInputFocus(true);
  const handleBlur = () => setInputFocus(false);
  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredLocations([]);
    setShowSuggestions(false);
    setInputFocus(false);
    setNoResults(false);
  };

  const getCurrentLocations = () => {
    const locationsToShow =
      filteredLocations.length > 0 ? filteredLocations : data.storelocations;

    if (searchQuery) {
      return locationsToShow.filter((store) => {
        const normalizedAddress = normalizeText(store.address);
        return normalizedAddress.includes(normalizeText(searchQuery));
      });
    }
    return locationsToShow;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const locationsPerPage = 5;
  const totalPages = Math.ceil(getCurrentLocations().length / locationsPerPage);

  const startIndex = (currentPage - 1) * locationsPerPage;
  const currentLocations = getCurrentLocations().slice(
    startIndex,
    startIndex + locationsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Head>
        <title>{translation.heading.title}</title>
        <meta name="author" content="Les Crêtes" />
        <meta name="description" content={translation.heading.descrizione} />
        <meta
          property="og:url"
          content={`https://www.lescretes.it/${locale}/store-locator`}
        />
        <meta property="og:site_name" content="Les Crêtes" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stores Locator - Les Crêtes" />
        <meta
          property="og:description"
          content={translation.heading.descrizione}
        />
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
            <div className="relative flex items-center w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={translation.search}
                className={`p-2 pl-12 pr-10 w-full bg-transparent border rounded border-main text-main transition-all duration-300 ${
                  inputFocus || searchQuery ? "border-main" : "border-main/50"
                }`}
              />
              <Icon
                icon="icons8:search"
                className="absolute transform -translate-y-1/2 left-3 top-1/2 text-main"
              />
              {searchQuery && (
                <Icon
                  icon="material-symbols-light:delete-outline"
                  onClick={handleClearSearch}
                  className="absolute transform -translate-y-1/2 cursor-pointer right-3 top-1/2 text-main"
                />
              )}
            </div>
            {showSuggestions && (
              <ul
                ref={suggestionsRef}
                className="relative mt-2 overflow-y-auto bg-white border border-main max-h-60"
              >
                {noResults ? (
                  <li className="p-2 text-gray-500">
                    Nessun risultato trovato
                  </li>
                ) : (
                  filteredLocations.map((store) => (
                    <li
                      key={store.id}
                      onClick={() => handleSuggestionClick(store)}
                      className="p-2 cursor-pointer"
                    >
                      <p className="text-lg font-bold">{store.name}</p>
                      <p className="font-medium">{store.address}</p>
                    </li>
                  ))
                )}
              </ul>
            )}
            <ul className="flex flex-col transition-all duration-300 ease-in-out divide-y divide-main/30">
              {currentLocations.map((el) => (
                <li key={el.id} className="py-4">
                  <p className="mb-2 text-xl font-bold">{el.name}</p>
                  <address>{el.address}</address>
                  <p>{el.phoneNumber}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      className="font-medium underline"
                      onClick={() => {
                        setActiveStore(el.id);
                        document
                          .getElementById("map-container")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {translation.map.view}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            {totalPages > 1 && (
              <div className="flex flex-wrap my-6">
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
                    className={`px-1 py-1 mx-1 ${
                      currentPage === index + 1
                        ? "font-bold text-main transition-all ease-linear duration-300"
                        : "text-main/50"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-2 py-1"
                  >
                    <Icon icon="fluent:next-32-filled" />
                  </button>
                )}
              </div>
            )}
          </div>
          <div
            id="map-container"
            className="aspect-[900/1000] lg:aspect-square lg:col-span-2"
          >
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
