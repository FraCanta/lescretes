import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import prenotazioneIT from "../public/locales/it/prenotazione.json";
import prenotazioneEN from "../public/locales/en/prenotazione.json";
import prenotazioneFR from "../public/locales/fr/prenotazione.json";
import prenotazioneDE from "@/public/locales/de/prenotazione.json";
import prenotazioneJP from "@/public/locales/jp/prenotazione.json";
import prenotazioneKO from "@/public/locales/ko/prenotazione.json";
import prenotazioneRU from "@/public/locales/ru/prenotazione.json";
import prenotazioneZH from "@/public/locales/zh/prenotazione.json";

import Head from "next/head";
import { Icon } from "@iconify/react";
import FormPrenotazione3 from "@/components/formPrenotazione/formPrenotazione3";
import CtaPrimary from "@/components/Cta/CtaPrimary";
const Prenotazione = ({ translation }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [accompagnatiDaMinori, setAccompagnatiDaMinori] = useState(null);
  const [numeroMinori, setNumeroMinori] = useState(""); // Stato per il numero di minori accompagnati
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    cap: "",
    dob: null,
    nation: "",
  });

  const handleRadioChange = (e) => {
    setAccompagnatiDaMinori(e.target.value === "true");
  };

  const handleNumeroMinoriChange = (e) => {
    setNumeroMinori(parseInt(e.target.value, 10)); // Converte il valore in un numero intero
  };

  useEffect(() => {
    if (router.query.formData) {
      console.log("Query param:", router.query.formData); // <-- aggiungi questo
      try {
        const parsedData = JSON.parse(router.query.formData);
        console.log("Parsed formData:", parsedData); // <-- e anche questo
        setFormData(parsedData);
      } catch (e) {
        console.error("Errore nel parsing di formData:", e);
      }
    }
  }, [router.query.formData]);

  const handleModificaClick = () => {
    // Costruisci il percorso di ritorno includendo tutti i dati di formData necessari
    router.push({
      pathname: `/degustazioni/${formData?.link}`, // Assicura che formData.deg sia il link corretto
      query: {
        formData: JSON.stringify({
          deg: formData.deg,
          date: formData.date,
          adultCount: formData.adultCount,
          language: formData.language,
          timeSlot: formData.timeSlot,
          gift: formData.gift,
          tagliere: formData.tagliere,
        }),
      },
    });
  };
  if (!formData) {
    return (
      <div className="relative flex items-center justify-center h-screen bg-pattern2">
        <div className="w-[90%] xl:w-[60%] mx-auto h-2/3 p-4 rounded shadow-lg ring ring-third/60 ">
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#4A4A49"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold xl:text-6xl">
              {translation.thank.title}
            </h1>
            <p className="text-main">{translation.thank.text}</p>
            <CtaPrimary
              link="/le-degustazioni"
              title="Torna alla Pagina Degustazione"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-xl font-medium">
                {" "}
                {translation.thank.cta}
              </span>
            </CtaPrimary>
          </div>
        </div>
      </div>
    );
  }

  // Function to check if both checkboxes are checked
  const canProceed = () => {
    return privacyChecked && termsChecked;
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (
      inputs.name &&
      inputs.surname &&
      inputs.email &&
      inputs.message &&
      inputs.phone &&
      inputs.city &&
      inputs.cap &&
      inputs.dob &&
      inputs.nation
    ) {
      try {
        const formattedDate = new Date(formData.date).toLocaleDateString(
          "it-IT",
          {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          }
        );

        const formDataMail = {
          ...inputs,
          gift: formData.gift,
          adultCount: formData.adultCount,
          language: formData.language,
          numeroMinori: numeroMinori,
          date: formattedDate,
          timeSlot: formData.timeSlot,
          deg: formData.deg,
          tipo: formData.tipo,
          totalNumber: formData.totalNumber,
          durata: formData.durata,
          formType: "prenotazione",
          tagliere: formData.tagliere,
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
            city: "",
            cap: "",
            dob: null,
            nation: "",
          });
          setCheckedGift(false);
          setClickedRadio(null);
          setAdultCount(1);
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

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>Prenotazione visita e degustazione Les Crêtes</title>
        <meta
          name="description"
          content="Prenota la tua visita presso le Cantine di Les Crêtes in Valle d'Aosta"
        />{" "}
        <meta
          property="og:title"
          content="Prenotazione visita e degustazione Les Crêtes"
        />
        <meta
          property="og:description"
          content="Prenota la tua visita presso le Cantine di Les Crêtes in Valle d'Aosta"
        />
      </Head>
      <div>
        <form
          onSubmit={(e) => onSubmitForm(e)}
          className="w-[90%] flex flex-col gap-6 mx-auto bg-white xl:my-6"
        >
          <div className="flex flex-col gap-6 py-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold lg:text-5xl text-main">
                {translation.riepilogo.title}
              </h1>
              <p className="font-bold lg:text-xl text-main">
                {translation.riepilogo.subTitle}
              </p>
            </div>

            <div className="p-8 bg-second">
              <ul className="grid grid-cols-1 gap-6 py-6 text-[18px] uppercase gap-x-10 lg:grid-cols-4 text-main">
                <li>
                  <span className="font-bold">{formData.deg}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    {" "}
                    <Icon
                      icon="ion:calendar-outline"
                      className="text-main/80"
                    />{" "}
                    {translation.riepilogo.data}
                  </span>
                  <span className="font-bold">
                    {new Date(formData?.date).toLocaleDateString()}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="fluent:people-team-16-regular"
                      className="text-main/80"
                    />{" "}
                    {translation.riepilogo.people}
                  </span>
                  <span className="font-bold"> {formData.adultCount}</span>{" "}
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="ion:language-outline"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.lingua}
                  </span>
                  <span className="font-bold">{formData.language}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="game-icons:wine-glass"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.tipo}
                  </span>{" "}
                  <span className="font-bold">{formData.tipo}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="mage:map-marker"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.luogo}
                  </span>{" "}
                  <span className="font-bold">Rifugio del Vino</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="lets-icons:time-light"
                      className="w-6 h-full text-main/80"
                    />
                    {translation.riepilogo.orario}
                  </span>
                  <span className="font-bold">{formData.timeSlot}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="ph:gift-thin"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.gift.name}
                  </span>
                  {formData?.gift ? (
                    <span className="font-bold">
                      {translation.riepilogo.gift.yes}
                    </span>
                  ) : (
                    <span className="font-bold">
                      {translation.riepilogo.gift.no}
                    </span>
                  )}
                </li>

                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="ph:gift-thin"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.tagliere.name}
                  </span>
                  {formData.tagliere ? (
                    <span className="font-bold">
                      {translation.riepilogo.tagliere.yes}
                    </span>
                  ) : (
                    <span className="font-bold">
                      {translation.riepilogo.tagliere.no}
                    </span>
                  )}
                </li>

                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="pepicons-pencil:rewind-time"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.durata}
                  </span>{" "}
                  <span className="font-bold">{formData.durata}</span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="fluent:cart-16-regular"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    {translation.riepilogo.totale}
                  </span>{" "}
                  <span className="font-bold">€{formData.totalNumber}</span>
                </li>
              </ul>

              <div className="flex">
                <button
                  onClick={handleModificaClick}
                  className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
                >
                  <Icon icon="ep:edit" className="w-4 h-full" />
                  {translation.riepilogo.edit}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold lg:text-5xl text-main">
              {translation.form.title}
            </h2>
            <p className="font-bold lg:text-xl text-main">
              {translation.form.subTitle}
            </p>
          </div>

          <div>
            <FormPrenotazione3
              inputs={inputs}
              setInputs={setInputs}
              data={translation.form}
            />
          </div>
          <div className="flex flex-col gap-2 py-6">
            <h2 className="text-xl font-bold">
              {translation.form.minori.title}
            </h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-xl font-bold text-main">
                <input
                  type="radio"
                  aria-describedby="helper-radio-text"
                  className="w-4 h-4 bg-transparent text-main border-main "
                  name="accompagnatiDaMinori"
                  value="false"
                  checked={accompagnatiDaMinori === false}
                  onChange={handleRadioChange}
                />{" "}
                {translation.form.minori.no}
              </label>
              <label className="flex items-center gap-2 text-xl font-bold text-main">
                <input
                  type="radio"
                  className="w-4 h-4 bg-white text-main border-main "
                  name="accompagnatiDaMinori"
                  value="true"
                  checked={accompagnatiDaMinori === true}
                  onChange={handleRadioChange}
                />{" "}
                {translation.form.minori.yes.accept}
              </label>
            </div>

            {/* Mostra ulteriori dettagli se l'utente ha selezionato "Sì" */}
            {accompagnatiDaMinori && (
              <div className="w-1/2 col-span-1 mt-4 ">
                <label className="flex flex-col gap-2 ">
                  <span className="font-bold text-main">
                    {translation.form.minori.yes.subTitle}
                  </span>
                  <input
                    type="number"
                    className="px-3 py-2 mt-1 bg-transparent border-b text-main"
                    value={numeroMinori}
                    onChange={handleNumeroMinoriChange}
                    min="0" // Valore minimo consentito
                    step="1" // Passo di incremento/decremento
                  />
                </label>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl">
              <span className="font-bold">{translation.form.note.title}</span>{" "}
              {translation.form.note.span}
            </h2>
            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="10"
              className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              placeholder={translation.form.note.text}
              required
            ></textarea>
          </div>
          <div>
            <h2 className="text-3xl font-bold lg:text-5xl text-main">
              {translation.form.termini.title}
            </h2>
          </div>
          <div className="max-h-[25rem] overflow-auto flex flex-col gap-2">
            {translation.form.termini.sections.map((section, index) => (
              <div key={index}>
                <p className="text-xl font-bold text-main">{section.title}</p>
                {section.content.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <ul key={itemIndex}>
                      <li
                        dir="ltr"
                        className="text-lg text-main"
                        dangerouslySetInnerHTML={{ __html: `- ${item}` }}
                      ></li>
                    </ul>
                  ) : (
                    item.subcontent && (
                      <ul key={itemIndex}>
                        {item.subcontent.map((subItem, subItemIndex) => (
                          <ul key={subItemIndex}>
                            <li
                              dir="ltr"
                              className="text-lg text-main"
                              dangerouslySetInnerHTML={{ __html: subItem }}
                            ></li>
                          </ul>
                        ))}
                      </ul>
                    )
                  )
                )}
              </div>
            ))}
          </div>
          {/* <div className="flex gap-4 mt-6 text-main">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              value="1"
            />
            <label for="newsletter">
              <span className="opacity-75">
                {translation.form.termini.newsletter.text}
              </span>
            </label>
          </div> */}
          <div className="flex items-center gap-4 text-main">
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
              htmlFor="tec"
              dangerouslySetInnerHTML={{
                __html: translation.form.termini.condition.text,
              }}
            ></label>
          </div>
          <div className="flex items-center gap-4 text-main">
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
              htmlFor="privacy"
              dangerouslySetInnerHTML={{
                __html: translation.form.termini.privacy.text,
              }}
            ></label>
          </div>
          <div>
            <button
              type="submit"
              className={`cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 ${
                canProceed()
                  ? "border-main"
                  : "border-gray-400 opacity-50 cursor-not-allowed"
              } ${canProceed() ? "" : "pointer-events-none"}`}
              disabled={!canProceed()}
            >
              {translation.form.sendCta} <Icon icon="ri:mail-send-line" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Prenotazione;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = prenotazioneIT;
      break;

    case "en":
      obj = prenotazioneEN;
      break;
    case "fr":
      obj = prenotazioneFR;
      break;
    case "de":
      obj = prenotazioneDE;
      break;
    case "jp":
      obj = prenotazioneJP;
      break;
    case "ko":
      obj = prenotazioneKO;
      break;
    case "ru":
      obj = prenotazioneRU;
      break;
    case "zh":
      obj = prenotazioneZH;
      break;
    default:
      obj = prenotazioneIT;
      break;
  }

  return {
    props: {
      translation: obj?.prenotazione,
    },
    revalidate: 60,
  };
}
