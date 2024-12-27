import regaloIT from "../public/locales/it/regalo.json";
import regaloEN from "../public/locales/en/regalo.json";
import regaloFR from "../public/locales/fr/regalo.json";
import regaloDE from "@/public/locales/de/regalo.json";
import regaloJP from "@/public/locales/jp/regalo.json";
import regaloKO from "@/public/locales/ko/regalo.json";
import regaloRU from "@/public/locales/ru/regalo.json";
import regaloZH from "@/public/locales/zh/regalo.json";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Cards from "@/components/Cards/Cards";
import { Icon } from "@iconify/react";
import CtaPrimary from "@/components/Cta/CtaPrimary";
import CtaOutlineBrown from "@/components/Cta/CtaOutlineBrown";
import Link from "next/link";

function GiftPage({ translation }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (title) => {
    setSelectedCard(title);
  };
  return (
    <>
      <Head>
        <title>
          Regala una degustazione - Les Crêtes - Azienda vinicola in Valle
          d'Aosta
        </title>
      </Head>
      <div className="min-h-[calc(100vh_-_70px)] md:min-h-[calc(60vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <div className="relative">
          <Image
            alt="Regala una degustazione"
            className="object-cover object-center w-full h-screen lg:h-[70vh] "
            src="/assets/regala_una_degustazione.webp"
            data-src="/assets/regala_una_degustazione.webp"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-main/50"></div>
          <div className="absolute inset-0 flex items-center justify-center lg:text-center w-[90%] mx-auto">
            <div className="flex flex-col gap-2 mx-auto">
              <h1 className="text-5xl font-bold tracking-wider text-white lf:text-center lg:text-7xl">
                <span className="font-2">Regala una degustazione</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-[90%] mx-auto items-center">
        <div className="flex flex-col py-4">
          <div className="max-w-2xl fz-2">
            <h2 class="text-4xl lg:text-6xl display-5 font-bold mb-4 text-main">
              Il regalo perfetto per ogni wine lover
            </h2>
            <p className="text-xl lg:text-3xl text-main">
              Un’occasione unica per entrare nel mondo e nei colori di Les
              Crêtes.
            </p>
          </div>
        </div>
        <div class="col-md-6 py-4">
          <div class="w-full h-full relative">
            <Image
              data-src="/assets/gift_card.jpg"
              alt="Il regalo perfetto per ogni wine lover - Les Crêtes"
              width="1020"
              height="700"
              class="object-cover"
              src="/assets/gift_card.jpg"
            />
          </div>
        </div>
      </div>

      <div class="w-[90%] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 my-10  gap-6">
          <div class="flex flex-col gap-4">
            <h3 class="text-main text-3xl font-bold">Chi fa il regalo</h3>
            <p class="text-main text-lg">
              Sceglie l'esperienza e la data in cui spedire il regalo.
            </p>
          </div>
          <div class="">
            <div class="flex flex-col gap-4">
              <h3 class="text-main text-3xl font-bold">Chi riceve il regalo</h3>
              <p class="text-main text-lg">
                Al momento della richiesta di prenotazione, dichiarerà di
                possedere un voucher regalo e potrà prenotare la visita in data
                e orario a scelta.
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-between w-full gap-6">
          <div className="grid grid-cols-3 gap-6">
            <div class="flex">
              <div class="iTotem">
                <div class="flex items-center gap-4">
                  <b class="text-white h-8 w-8  bg-main rounded-full flex items-center justify-center">
                    1
                  </b>

                  <Icon
                    icon="mynaui:gift"
                    width="60"
                    height="60"
                    className="text-main"
                  />
                </div>
                <div class="text-main text-base">
                  Seleziona l'esperienza da regalare.
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-4 mb-4 position-relative">
              <div class="iTotem">
                <div class="flex items-center gap-4">
                  <b class="text-white h-8 w-8  bg-main rounded-full flex items-center justify-center">
                    2
                  </b>
                  <Icon
                    icon="mage:pen"
                    width="60"
                    height="60"
                    className="text-main"
                  />
                </div>
                <div class="text-main text-base">Personalizza il messaggio</div>
              </div>
            </div>
            <div class="col-6 col-sm-4 mb-4 position-relative">
              <div class="iTotem">
                <div class="flex items-center gap-4">
                  <b class="text-white h-8 w-8  bg-main rounded-full flex items-center justify-center">
                    3
                  </b>
                  <Icon
                    icon="lsicon:email-send-outline"
                    width="60"
                    height="60"
                    className="text-main"
                  />
                </div>
                <div class="text-main text-base">
                  Compila il modulo di richiesta
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6  mb-4 order-lg-2">
            <div class="max-w500 mx-auto">
              <div class="iTotem mx-auto">
                <div class="flex items-center gap-4">
                  <b class="text-white h-8 w-8  bg-main rounded-full flex items-center justify-center">
                    4
                  </b>{" "}
                  <Icon
                    icon="solar:calendar-line-duotone"
                    width="60"
                    height="60"
                    className="text-main"
                  />
                </div>
                <div class="text-main text-base">
                  Prenota e fai la visita
                  <br />
                  entro 1 anno dall’acquisto
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[90%] mx-auto py-10 text-main/20">
        <hr />
      </div>

      <div className="w-[90%] flex-col justify-start items-center gap-[60px] flex mx-auto lg:py-20 xl:py-10">
        <h4 className="flex items-center gap-4 text-lg">
          <b className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-main">
            1
          </b>
          <span className="align-bottom d-inline-block">
            Seleziona l'esperienza
          </span>
          <Icon
            icon="mynaui:gift"
            width="24"
            height="24"
            className="text-main"
          />
        </h4>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {translation?.cards?.map((el, i) => (
            <div
              key={i}
              className={`h-full w-full bg-pattern4 overflow-hidden transition-all duration-500 ease-out bg-white card shadow-lg !rounded-sm ${
                selectedCard === el.title ? "border-main border-2" : ""
              }`}
            >
              <div className="card-body !gap-6 !p-6">
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-lg font-bold uppercase card-title">
                    {el.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleSelect(el.title)}
                      className="px-4 py-2 text-white rounded bg-main hover:bg-opacity-90"
                    >
                      Seleziona
                    </button>
                    <Link href={el.link} className="underline text-main">
                      Dettagli
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="w-full p-6 mt-10 bg-white">
            <h4 className="flex items-center justify-center gap-4 pb-10 text-xl font-bold text-center">
              <b className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-main">
                2
              </b>
              <span className="align-bottom d-inline-block">
                Inserisci i tuoi dati
              </span>
              <Icon
                icon="mage:pen"
                width="24"
                height="24"
                className="text-main"
              />
            </h4>
            <form>
              <select
                id="experience"
                name="experience"
                className="hidden w-full px-3 py-2 border rounded"
                defaultValue={selectedCard}
              >
                <option value={selectedCard}>{selectedCard}</option>
              </select>

              <div className="flex flex-col gap-10 mt-6 lg:flex-row">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Cognome*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
              </div>
              <div className="my-20">
                <h4 className="flex items-center justify-center gap-4 text-xl font-bold text-center">
                  <span className="align-bottom d-inline-block">
                    Inserisci i dati di chi riceverà il Buono Regalo
                  </span>
                </h4>
              </div>
              <div className="flex flex-col gap-10 mt-6 lex lg:flex-row">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Cognome*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
                <input
                  type="date"
                  id="email"
                  name="Date"
                  placeholder="Email*"
                  required
                  className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
                />
              </div>
              <div className="w-full mt-10 text-center">
                <label
                  for="note_mittente"
                  class="text-main text-center text-xl font-bold  "
                >
                  Scrivi una dedica{" "}
                </label>
                <textarea
                  id="message"
                  // onChange={handleChange}
                  // value={inputs.message}
                  cols="10"
                  rows="10"
                  className="w-full py-10 bg-transparent border-b focus:outline-none focus:border-main text-main"
                  placeholder="Messaggio"
                  required
                ></textarea>
              </div>
              <div>
                <h5 class="mt-5 text-main text-lg font-bold">
                  Termini e condizioni generali
                </h5>
                <div class="my-1">
                  <div class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="tec"
                      name="tec"
                      value="SI"
                      required=""
                    />
                    <label for="tec">
                      <span class="opacity-75">
                        * Dichiaro di aver letto e compreso i
                      </span>{" "}
                      <a target="_blank" href="termini-e-condizioni-generali">
                        <strong>Termini e le condizioni generali</strong>
                      </a>
                    </label>
                  </div>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="my-1">
                  <div class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      value="SI"
                      required=""
                    />
                    <label for="privacy">
                      <span class="opacity-75">
                        * Dichiaro di aver letto e compreso la{" "}
                      </span>{" "}
                      <strong>
                        <a target="_blank" href="privacy">
                          Politica sulla privacy
                        </a>{" "}
                      </strong>{" "}
                      e sui{" "}
                      <strong>
                        <a target="_blank" href="informativa-cookie">
                          cookies
                        </a>{" "}
                      </strong>
                    </label>
                  </div>
                  <div class="help-block with-errors"></div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
                >
                  Invia richiesta{" "}
                  <Icon
                    icon="lsicon:email-send-outline"
                    className="w-6 h-full"
                  />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default GiftPage;
export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = regaloIT;
      break;

    case "en":
      obj = regaloEN;
      break;
    case "fr":
      obj = regaloFR;
      break;
    case "de":
      obj = regaloDE;
      break;
    case "jp":
      obj = regaloJP;
      break;
    case "ko":
      obj = regaloKO;
      break;
    case "ru":
      obj = regaloRU;
      break;
    case "zh":
      obj = regaloZH;
      break;
    default:
      obj = regaloIT;
      break;
  }

  return {
    props: {
      translation: obj?.regalo,
    },
    revalidate: 60,
  };
}
