import Head from "next/head";
import React from "react";

function Privacy() {
  return (
    <>
      <Head>
        <title>Informativa sulla Privacy | Les Crêtes</title>
        <meta
          name="description"
          content="Scopri come gestiamo i tuoi dati personali in conformità al GDPR. Consulta la nostra informativa sulla privacy."
        />
        <meta
          name="keywords"
          content="Informativa privacy, dati personali, GDPR, Les Crêtes, gestione dati, protezione dati"
        />
        <meta name="author" content="Les Crêtes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Informativa sulla Privacy | Les Crêtes"
        />
        <meta
          property="og:description"
          content="Informazioni sulla gestione dei tuoi dati personali secondo il regolamento GDPR."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lescretes.it/privacy" />
        {/* <meta
          property="og:image"
          content="https://www.lescretes.it/assets/images/privacy-preview.jpg"
        /> */}
        <link rel="canonical" href="https://www.lescretes.it/privacy" />
      </Head>
      <div className="container p-4 mx-auto sm:p-6">
        <h1 className="mb-4 text-xl font-bold sm:text-2xl">
          Informativa sul trattamento dei dati personali
        </h1>
        <p className="mb-4 text-sm text-main sm:text-base">
          Informativa sul trattamento dei dati personali ex artt. 13 e 14 del
          Regolamento UE 2016/679 ("Regolamento"). Società agricola di Charrère
          & C. s.s. (“Les Crêtes”), fornisce le informazioni relative al
          trattamento dei dati personali dell’utente che navighi all’interno dei
          siti web di Les Crêtes all'indirizzo
          <a href="https://www.lescretes.it" className="underline text-main">
            {" "}
            https://www.lescretes.it
          </a>
          .
        </p>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl">
            1. Tipi di dati raccolti
          </h2>
          <p className="mb-4 text-sm text-main sm:text-base">
            <strong>Dati di navigazione</strong>: I sistemi informatici e le
            procedure software preposte al funzionamento del Sito acquisiscono,
            nel corso del loro normale esercizio, alcuni dati personali la cui
            trasmissione è implicita nell’uso dei protocolli di comunicazione di
            Internet.
          </p>
          <p className="mb-4 text-sm text-main sm:text-base">
            <strong>
              Dati forniti volontariamente da persone fisiche e giuridiche
            </strong>
            : A seguito dell’invio volontario dei dati da parte dell’utente Les
            Crêtes potrà trattare tali dati personali per rispondere alle
            richieste formulate.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl">
            2. Finalità e base giuridica del trattamento
          </h2>
          <p className="mb-4 text-sm text-main sm:text-base">
            I dati forniti verranno trattati per le seguenti finalità:
          </p>
          <ul className="mb-4 text-sm list-disc list-inside text-main sm:text-base">
            <li>
              Controllare il corretto funzionamento dei servizi offerti tramite
              il Sito.
            </li>
            <li>
              Ottenere informazioni statistiche sull'uso dei servizi e del Sito.
            </li>
            <li>
              Con consenso, a scopo promozionale e pubblicitario, comprese
              attività di profilazione.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold sm:text-xl">
            3. Modalità del trattamento
          </h2>
          <p className="mb-4 text-sm text-main sm:text-base">
            I dati raccolti verranno trattati con strumenti elettronici,
            memorizzati su supporti informatici e organizzati in database, con
            misure di sicurezza per prevenirne la perdita o accessi non
            autorizzati.
          </p>
        </section>

        <footer className="mt-8">
          <p className="text-xs text-main sm:text-sm">
            Per maggiori informazioni contattare il Titolare del trattamento dei
            dati all’indirizzo email
            <a
              href="mailto:info@lescretes.it"
              className="text-blue-600 underline"
            >
              {" "}
              info@lescretes.it
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}

export default Privacy;
