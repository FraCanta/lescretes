import { useState } from "react";
import data from "@/utils/storelocations.json";
import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(() => import("../components/StoreLocator/Map"), {
  ssr: false,
});

const Store = () => {
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
            <h1 className="text-main text-4xl font-bold">Locations</h1>
            <ul className="flex flex-col gap-8 divide-y divide-main/30">
              {currentLocations.map((el) => {
                const { latitudine, longitudine } = el.location;

                function handleOnClick() {
                  setActiveStore(el.id);
                }

                return (
                  <li key={el.id} className="py-4">
                    <p className="font-bold text-xl mb-2">{el.name}</p>
                    <address>{el.address}</address>
                    <p>{el.phoneNumber}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="underline" onClick={handleOnClick}>
                        Guarda sulla mappa
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex  mt-6">
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-4 py-2 mx-1 border rounded"
                >
                  Previous
                </button>
              )}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 border rounded ${
                    currentPage === index + 1 ? "bg-main text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-4 py-2 mx-1 border rounded"
                >
                  Next
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
