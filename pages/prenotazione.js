import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Link from "next/link";
import Head from "next/head";
import { Icon } from "@iconify/react";
import FormPrenotazione3 from "@/components/formPrenotazione/formPrenotazione3";
import CtaPrimary from "@/components/Cta/CtaPrimary";
const Prenotazione = () => {
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

  const [showThankYou, setShowThankYou] = useState(false);

  const handleRadioChange = (e) => {
    setAccompagnatiDaMinori(e.target.value === "true");
  };

  const handleNumeroMinoriChange = (e) => {
    setNumeroMinori(parseInt(e.target.value, 10)); // Converte il valore in un numero intero
  };

  useEffect(() => {
    if (router.query.formData) {
      setFormData(JSON.parse(router.query.formData));
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
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold xl:text-6xl">Thank You !</h1>
            <p className="text-main">
              Grazie per la tua richiesta di prenotazione. Controlla tua email
              per il link di guida.
            </p>
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
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-xl font-medium">Torna indietro</span>
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
  const onSubmitForm = async () => {
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
        };

        console.log(JSON.stringify(formDataMail));

        const res = await fetch(`/api/prenotazioni`, {
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
        {/* <base href="https://lescretes/le-degustazioni.it" />
        <meta
          name="geo.placename"
          content="SR20, 50 11010 Aymavilles (AO) Valle d’Aosta, Italia"
        ></meta>
        <meta name="geo.region" content="IT-Valle d'Aosta" />
        <meta
          name="geo.position"
          content="45.70478630723863, 7.247584796948278"
        />
        <meta name="icbm" content="45.70478630723863, 7.247584796948278" /> */}
      </Head>
      <div>
        <form
          onSubmit={(e) => onSubmitForm(e)}
          className="w-[90%] flex flex-col gap-6 mx-auto bg-white xl:my-6"
        >
          <div className="flex flex-col gap-6 py-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold lg:text-5xl text-main">
                Riepilogo Richiesta Prenotazione
              </h1>
              <p className="font-bold lg:text-xl text-main">
                Controlla la tua scelta prima di confermare la prenotazione
              </p>
            </div>

            <div className="p-8 bg-second">
              <ul className="grid grid-cols-1 gap-6 py-6 text-xl lg:grid-cols-4 text-main">
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
                    Data:{" "}
                  </span>
                  <span className="font-bold">
                    {new Date(formData.date).toLocaleDateString()}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="fluent:people-team-16-regular"
                      className="text-main/80"
                    />{" "}
                    Partecipanti:
                  </span>
                  <span className="font-bold"> {formData.adultCount}</span>{" "}
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="ion:language-outline"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    Lingua:{" "}
                  </span>
                  <span className="font-bold">{formData.language}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="game-icons:wine-glass"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    Tipo:
                  </span>{" "}
                  <span className="font-bold">{formData.tipo}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="mage:map-marker"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    Luogo:
                  </span>{" "}
                  <span className="font-bold">Rifugio del Vino</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="lets-icons:time-light"
                      className="w-6 h-full text-main/80"
                    />
                    Orario:{" "}
                  </span>
                  <span className="font-bold">{formData.timeSlot}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="ph:gift-thin"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    Regalo:
                  </span>
                  {formData.gift ? (
                    <span className="font-bold">Sì</span>
                  ) : (
                    <span className="font-bold">No</span>
                  )}
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="pepicons-pencil:rewind-time"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    Durata:
                  </span>{" "}
                  <span className="font-bold">{formData.durata}</span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    <Icon
                      icon="fluent:cart-16-regular"
                      className="w-6 h-full text-main/80"
                    />{" "}
                    Totale:
                  </span>{" "}
                  <span className="font-bold">€{formData.totalNumber}</span>
                </li>
              </ul>

              <div className="flex">
                <button
                  onClick={handleModificaClick}
                  className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
                >
                  <Icon icon="ep:edit" className="w-4 h-full" /> Modifica
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold lg:text-5xl text-main">
              Inserisci i dati
            </h2>
            <p className="font-bold lg:text-xl text-main">
              Compila la scheda sottostante per confermare la tua richiesta di
              prenotazione
            </p>
          </div>

          <div>
            <FormPrenotazione3 inputs={inputs} setInputs={setInputs} />
          </div>
          <div className="flex flex-col gap-2 py-6">
            <h2 className="text-xl font-bold">
              Accompagnati da minori di 18 anni:
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
                No
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
                Sì
              </label>
            </div>

            {/* Mostra ulteriori dettagli se l'utente ha selezionato "Sì" */}
            {accompagnatiDaMinori && (
              <div className="w-1/2 col-span-1 mt-4 ">
                <label className="flex flex-col gap-2 ">
                  <span className="font-bold text-main">Numero di minori:</span>
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
              <span className="font-bold">Note</span> (segnalazioni,
              intolleranze alimentari ed altre comunicazioni)
            </h2>
            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="10"
              className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <div>
            <h2 className="text-3xl font-bold lg:text-5xl text-main">
              Termini e condizioni generali
            </h2>
          </div>
          <div className="max-h-[25rem] overflow-auto flex flex-col gap-2">
            <p className="text-xl font-bold text-main">
              Condizioni generali di prenotazione di una visita guidata:
            </p>
            <ul>
              <li dir="ltr" className="text-lg text-main">
                - Tutti i <span className="font-bold"> prezzi </span> si
                intendono
                <span className="font-bold"> IVA inclusa</span>; per gli
                acquisti online le somme versate in anticipo sono da
                considerarsi a titolo cauzionale.
              </li>
            </ul>
            <ul>
              <li dir="ltr" className="text-lg text-main">
                - La prenotazione è da considerarsi{" "}
                <span className="font-bold">confermata</span> solo dopo
                comunicazione <span className="font-bold">scritta</span>{" "}
                (tramite e-mail) da parte di Les Crêtes.
              </li>
            </ul>
            <ul>
              <li dir="ltr" className="text-lg text-main">
                - Si prega di{" "}
                <span className="font-bold">segnalare in anticipo</span>{" "}
                eventuali <span className="font-bold">allergie</span> ed{" "}
                <span className="font-bold">intolleranze</span>{" "}
                <span className="font-bold">alimentari</span>, o particolari
                esigenze. Se non segnalato in precedenza, si declina qualsiasi
                responsabilità.&nbsp;
              </li>
            </ul>
            <ul>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - Le degustazioni sono dedicate a persone di maggiore età, in
                  quanto non è consentito servire alcolici ai{" "}
                  <span className="font-bold">minori di 18 anni</span>.
                </p>
              </li>
            </ul>

            <p dir="ltr" className="text-xl font-bold text-main">
              Condizioni generali di modifica o cancellazione di prenotazione di
              una visita guidata:
            </p>
            <ul>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - Le <span className="font-bold">modifiche</span> devono
                  essere comunicate per{" "}
                  <span className="font-bold">iscritto</span> (tramite e-mail){" "}
                  <span className="font-bold">entro 2 giorni(feriali)</span>{" "}
                  dalla data della visita, fornendo{" "}
                  <span className="font-bold">nome </span>,{" "}
                  <span className="font-bold">cognome</span> e{" "}
                  <span className="font-bold">codice di prenotazione:</span>
                </p>
              </li>
            </ul>
            <ul>
              <ul>
                <li dir="ltr" className="text-lg text-main">
                  <p dir="ltr">
                    1 -{" "}
                    <span className="font-bold">in caso di diminuzione</span>{" "}
                    del numero dei prenotati e di{" "}
                    <span className="font-bold">modifica</span> del tipo di
                    degustazione, se comunicato entro il suddetto termine,
                    l’importo corrispondente verrà riaccreditato direttamente
                    sulla <span className="font-bold">carta di credito</span>{" "}
                    utilizzata, altrimenti Les Crêtes tratterrà l’importo
                    dovuto;
                  </p>
                </li>
              </ul>
            </ul>
            <ul>
              <ul>
                <li dir="ltr" className="text-lg text-main">
                  <p dir="ltr">
                    2 - <span className="font-bold">in caso di aumento</span>{" "}
                    del numero di prenotati e di{" "}
                    <span className="font-bold">modifica</span> del tipo di
                    degustazione, la prenotazione dev’essere confermata da Les
                    Crêtes.
                  </p>
                </li>
              </ul>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - Ogni{" "}
                  <span className="font-bold">
                    cancellazione di prenotazione
                  </span>{" "}
                  deve essere comunicata per{" "}
                  <span className="font-bold">iscritto</span> (tramite e-mail).
                </p>
              </li>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - La{" "}
                  <span className="font-bold">
                    cancellazione della prenotazione
                  </span>{" "}
                  deve pervenire{" "}
                  <span className="font-bold">entro 2 giorni</span> (feriali)
                  dalla data della visita, fornendo{" "}
                  <span className="font-bold">nome</span>,{" "}
                  <span className="font-bold">cognome</span> e{" "}
                  <span className="font-bold">codice di prenotazione</span>. Se
                  comunicato entro il suddetto termine, l’importo corrispondente
                  verrà riaccreditato direttamente sulla{" "}
                  <span className="font-bold">carta di credito</span>{" "}
                  utilizzata, altrimenti Les Crêtes tratterrà l’importo totale.
                </p>
              </li>
              <li dir="ltr" className="text-lg text-main">
                - Les Crêtes{" "}
                <span className="font-bold">
                  si riserva il diritto di modificare il luogo dell’evento
                </span>{" "}
                o di <span className="font-bold">cancellare l’evento</span>, in
                qualsiasi momento, per causa di forza maggiore e/o impossibilità
                (ivi inclusi i casi, a titolo esemplificativo e non esaustivo,
                di eventi meteorologici che rendano impossibile l’organizzazione
                dell’evento, impedimenti causati dall’emergenza Covid-19, ecc.).
                Ai partecipanti è assicurato il rimborso totale del ticket,
                tramite il medesimo mezzo di pagamento utilizzato ai fini
                dell’acquisto, sia che l’evento venga cancellato, sia che la
                modifica del luogo non permetta all'acquirente di prendere parte
                alla visita con degustazione.{" "}
              </li>
            </ul>
            <h3 dir="ltr" className="text-xl font-bold text-main">
              <span className="font-bold">
                Norme generali di comportamento per i visitatori:
              </span>
            </h3>
            <ul>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - I visitatori sono pregati di presentarsi{" "}
                  <span className="font-bold">20 minuti prima</span> dell’inizio
                  della visita, per effettuare il{" "}
                  <span className="font-bold">check-in</span>.&nbsp;
                </p>
              </li>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  -{" "}
                  <span className="font-bold">
                    L’orario della visita è prestabilito e non modificabile
                  </span>
                  , nel rispetto della prenotazione del resto del gruppo
                  partecipante.
                </p>
              </li>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - L'ingresso ai locali dello stabilimento è consentito solo se{" "}
                  <span className="font-bold">
                    accompagnati da personale autorizzato
                  </span>
                  .&nbsp;
                </p>
              </li>
              <li dir="ltr" className="text-lg text-main">
                <p dir="ltr">
                  - Tutti i visitatori sono pregati di
                  <span className="font-bold">
                    {" "}
                    seguire sempre le indicazioni
                  </span>{" "}
                  dei propri accompagnatori. In particolare è necessario:
                </p>
              </li>
              <ul>
                <li dir="ltr" className="text-lg text-main">
                  <p dir="ltr">
                    - Prestare la massima{" "}
                    <span className="font-bold">
                      attenzione ai mezzi in movimento
                    </span>{" "}
                    (es. carrelli elevatori);
                  </p>
                </li>
                <li dir="ltr" className="text-lg text-main">
                  <p dir="ltr">
                    - <span className="font-bold">In caso di emergenza</span>{" "}
                    (incendio, calamità naturale) mantenere la calma, non
                    allontanarsi dall'accompagnatore, seguire le indicazioni
                    fornite dalla guida ed utilizzare le vie di fuga indicate
                    dall'apposita segnaletica.
                  </p>
                </li>
              </ul>
              <li dir="ltr" className="text-lg text-main">
                - <span className="font-bold">Animali domestici</span>: gli
                amici a quattro zampe di piccola taglia sono i benvenuti, se
                all’interno dell’apposito trasportino, per ulteriori
                informazioni vi preghiamo di contattarci.
              </li>
            </ul>
          </div>
          <div className="flex gap-4 mt-6 text-main">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              value="1"
            />
            <label for="newsletter">
              <span className="opacity-75">
                Acconsento al trattamento dei miei dati personali per finalità
                di marketing e profilazione da parte di Les Crêtes.
              </span>
            </label>
          </div>
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
            <label htmlFor="tec">
              <span className="opacity-75">
                * Dichiaro di aver letto e compreso i{" "}
              </span>{" "}
              <Link target="_blank" href="/termini-e-condizioni-generali">
                <strong>Termini e le condizioni generali</strong>
              </Link>
            </label>
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
            <label htmlFor="privacy">
              <span className="opacity-75">
                * Dichiaro di aver letto e compreso la{" "}
              </span>{" "}
              <strong>
                <Link target="_blank" href="/privacy">
                  Politica sulla privacy
                </Link>{" "}
              </strong>{" "}
              e sui{" "}
              <strong>
                <Link target="_blank" href="/informativa-cookie">
                  cookies
                </Link>{" "}
              </strong>
            </label>
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
              Invia richiesta <Icon icon="ri:mail-send-line" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Prenotazione;
