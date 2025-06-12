import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

const FormPrenotazione4 = ({
  deg,
  link,
  price,
  durata,
  tipo,
  form,
  optPrice,
  fixedDates,
  formType,
}) => {
  const [inputs, setInputs] = useState({ deg: deg });
  const [adultCount, setAdultCount] = useState(1);
  const [clickedRadio, setClickedRadio] = useState(null); // lingua
  const [selectedDate, setSelectedDate] = useState(null); // nuova data fissa scelta
  const [checkedGift, setCheckedGift] = useState(false);
  const [includeTagliere, setIncludeTagliere] = useState(false);

  const router = useRouter();

  const startNumber = parseInt(price);
  const endNumber = parseInt(optPrice);
  const baseTotal = startNumber * adultCount;
  const totalNumber = includeTagliere
    ? (startNumber + endNumber) * adultCount
    : baseTotal;

  useEffect(() => {
    if (router.query.formData) {
      const formData = JSON.parse(decodeURIComponent(router.query.formData));
      setInputs(formData);
      setAdultCount(formData.adultCount);
      setClickedRadio(formData.language);
      setCheckedGift(formData.gift);
      setIncludeTagliere(formData.tagliere);
      setSelectedDate(new Date(formData.date));
    }
  }, [router.query.formData]);
  const handleClickedRadioChange = (radioValue) => {
    setClickedRadio(radioValue);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (selectedDate && clickedRadio) {
      const formData = {
        ...inputs,
        gift: checkedGift,
        adultCount,
        language: clickedRadio,
        date: selectedDate,
        deg,
        totalNumber,
        link,
        durata,
        tipo,
        tagliere: includeTagliere,
      };

      router.push({
        pathname: "/prenotazione",
        query: { formData: JSON.stringify(formData) },
      });
    } else {
      toast.error("Per favore, compila tutti i campi richiesti.");
    }
  };

  const incrementAdultCount = () => setAdultCount((prev) => prev + 1);
  const decrementAdultCount = () =>
    setAdultCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="mt-10">
        <form onSubmit={onSubmitForm}>
          <input type="hidden" name="formType" value={formType} />

          {/* Selezione data fissa */}
          <div className="grid grid-cols-2 gap-6 xl:gap-10">
            {" "}
            <div className="flex flex-col w-full col-span-2 gap-4">
              <label className="block mb-2 font-bold text-main">
                {form.day}
              </label>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {fixedDates.map(({ label }) => {
                  let parsedDate;

                  try {
                    if (label.includes("ore")) {
                      // Italiano: "25 luglio 2025 - ore 18:00"
                      const [day, monthStr, yearTime] = label.split(" ");
                      const year = parseInt(yearTime);
                      const timePart = label.split("ore ")[1]; // "18:00"
                      const [hour, minute] = timePart.split(":").map(Number);

                      const monthsMap = {
                        gennaio: 0,
                        febbraio: 1,
                        marzo: 2,
                        aprile: 3,
                        maggio: 4,
                        giugno: 5,
                        luglio: 6,
                        agosto: 7,
                        settembre: 8,
                        ottobre: 9,
                        novembre: 10,
                        dicembre: 11,
                      };

                      const month = monthsMap[monthStr.toLowerCase()] ?? 0;
                      parsedDate = new Date(
                        year,
                        month,
                        parseInt(day),
                        hour,
                        minute
                      );
                    } else {
                      // Inglese: "July 10, 2025 - 6:00 PM"
                      const [datePart, timePart] = label.split(" - ");
                      const fullString = `${datePart} ${timePart}`;
                      parsedDate = new Date(fullString);
                    }

                    // Fallback check
                    if (isNaN(parsedDate.getTime())) {
                      throw new Error("Invalid date");
                    }
                  } catch (err) {
                    console.error("Errore parsing data:", label, err);
                    return null; // Skippa questo elemento
                  }

                  return (
                    <label
                      key={label}
                      className={`cursor-pointer px-4 py-2 border rounded ${
                        selectedDate?.getTime() === parsedDate.getTime()
                          ? "bg-main text-white"
                          : "bg-white text-main"
                      }`}
                    >
                      <input
                        type="radio"
                        name="fixedDate"
                        value={parsedDate.toISOString()}
                        checked={
                          selectedDate?.getTime() === parsedDate.getTime()
                        }
                        onChange={() => setSelectedDate(parsedDate)}
                        className="hidden"
                      />
                      {label}
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col col-span-2 gap-2 xl:col-span-1">
              <label for="adulti" className="font-bold capitalize text-main">
                {form.adults}
              </label>
              <div className="flex items-center h-full">
                <div className="flex items-center h-full">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full h-full p-2 bg-white border rounded-tl rounded-bl cursor-pointer text-main hover:bg-main hover:text-white"
                    onClick={decrementAdultCount}
                  >
                    <Icon icon="ic:twotone-minus" />
                  </button>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <input
                    type="number"
                    className="w-full h-full text-center bg-white border text-main"
                    min="1"
                    readOnly
                    name="adulti"
                    id="adulti"
                    value={adultCount}
                  />
                </div>
                <div className="flex items-center h-full">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full h-full p-2 bg-white border rounded-tr rounded-br cursor-pointer text-main hover:bg-main hover:text-white"
                    onClick={incrementAdultCount}
                  >
                    <Icon icon="ic:twotone-plus" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-2 gap-2 xl:col-span-1">
              <label className="font-bold capitalize text-main">
                {form.language}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="italiano"
                    value={`${form.langValue.ita}`}
                    name="language"
                    onChange={() =>
                      handleClickedRadioChange(`${form.langValue.ita}`)
                    }
                    className="hidden"
                  />
                  <label
                    for="italiano"
                    onClick={() =>
                      handleClickedRadioChange(`${form.langValue.ita}`)
                    }
                    className={`flex items-center justify-center w-full p-2 border rounded cursor-pointer ${
                      clickedRadio === `${form.langValue.ita}`
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {clickedRadio === `${form.langValue.ita}` && (
                      <Icon icon="material-symbols:check" className="w-4 h-4" />
                    )}
                    IT
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="inglese"
                    value={`${form.langValue.eng}`}
                    name="language"
                    onChange={() =>
                      handleClickedRadioChange(`${form.langValue.eng}`)
                    }
                    className="hidden"
                  />
                  <label
                    for="inglese"
                    onClick={() =>
                      handleClickedRadioChange(`${form.langValue.eng}`)
                    }
                    className={`flex items-center justify-center w-full p-2 border rounded cursor-pointer ${
                      clickedRadio === `${form.langValue.eng}`
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {clickedRadio === `${form.langValue.eng}` && (
                      <Icon icon="material-symbols:check" className="w-4 h-4" />
                    )}
                    EN
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="francese"
                    value={`${form.langValue.fr}`}
                    name="language"
                    onChange={() =>
                      handleClickedRadioChange(`${form.langValue.fr}`)
                    }
                    className="hidden"
                  />
                  <label
                    for="francese"
                    onClick={() =>
                      handleClickedRadioChange(`${form.langValue.fr}`)
                    }
                    className={`flex items-center justify-center w-full p-2 border rounded cursor-pointer ${
                      clickedRadio === `${form.langValue.fr}`
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {clickedRadio === `${form.langValue.fr}` && (
                      <Icon icon="material-symbols:check" className="w-4 h-4" />
                    )}
                    FR
                  </label>
                </div>
              </div>
            </div>
            <span className="text-lg text-main xl:block">{form.gift}</span>
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                checked={checkedGift}
                onChange={() => setCheckedGift((prev) => !prev)}
                className="w-4 h-4 text-[#F4F3EF] bg-gray-100 !border-third rounded focus:ring-third focus:ring-2"
              />
              <label
                for="link-checkbox"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
              >
                <div className="flex items-center">
                  <Icon
                    icon="mdi:present-outline"
                    className="w-5 h-5 text-main/95"
                  />
                </div>
              </label>
            </div>
          </div>

          {/* Totale */}
          <div className="w-full h-[0.05rem] bg-main/50 my-6"></div>
          <div className="flex items-center justify-between gap-4 text-xl">
            <p className="font-bold capitalize text-main">{form.total}</p>
            <p className="font-bold text-main">€{totalNumber}</p>
          </div>
          <div className="flex justify-end mt-6">
            {fixedDates && clickedRadio && (
              <button
                type="submit"
                aria-label="Prenota"
                className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
              >
                {form.cta}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPrenotazione4;
