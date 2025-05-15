import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const FormPrenotazione = ({
  deg,
  link,
  price,
  durata,
  tipo,
  form,
  optPrice,
}) => {
  console.log(link);
  const [startDate, setStartDate] = useState();
  const [inputs, setInputs] = useState({
    deg: deg,
  });
  const [adultCount, setAdultCount] = useState(1);
  const [clickedRadio, setClickedRadio] = useState(null);
  const [timeSlot, setTimeSlot] = useState(null);
  const router = useRouter();
  const [checkedGift, setCheckedGift] = useState(false);
  const [includeTagliere, setIncludeTagliere] = useState(false); // Stato per il tagliere

  const startNumber = parseInt(price);
  const endNumber = parseInt(optPrice);
  const baseTotal = startNumber * adultCount;
  const totalNumber = includeTagliere
    ? (startNumber + endNumber) * adultCount
    : baseTotal;

  const availableTimeSlots = [
    "8:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
  ];

  const saturdayTimeSlots = [
    "8:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
  ];

  const summerSutardayTimeSlots = [
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
  ];
  const summerSundayTimeSlots = [
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
  ];

  const excludedDates = [
    new Date(2024, 11, 24), // 24 Dicembre
    new Date(2024, 11, 25), // 25 Dicembre
    new Date(2024, 11, 26), // 26 Dicembre
    new Date(2024, 11, 31), // 31 Dicembre
    new Date(2025, 0, 1), // 1 Gennaio
    new Date(2025, 0, 6), // 6 Gennaio
    new Date(2025, 3, 20), // 20 Aprile
    new Date(2025, 3, 21), // 21 Aprile
    new Date(2025, 4, 1), // 1 Maggio
  ];

  const getOpenSundays = (startYear, startMonth, endMonth) => {
    const openSundays = [];
    const date = new Date(startYear, startMonth, 1);

    while (date.getMonth() <= endMonth) {
      if (date.getDay() === 0) {
        openSundays.push(new Date(date));
      }
      date.setDate(date.getDate() + 1);
    }

    return openSundays;
  };

  const openSundays = getOpenSundays(2025, 6, 8);

  // Aggiungi manualmente il 2 giugno 2025
  openSundays.push(new Date(2025, 5, 2)); // Mese 5 = giugno

  const isDateSelectable = (date) => {
    // Disabilita le domeniche, a meno che non siano "openSundays"
    if (
      date.getDay() === 0 &&
      !openSundays.some(
        (openDate) =>
          date.getDate() === openDate.getDate() &&
          date.getMonth() === openDate.getMonth() &&
          date.getFullYear() === openDate.getFullYear()
      )
    ) {
      return false;
    }

    // Disabilita le date specifiche
    return !excludedDates.some(
      (excludedDate) =>
        date.getDate() === excludedDate.getDate() &&
        date.getMonth() === excludedDate.getMonth() &&
        date.getFullYear() === excludedDate.getFullYear()
    );
  };

  useEffect(() => {
    if (router.query.formData) {
      const formData = JSON.parse(router.query.formData);
      setInputs(formData);
      setStartDate(new Date(formData.date));
      setAdultCount(formData.adultCount);
      setClickedRadio(formData.language);
      setTimeSlot(formData.timeSlot);
      setCheckedGift(formData.gift);
      setIncludeTagliere(formData.tagliere); // Aggiungi questo campo
    }
  }, [router.query.formData]);

  const handleClickedRadioChange = (radioValue) => {
    setClickedRadio(radioValue);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (startDate && timeSlot && clickedRadio) {
      const formData = {
        ...inputs,
        gift: checkedGift,
        adultCount: adultCount,
        language: clickedRadio,
        date: startDate,
        timeSlot: timeSlot,
        totalNumber: totalNumber,
        link: link,
        durata: durata,
        tipo: tipo,
        tagliere: includeTagliere, // Aggiungi questo campo
      };

      // Reindirizza alla pagina di riepilogo con i dati del form
      router.push({
        pathname: "/prenotazione",
        query: { formData: JSON.stringify(formData) },
      });
    } else {
      toast.error("Per favore, compila tutti i campi richiesti.");
      console.log("errore", error);
    }
  };

  const incrementAdultCount = () => {
    setAdultCount((prev) => prev + 1);
  };

  const decrementAdultCount = () => {
    setAdultCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleTimeSlotChange = (timeSlot) => {
    setTimeSlot(timeSlot);
  };

  const handleDatePickerChange = (date) => {
    setStartDate(date);
    // Deseleziona la fascia oraria
    setTimeSlot(null);
  };

  const datePickerRef = useRef();

  const openDatePicker = () => {
    datePickerRef.current.setFocus();
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Set tomorrow's date

  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="mt-10">
        <form onSubmit={onSubmitForm}>
          <div className="grid grid-cols-2 gap-6 xl:gap-10">
            <div className="flex flex-col w-full col-span-2 gap-4">
              <label className="font-bold capitalize text-main">
                {form.day}
              </label>
              <div onClick={openDatePicker} className="cursor-pointer">
                <DatePicker
                  ref={datePickerRef}
                  showIcon
                  isClearable
                  selected={startDate}
                  dateFormat="dd/MM/yyyy"
                  onChange={handleDatePickerChange}
                  className="!outline-none"
                  minDate={tomorrow}
                  calendarClassName={startDate ? "hidden" : ""}
                  filterDate={isDateSelectable} // Usa la funzione aggiornata qui
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                      className={startDate ? "hidden" : ""}
                    >
                      <rect
                        width="416"
                        height="384"
                        x="48"
                        y="80"
                        fill="none"
                        stroke="#4a4a49"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        rx="48"
                      />
                      <circle cx="296" cy="232" r="24" fill="#4a4a49" />
                      <circle cx="376" cy="232" r="24" fill="#4a4a49" />
                      <circle cx="296" cy="312" r="24" fill="#4a4a49" />
                      <circle cx="376" cy="312" r="24" fill="#4a4a49" />
                      <circle cx="136" cy="312" r="24" fill="#4a4a49" />
                      <circle cx="216" cy="312" r="24" fill="#4a4a49" />
                      <circle cx="136" cy="392" r="24" fill="#4a4a49" />
                      <circle cx="216" cy="392" r="24" fill="#4a4a49" />
                      <circle cx="296" cy="392" r="24" fill="#4a4a49" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M128 48v32m256-32v32"
                      />
                      <path
                        fill="none"
                        stroke="#4a4a49"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M464 160H48"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
            {startDate && (
              <div className="flex flex-col col-span-2 gap-4">
                <label className="font-bold capitalize text-main">
                  {form.slots}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(() => {
                    const day = startDate.getDay(); // 0: domenica, 6: sabato
                    const month = startDate.getMonth(); // 0-based: 6=luglio, 7=agosto

                    const isSummer = month === 6 || month === 7;
                    const isSaturday = day === 6;
                    const isSunday = day === 0;

                    let slotsToRender = [];

                    if (isSummer && isSaturday) {
                      slotsToRender = summerSutardayTimeSlots;
                    } else if (isSummer && isSunday) {
                      slotsToRender = summerSundayTimeSlots;
                    } else if (isSaturday) {
                      slotsToRender = saturdayTimeSlots;
                    } else if (isSunday) {
                      // Domenica non estiva: niente slot
                      return null;
                    } else {
                      slotsToRender = availableTimeSlots;
                    }

                    const filteredSlots = slotsToRender.filter((slot) =>
                      link === "trewines"
                        ? true
                        : !slot.includes("06") && !slot.includes("05")
                    );

                    return filteredSlots.map((slot) => (
                      <div key={slot} className="flex items-center">
                        <input
                          type="radio"
                          id={slot}
                          value={slot}
                          name="timeSlot"
                          onChange={() => handleTimeSlotChange(slot)}
                          className="hidden"
                        />
                        <label
                          htmlFor={slot}
                          onClick={() => handleTimeSlotChange(slot)}
                          className={`flex items-center justify-center w-full p-2 border rounded cursor-pointer ${
                            timeSlot === slot
                              ? "bg-main text-white"
                              : "bg-white text-main"
                          }`}
                        >
                          {timeSlot === slot && (
                            <Icon
                              icon="material-symbols:check"
                              className="w-4 h-4"
                            />
                          )}
                          {slot}
                        </label>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            )}

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
          {optPrice && (
            <div className="flex items-center gap-2 py-4">
              <input
                type="checkbox"
                id="tagliere"
                checked={includeTagliere}
                onChange={() => setIncludeTagliere((prev) => !prev)}
                className="w-4 h-4 text-[#F4F3EF] bg-gray-100 !border-third rounded focus:ring-third focus:ring-2"
              />
              <label
                for="link-checkbox"
                className="flex items-center gap-2 text-sm font-bold text-main ms-2 dark:text-gray-300"
              >
                <span>
                  {form.opzioneTitle} (+{optPrice}€)
                </span>
              </label>
            </div>
          )}

          <div className="w-full h-[0.05rem] bg-main/50 my-6"></div>
          <div className="flex items-center justify-between gap-4 text-xl">
            <p className="font-bold capitalize text-main">{form.total}</p>
            <p className="font-bold text-main">€{totalNumber}</p>
          </div>
          <div className="flex justify-end mt-6">
            {/* <button
              type="submit"
              className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
            >
              Acquista <Icon icon="icons8:buy" className="w-6 h-full" />
            </button> */}
            {/* <button
              type="submit"
              className={`cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 ${
                timeSlot && clickedRadio
                  ? "border-main opacity-100"
                  : "border-gray-300 opacity-50 cursor-not-allowed"
              }`}
              disabled={!timeSlot || !clickedRadio}
            >
              {form.cta}
            </button> */}
            {timeSlot && clickedRadio && (
              <button
                type="submit"
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

export default FormPrenotazione;
