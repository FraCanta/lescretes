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
import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import toast from "react-hot-toast";
import { traceGlobals } from "next/dist/trace/shared";

const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ["it", "us", "gb", "fr", "de"].includes(iso2);
});

function GiftPage({ translation }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    namegift: "",
    surnamegift: "",
    emailgift: "",
    phonegift: "",
  });

  const inserisciDatiRef = useRef(null);

  const handleSelect = (title) => {
    setSelectedCard(title);
    setShowForm(true);

    if (inserisciDatiRef.current) {
      console.log("Eseguo scroll...");
      inserisciDatiRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const formType = "regalo";

  const onSubmitForm = async (event) => {
    event.preventDefault(); // Previene il refresh della pagina
    setShowForm(false);
    if (
      inputs.name &&
      inputs.surname &&
      inputs.email &&
      inputs.message &&
      inputs.phone &&
      inputs.namegift &&
      inputs.surnamegift &&
      inputs.emailgift &&
      inputs.phonegift
    ) {
      try {
        const formDataMail = {
          ...inputs,
          formType,
          selectedCard,
        };

        const res = await fetch(`/api/email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataMail),
        });

        if (res.status === 200) {
          setInputs({
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
            namegift: "",
            surnamegift: "",
            emailgift: "",
            phonegift: "",
          });

          toast.success(
            `Hey ${inputs.name}, your message was sent successfully`
          );
        } else {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        toast.error(
          `Hey ${inputs.name}, your message wasn't sent successfully`
        );
      }
    } else {
      // Gestisci caso in cui non tutti i campi sono compilati
      toast.error("Please fill in all required fields");
    }
  };

  const canProceed = () => {
    return privacyChecked && termsChecked;
  };
  return (
    <>
      <Head>
        <title>
          Regala una degustazione - Les Crêtes - Azienda vinicola in Valle
          d'Aosta
        </title>
      </Head>
      <div className="min-h-[calc(80vh_-_70px)] md:min-h-[calc(60vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)] 3xl:h-[calc(80vh_-_180px)]">
        <div className="relative">
          <Image
            alt="Regala una degustazione"
            className="object-cover object-center w-full h-[80vh] lg:h-[70vh] "
            src="/assets/regala_una_degustazione.webp"
            data-src="/assets/regala_una_degustazione.webp"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-main/50"></div>
          <div className="absolute inset-0 flex items-center justify-center lg:text-center w-[90%] mx-auto">
            <div className="flex flex-col gap-2 mx-auto">
              <h1 className="text-5xl font-bold tracking-wider text-white lf:text-center lg:text-6xl">
                <span className="font-2">{translation.heroTitle}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-[90%] mx-auto items-center">
        <div className="flex flex-col py-4">
          <div className="max-w-2xl fz-2">
            <h2 className="mb-4 text-4xl font-bold lg:text-6xl display-5 text-main">
              {translation.main.title}
            </h2>
            <p className="max-w-xl text-xl lg:text-2xl text-main/80">
              {translation.main.descrizione}
            </p>
          </div>
        </div>
        <div className="py-4 ">
          <div className="relative w-full h-full">
            <Image
              data-src="/assets/gift_card.jpg"
              alt="Il regalo perfetto per ogni wine lover - Les Crêtes"
              width="1020"
              height="700"
              className="object-cover"
              src="/assets/gift_card.jpg"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-10 h-full">
        {/* Chi regala */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-main">
              {translation.user.title}
            </h3>
            <p className="text-lg text-main/80">{translation.user.desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
            {translation.user.instru.map((el, i) => {
              return (
                <div className="flex" key={i}>
                  <div className="iTotem">
                    <div className="flex items-center gap-4">
                      <b className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-main">
                        {el.number}
                      </b>
                      <Icon
                        icon={el.icon}
                        width="50"
                        height="50"
                        className="text-main"
                      />
                    </div>
                    <p className="text-base text-main/80">{el.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chi riceve */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-main">
              {translation.present.title}
            </h3>
            <p className="text-lg text-main/80">{translation.present.desc}</p>
          </div>
          <div className="flex">
            <div className="iTotem">
              <div className="flex items-center gap-4">
                <b className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-main">
                  4
                </b>
                <Icon
                  icon="solar:calendar-line-duotone"
                  width="50"
                  height="50"
                  className="text-main"
                />
              </div>
              <p
                className="text-base text-main/80"
                dangerouslySetInnerHTML={{
                  __html: translation.present.four,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto py-10 text-main/20">
        <hr />
      </div>

      <div className="w-[90%] flex-col justify-start lg:items-center gap-[60px] flex mx-auto lg:py-20 xl:py-10">
        <h3 className="flex items-center gap-4 text-xl font-bold">
          <b className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-main">
            1
          </b>
          <span>{translation.card.one}</span>
          <Icon
            icon="mynaui:gift"
            width="24"
            height="24"
            className="text-main"
          />
        </h3>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {translation?.cards?.map((el, i) => (
            <div
              key={i}
              className={`h-full w-full bg-pattern4 overflow-hidden transition-all duration-500 ease-out bg-white card shadow-lg !rounded-sm ${
                selectedCard === el.title
                  ? "border-main border-2"
                  : "h-full w-full bg-pattern4 overflow-hidden transition-all duration-500 ease-out bg-white card shadow-lg !rounded-sm"
              }`}
            >
              <div className="card-body !gap-6 !p-6">
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-lg font-bold uppercase card-title">
                    {el.title}
                  </h2>
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => handleSelect(el.title)}
                      className="px-4 py-2 text-white rounded-[32px] bg-main hover:bg-opacity-90"
                    >
                      {el.select}
                    </button>
                    <Modal
                      title={el.title}
                      id={`my_modal_${i}`}
                      descrizione={el.descrizione}
                      wine={el.wine}
                      fork={el.fork}
                      tempo={el.tempo}
                      price={el.price}
                      cta={el.detail}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="w-full mt-10 bg-white " ref={inserisciDatiRef}>
            {showForm && (
              <>
                <h3 className="flex items-center gap-3 pb-10 text-xl font-bold lg:justify-center lg:text-center">
                  <b className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-main">
                    2
                  </b>
                  <span>{translation.card.two}</span>
                  <Icon
                    icon="mage:pen"
                    width="24"
                    height="24"
                    className="text-main"
                  />
                </h3>

                <form className="w-full py-10 lg:py-2" onSubmit={onSubmitForm}>
                  <input type="hidden" name="formType" value={formType} />

                  <select
                    id="experience"
                    name="experience"
                    className="hidden w-full px-3 py-2 border rounded "
                    defaultValue={selectedCard}
                  >
                    <option value={selectedCard}>{selectedCard}</option>
                  </select>

                  <div className="grid grid-cols-2 gap-10 mt-6 lg:flex-row">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={translation.card.form.name}
                      value={inputs.name}
                      onChange={handleChange}
                      required
                      className="w-full col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
                    />
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder={translation.card.form.surname}
                      value={inputs.surname}
                      onChange={handleChange}
                      required
                      className="w-full col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      value={inputs.email}
                      onChange={handleChange}
                      required
                      className="w-full col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
                    />
                    <PhoneInput
                      id="phone"
                      name="phone"
                      defaultCountry="it"
                      value={inputs.phone}
                      required
                      onChange={(phone) =>
                        setInputs((prev) => ({
                          ...prev,
                          phone: phone,
                        }))
                      }
                      countries={countries}
                      className="!border-b focus:outline-none focus:border-main bg-transparent !w-full col-span-2 lg:col-span-1  text-main"
                    />
                  </div>
                  <div className="my-20">
                    <h3 className="flex items-center gap-4 text-xl font-bold lg:text-center lg:justify-center">
                      <span className="align-bottom d-inline-block">
                        {translation.card.dedica.title}
                      </span>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-10 mt-6 lg:grid-cols-2">
                    <input
                      type="text"
                      id="namegift"
                      name="namegift"
                      placeholder={translation.card.dedica.name}
                      value={inputs.namegift}
                      onChange={handleChange}
                      required
                      className="w-full col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
                    />
                    <input
                      type="text"
                      id="surnamegift"
                      name="surnamegift"
                      placeholder={translation.card.dedica.surname}
                      value={inputs.surnamegift}
                      onChange={handleChange}
                      required
                      className="w-full col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
                    />
                    <input
                      type="email"
                      id="emailgift"
                      name="emailgift"
                      placeholder="Email*"
                      value={inputs.emailgift}
                      onChange={handleChange}
                      required
                      className="w-full col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
                    />

                    <PhoneInput
                      id="phonegift"
                      name="phonegift"
                      defaultCountry="it"
                      value={inputs.phonegift}
                      required
                      onChange={(phonegift) =>
                        setInputs((prev) => ({
                          ...prev,
                          phonegift: phonegift,
                        }))
                      }
                      countries={countries}
                      className="!border-b focus:outline-none focus:border-main bg-transparent !w-full col-span-2 lg:col-span-1  text-main"
                    />
                  </div>
                  <div className="w-full mt-20 lg:text-center">
                    <label
                      for="note_mittente"
                      className="text-xl font-bold text-center text-main "
                    >
                      {translation.card.dedica.dedicaTitle}
                    </label>
                    <textarea
                      id="message"
                      onChange={handleChange}
                      value={inputs.message}
                      cols="10"
                      rows="10"
                      className="w-full py-10 bg-transparent border-b focus:outline-none focus:border-main text-main"
                      placeholder={translation.card.dedica.messaggio}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <h3 className="mt-20 text-xl font-bold text-main">
                      {translation.card.terms.title}
                    </h3>
                    <ul className="flex flex-col gap-2 p-8 my-6 text-base list-disc list-inside text-main/80 bg-second">
                      {translation.card.terms.conditions.map((el, i) => {
                        return <li key={i}>{el}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <div className="my-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="tec"
                          name="tec"
                          value="SI"
                          required=""
                          onChange={() => setTermsChecked(!termsChecked)}
                          checked={termsChecked}
                        />
                        <label
                          for="tec"
                          dangerouslySetInnerHTML={{
                            __html: translation.card.terms.checkterms,
                          }}
                        ></label>
                      </div>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="my-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          value="SI"
                          required=""
                          onChange={() => setPrivacyChecked(!privacyChecked)}
                          checked={privacyChecked}
                        />
                        <label
                          for="privacy"
                          dangerouslySetInnerHTML={{
                            __html: translation.card.terms.checkprivacy,
                          }}
                        ></label>
                      </div>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className={`cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 ${
                        canProceed()
                          ? "border-main"
                          : "border-gray-400 opacity-50 cursor-not-allowed"
                      } ${canProceed() ? "" : "pointer-events-none"}`}
                      disabled={!canProceed()}
                    >
                      {translation.card.terms.submit}
                      <Icon
                        icon="lsicon:email-send-outline"
                        className="w-6 h-full"
                      />
                    </button>
                  </div>
                </form>
              </>
            )}
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
