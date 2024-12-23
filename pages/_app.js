import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/sections.css";
import "@/styles/tabs.css";
import "@/styles/wordpress.css";
import "@/styles/gallery3d.css";

import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
export default function App({ Component, pageProps, router }) {
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };
  const transitionColor = "white";

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={router.route}>
        <motion.div
          style={{
            backgroundColor: transitionColor,
            position: "fixed",
            width: "100vw",
            zIndex: 1000,
            bottom: 0,
          }}
          transition={transitionSpringPhysics}
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
        />

        <motion.div
          style={{
            backgroundColor: transitionColor,
            position: "fixed",
            width: "100vw",
            zIndex: 99999,
            top: 0,
          }}
          transition={transitionSpringPhysics}
          initial={{ height: "100vh" }}
          animate={{ height: "0vh", transition: { delay: 0.2 } }}
        />
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
          {/* Google Analytics */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N78X2SJWPF"
            strategy="afterInteractive"
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N78X2SJWPF', { 'debug_mode': true });
        `}
          </Script>
          {/* Google Tag Manager */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','G-N78X2SJWPF');`}
          </Script>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
