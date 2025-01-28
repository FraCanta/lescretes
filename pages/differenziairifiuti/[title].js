import Head from "next/head";
import Image from "next/image";
import React from "react";

function SinglePage() {
  return (
    <>
      <Head>
        <title>Les Crêtes - Separe the waste</title>
        <meta name="author" content="Les Crêtes" />
        <meta name="description" content="Recycling Table" />

        <link
          rel="alternate"
          hrefLang="it"
          href="https://www.lescretes.it/it/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.lescretes.it/en/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://www.lescretes.it/de/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.lescretes.it/fr/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="jp"
          href="https://www.lescretes.it/jp/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://www.lescretes.it/ko/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="ru"
          href="https://www.lescretes.it/ru/differenziairifiuti/separethewaste"
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href="https://www.lescretes.it/zh/differenziairifiuti/separethewaste"
        />

        <meta
          property="og:url"
          content={`https://www.lescretes.it/differenziairifiuti/separethewaste`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Les Crêtes - Separe the waste" />
        <meta property="og:description" content="Recycling Table" />
        <meta property="og:site_name" content="Les Crêtes" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lescretes.it" />
        <meta
          property="twitter:url"
          content="https://www.lescretes.it/differenziairifiuti/separethewaste"
        />
        <meta name="twitter:title" content="Les Crêtes - Separe the waste" />
        <meta name="twitter:description" content="Recycling Table" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Les Crêtes - Separe the waste",
            "description": "Recycling Table",
            "logo": "https://www.lescretes.it/favicon.ico"
          }
        `,
          }}
        />
      </Head>
      <div className="w-[90%] mx-auto h-screen flex items-center justify-center ">
        <div className="relative aspect-square w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] ">
          <Image
            src="/tabella.jpg"
            alt="Static Image"
            fill
            className="w-full h-full px-4 obejct-cover"
          />
        </div>
      </div>
    </>
  );
}

export default SinglePage;

export async function getStaticProps() {
  return {
    props: {}, // Non ci sono props da passare, visto che l'immagine è statica
  };
}

export async function getStaticPaths({ locale }) {
  return {
    paths: [
      {
        params: {
          title: "separethewaste",
          locale: locale,
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}
