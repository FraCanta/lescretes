import React from "react";
import cosmesiIT from "../../public/locales/it/cosmesi.json";
import cosmesiEN from "../../public/locales/en/cosmesi.json";
import cosmesiFR from "../../public/locales/fr/cosmesi.json";
import Head from "next/head";
import Image from "next/image";
import Cards from "@/components/Cards/Cards";

const SingleCosmetic = ({ cosm, others }) => {
  console.log(others);
  return (
    <>
      <Head>
        <title>
          Les Crêtes - {cosm.name} - {cosm.details}
        </title>
      </Head>
      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(100vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="w-full min-h-screen relative">
          <Image src={cosm?.img} fill className="object-cover" />
        </div>
        <div className=" flex flex-col gap-[30px] w-[90%] mx-auto xl:mx-0 py-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap xl:justify-between w-full xl:items-center">
              <h1 className="text-main text-[30px] leading-[40px] xl:text-[40px] xl:leading-[50px] font-bold">
                {cosm?.name}
              </h1>
              <p>200ml</p>
            </div>
            <p className="text-main/60 font-[500] text-[16px] !-py-2">
              {cosm.details}
            </p>
          </div>
          <p className="text-base">
            Texture ultra ricca e fondente che dona nutrimento per una pelle
            tonica, rigenerata e idratata. Indicata per tutti i tipi di pelle,
            in particolare nei casi di forte secchezza, disidratazione e atonie.
          </p>
          <p className="text-base">
            Svolge una decisa azione tonificante e levigante per una pelle più
            elastica, compatta e uniforme.
          </p>
          <h2 className="text-[25px] font-bold">Ingredienti</h2>
          <p className="text-base">
            olio di vinaccioli, acido ialuronico, olio di mandorle dolci,
            polisaccaride protettivo effetto barriera, estratto di Hibisco,
            estratto di avena, estratto di rosa damascena e olio di noce.
          </p>
          <h2 className="text-[25px] font-bold">Metodo di applicazione</h2>
          <p className="text-base">
            Applicare mattino e sera o dopo il bagno/doccia su pelle asciutta e
            detersa, massaggiare con movimenti circolari a completo
            assorbimento.
          </p>
          <div className="flex gap-6 mt-4">
            <div className="bg-main h-20 w-20 rounded-full"></div>
            <div className="bg-main h-20 w-20 rounded-full"></div>
            <div className="bg-main h-20 w-20 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto py-10 gap-[30px]">
        <h2 className="text-[35px] font-bold">
          Ti potrebbero anche interessare
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 ">
          {others.map((el, i) => (
            <Cards img={el.img} name={el.name} button={el.button} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleCosmetic;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = cosmesiIT;
      break;

    case "en":
      obj = cosmesiEN;
      break;
    case "fr":
      obj = cosmesiFR;
      break;
    default:
      obj = cosmesiIT;
      break;
  }
  let targetObj = obj?.cosmesi?.singleCosmetic?.[params?.title];
  const arr = Object.keys(obj?.cosmesi?.singleCosmetic);

  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Exclude the current service
    .map((el) => {
      return {
        name: obj?.cosmesi?.singleCosmetic?.[el]?.name,
        img: obj?.cosmesi?.singleCosmetic?.[el]?.img,
        button: obj?.cosmesi?.singleCosmetic?.[el]?.button,
      };
    });

  return {
    props: {
      cosm: targetObj,
      others: filteredOthers,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = cosmesiIT;
      break;

    case "en":
      obj = cosmesiEN;
      break;
    case "fr":
      obj = cosmesiFR;
      break;
    default:
      obj = cosmesiIT;
      break;
  }

  const cosmetics = Object.keys(obj?.cosmesi?.singleCosmetic);
  const pathEn = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathFr = cosmetics?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "fr",
    };
  });
  const pathIt = cosmetics?.map((el) => {
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
