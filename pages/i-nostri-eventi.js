// pages/eventi.jsx
import EventCard from "@/components/EventCard/EventCard";
import Head from "next/head";
import React from "react";

function EventiPage() {
  const eventiLuglio = [
    {
      date: "2025-07-10",
      title: "Insolito Picnic",
      description:
        "Picnic tra i filari del nostro iconico vigneto Côteau La Tour",
      image: "/assets/eventi/picnic.jpg", // <--- aggiunta immagine
    },
    {
      date: "2025-07-25",
      title: "Tramonto al Rifugio",
      description: "Apericena con abbinamento di 3 vini di Les Crêtes",
      image: "/assets/eventi/tramonto.jpg", // <--- aggiunta immagine
    },
  ];

  const eventiAgosto = [
    {
      date: "2025-08-10",
      title: "Les Crêtes sotto le stelle",
      description:
        "Cena nella terrazza del suggestivo Rifugio del Vino con abbinamento i CRU iconici prodotti da Les Crêtes",
      image: "/assets/eventi/les_cretes_sotto_le_stelle.jpg", // <--- aggiunta immagine
    },
    {
      date: "2025-08-20",
      title: "Insolito Picnic",
      description:
        "Picnic tra i filari del nostro iconico vigneto Côteau La Tour",
      image: "/assets/eventi/picnic.jpg", // <--- aggiunta immagine
    },
    {
      date: "2025-08-29",
      title: "Tramonto al Rifugio",
      description: "Apericena con abbinamento di 3 vini di Les Crêtes",
      image: "/assets/eventi/tramonto.jpg", // <--- aggiunta immagine
    },
  ];

  const eventiSettembre = [
    {
      date: "2025-09-5",
      title: "Sorsi di storia cenando tra i filari ",
      description:
        "Cena tra i filari dell’iconico vigneto Côteau La Tour sorseggiando i CRU iconici prodotti da Les Crêtes",
      image: "/assets/eventi/cena.jpg", // <--- aggiunta immagine
    },
  ];

  return (
    <>
      <Head>
        <title>Les Crêtes - i nostri eventi</title>
        <meta name="description" content="Les Crêtes - i nostri eventi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center min-h-[calc(30vh_-_70px)] md:min-h-[calc(40vh_-_70px)] fxl:min-h-[calc(50vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <div className="w-[90%] mx-auto flex flex-col gap-4 my-10">
          <h1 className="text-4xl font-regular text-main lf:text-center lg:text-6xl">
            I nostri eventi
          </h1>
          <p className="w-full text-lg lg:max-w-4xl text-main/80 fxl:text-2xl">
            Vivi la magia dell’estate tra vigneti, tramonti e stelle. Ogni
            evento è un’occasione per scoprire i sapori e i luoghi più iconici
            di Les Crêtes, accompagnati dai nostri vini d’eccellenza.
          </p>
        </div>
      </div>

      {[
        { titolo: "Luglio", eventi: eventiLuglio },
        { titolo: "Agosto", eventi: eventiAgosto },
        { titolo: "Settembre", eventi: eventiSettembre },
      ].map(({ titolo, eventi }) => (
        <div key={titolo} className="w-[90%] mx-auto mt-10">
          {/* TITOLO con BORDO */}
          <div className="border-b-2 border-main">
            <h2 className="px-6 py-3 text-xl tracking-wider text-white uppercase font-regular bg-main max-w-max">
              {titolo}
            </h2>
          </div>

          {/* EVENTI */}
          <div className="mt-10 mb-20">
            {eventi.map((evento, index) => (
              <EventCard
                key={index}
                date={evento.date}
                title={evento.title}
                description={evento.description}
                image={evento.image} // <--- passaggio dell'immagine
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default EventiPage;
