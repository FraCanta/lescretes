import Head from "next/head";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Pagina non trovata</title>
        <meta
          rel="description"
          content="Ci dispiace, sembra che la pagina che stai cercando non esista.
            Torna all'Home page"
        />
      </Head>
      <div className="relative flex flex-col items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] bg-404">
        <div className="absolute inset-0 opacity-50 bg-main"></div>
        <div className="relative z-10 flex flex-col gap-6 text-center mt-36">
          <h1 className="font-bold text-white text-8xl">Pagina non trovata</h1>
          <p className="text-2xl text-white">
            Ci dispiace, sembra che la pagina che stai cercando non esista.
            Torna all'{" "}
            <Link
              href="/"
              title="back to home"
              className="font-bold text-white underline"
            >
              Home page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
