import { Layout } from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/sections.css";
import "@/styles/tabs.css";
import "@/styles/wordpress.css";

import Script from "next/script";
import { AnimatePresence, motion, Spring } from "framer-motion";
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
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
