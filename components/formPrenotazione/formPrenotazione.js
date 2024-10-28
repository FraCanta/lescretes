import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const FormPrenotazione = ({ deg, link, price, durata, tipo, form }) => {
  const [startDate, setStartDate] = useState();
  const [inputs, setInputs] = useState({
    deg: deg,
  });
  const [adultCount, setAdultCount] = useState(1);
  const [clickedRadio, setClickedRadio] = useState(null);
  const [timeSlot, setTimeSlot] = useState(null);
  const router = useRouter();
  const [checkedGift, setCheckedGift] = useState(false);

  const startNumber = parseInt(price);
  const totalNumber = startNumber * adultCount;
  const availableTimeSlots = [
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",

    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ];

  const saturdayTimeSlots = [
    "9:30 AM",
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
  ];

  useEffect(() => {
    if (router.query.formData) {
      const formData = JSON.parse(router.query.formData);
      setInputs(formData);
      setStartDate(new Date(formData.date));
      setAdultCount(formData.adultCount);
      setClickedRadio(formData.language);
      setTimeSlot(formData.timeSlot);
      setCheckedGift(formData.gift);
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

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
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
                  {startDate.getDay() === 6 // Sabato
                    ? saturdayTimeSlots.map((slot) => (
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
                            for={slot}
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
                      ))
                    : availableTimeSlots.map((slot) => (
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
                            for={slot}
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
                      ))}
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
            <button
              type="submit"
              className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
            >
              {form.cta}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPrenotazione;
