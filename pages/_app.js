import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/sections.css";
import "@/styles/tabs.css";

import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
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
  );
}
