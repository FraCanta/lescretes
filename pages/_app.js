import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/sections.css";
import "@/styles/tabs.css";

import Script from "next/script";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading/loading";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula il caricamento dei dati o altre operazioni asincrone
    const loadData = async () => {
      // Aggiungi qui la logica per caricare i dati o eseguire altre operazioni
      // Attendere per un certo periodo di tempo (simulazione)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Quando i dati sono pronti, impostare loading su false
      setLoading(false);
    };
    // Chiamare la funzione per caricare i dati
    loadData();
  }, []);
  return (
    <AnimatePresence mode="whait" initial={false}>
      {loading ? (
        <Loading />
      ) : (
        <main>
          {" "}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></Script>
        </main>
      )}
    </AnimatePresence>
  );
}
