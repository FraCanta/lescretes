import React from "react";
import degustazioniIT from "../../public/locales/it/degustazioni.json";
import degustazioniEN from "../../public/locales/en/degustazioni.json";
import degustazioniFR from "../../public/locales/fr/degustazioni.json";
import FAQ from "@/components/FAQ/FAQ";
import Image from "next/image";
import Bicchiere from "@/public/assets/iconeperdegustazioni/bicchiere.svg";
import Durata from "@/public/assets/iconeperdegustazioni/durata.svg";
import Cantina from "@/public/assets/iconeperdegustazioni/cantina.svg";
import Lingue from "@/public/assets/iconeperdegustazioni/lingue.svg";
import Link from "next/link";
import Head from "next/head";

const SingleDeg = ({ deg }) => {
  console.log(deg);
  return (
    <>
      <Head>
        <title>{`Les Cretes - ${deg?.name}`}</title>
      </Head>
      <div className="min-h-[70vh] w-[90%] my-6 mx-auto flex items-center justify-center relative before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main before:opacity-40 before:rounded-[30px]">
        <div className="p-8 w-full h-full ">
          <Image src={deg?.img} fill className="object-cover rounded-[30px]" />
        </div>
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-0 justify-between w-[90%] translate-x-[6%]  absolute bottom-0 left-0 p-8 z-[999]">
          <h1 className="text-white text-[40px] leading-none xl:text-[56px] xl:leading-[66px] font-bold">
            {deg?.name}
          </h1>
          <div className="flex items-center">
            <Link
              href="/contatti"
              className="text-center capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] text-main hover:transition-all  bg-white max-w-max "
            >
              Prenota subito
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-2 xl:grid-cols-4 gap-10 py-10 flex-col">
        <div className="flex h-full items-center">
          <Image src={Bicchiere} className="h-full w-12" alt="bicchiere" />
          <div className="flex flex-col ">
            <h2 className="font-bold text-[18px] text-main">Degustazione</h2>
            <p className="text-[16px]">3 vini</p>
          </div>
        </div>
        <div className="flex h-full items-center">
          <Image src={Durata} className="h-full w-12" alt="bicchiere" />
          <div className="flex flex-col ">
            <h2 className="font-bold text-[18px] text-main">Durata</h2>
            <p className="text-[16px]">3 vini</p>
          </div>
        </div>
        <div className="flex h-full items-center">
          <Image src={Cantina} className="h-full w-12" alt="bicchiere" />
          <div className="flex flex-col ">
            <h2 className="font-bold text-[18px] text-main">Visita Cantina</h2>
            <p className="text-[16px]">3 vini</p>
          </div>
        </div>
        <div className="flex h-full items-center">
          <Image src={Lingue} className="h-full w-12" alt="bicchiere" />
          <div className="flex flex-col ">
            <h2 className="font-bold text-[18px] text-main">Lingua</h2>
            <p className="text-[16px]">3 vini</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex-col justify-start items-start gap-[34px] flex py-10">
        <h2 className="w-[214px] text-main text-4xl font-bold  leading-[46px]">
          Descrizione
        </h2>
        <div className="w-full text-main text-xl font-normal  leading-9 flex flex-col gap-6">
          <p>
            Fai un primo passo nel mondo Les Cretes per scoprirne la storia, il
            territorio, i suoi vitigni ed i vini. Nella suggestiva cornice del
            Rifugio del Vino, potrai degustare tre vini con vista sui vigneti,
            dopo aver visitato la cantina e la barricaia.
          </p>
          <p>
            Ut accumsan imperdiet quam quis porttitor. In dapibus dapibus
            facilisis. Praesent tortor sapien, dapibus hendrerit scelerisque a,
            vulputate eget mauris. Integer eget ligula et justo molestie
            consectetur. Mauris sed lectus lectus. Praesent varius blandit
            lobortis. Vivamus nunc ligula, varius vel risus ut, mollis fermentum
            erat. Donec id neque ipsum. Proin blandit, urna at tincidunt
            volutpat, purus ante ultrices nisl, nec luctus purus odio sit amet
            lectus.
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto ">
        <h2 className="text-6xl font-bold py-8">FAQs</h2>
        <FAQ />
      </div>
    </>
  );
};

export default SingleDeg;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = degustazioniIT;
      break;

    case "en":
      obj = degustazioniEN;
      break;
    case "fr":
      obj = degustazioniFR;
      break;
    default:
      obj = degustazioniIT;
      break;
  }
  let targetObj = obj?.degustazioni?.singleDeg?.[params?.title];

  console.log(targetObj);

  return {
    props: {
      deg: targetObj,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = degustazioniIT;
      break;

    case "en":
      obj = degustazioniEN;
      break;
    case "fr":
      obj = degustazioniFR;
      break;
    default:
      obj = degustazioniIT;
      break;
  }

  const degs = Object.keys(obj?.degustazioni?.singleDeg);
  const pathEn = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathFr = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "fr",
    };
  });
  const pathIt = degs?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const paths = pathIt.concat(pathEn).concat(pathFr);
  return {
    paths,
    fallback: false,
  };
}
