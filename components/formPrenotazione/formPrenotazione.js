import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import toast from "react-hot-toast";

const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ["it", "us", "gb", "fr", "de"].includes(iso2);
});

const FormPrenotazione = ({ deg, img }) => {
  const [phone, setPhone] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    deg: deg,
    img: img,
  });

  const [adultCount, setAdultCount] = useState(1);
  const [clickedRadio, setClickedRadio] = useState(null);

  function handleClickedRadioChange(radioValue) {
    setClickedRadio(radioValue);
  }
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const [form, setForm] = useState("");
  const [checkedGift, setCheckedGift] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
      inputs.name &&
      inputs.surname &&
      inputs.email &&
      inputs.message &&
      inputs.phone
    ) {
      try {
        const formData = {
          ...inputs,
          gift: checkedGift,
          adultCount: adultCount,
          language: clickedRadio,
        };
        console.log(formData);

        const res = await fetch(`/api/prenotazioni`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.status === 200) {
          setInputs({
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
          });
          setCheckedGift(false);
          setClickedRadio(null);
          setAdultCount(1);
          toast.success(
            `Hey ${inputs.name} your message was sent successfully`
          );
        }
      } catch (error) {
        toast.error(`Hey ${inputs.name} your message wasn't sent successfully`);
      }
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

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container max-h-screen mx-auto overflow-y-auto bg-white xl:my-6">
      <div className="py-5 ">
        <form onSubmit={(e) => onSubmitForm(e)}>
          <div className="grid grid-cols-2 gap-6 xl:gap-10">
            <input
              id="name"
              type="text"
              name="name"
              required
              value={inputs.name}
              onChange={handleChange}
              className="py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              placeholder="First Name"
            />
            <input
              id="surname"
              type="text"
              name="surname"
              required
              value={inputs.surname}
              onChange={handleChange}
              className="col-span-1 py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              placeholder="Last Name"
            />
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="col-span-1 py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              name="email"
              placeholder="example@email.com*"
              type="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
            <PhoneInput
              id="phone"
              name="phone"
              defaultCountry="it"
              value={inputs.phone}
              onChange={(phone) =>
                setInputs((prev) => ({
                  ...prev,
                  phone: phone,
                }))
              }
              countries={countries}
              className="!border-b  focus:outline-none focus:border-main bg-transparent !w-full col-span-1 text-main"
            />
            <div className="flex flex-col col-span-2 gap-2 xl:col-span-1">
              <label htmlFor="adulti" className="text-main">
                Adulti
              </label>
              <div className="flex items-center text-center">
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="p-2.5 bg-white border text-main border-main hover:bg-main hover:text-white"
                    onClick={decrementAdultCount}
                  >
                    <Icon icon="ic:twotone-minus" />
                  </button>
                </span>
                <input
                  type="number"
                  className="py-1.5 text-center bg-white border-t border-b text-main border-t-main border-b-main"
                  min="1"
                  readOnly
                  name="adulti"
                  id="adulti"
                  value={adultCount}
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="p-2.5 bg-white border text-main border-main hover:bg-main hover:text-white"
                    onClick={incrementAdultCount}
                  >
                    <Icon icon="ic:twotone-plus" />
                  </button>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-main">Lingua Visita</label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="ita"
                    value="ita"
                    name="language"
                    onChange={() => handleClickedRadioChange("ita")}
                    className="hidden"
                  />
                  <label
                    htmlFor="ita"
                    onClick={() => handleClickedRadioChange("ita")}
                    className={`flex items-center justify-center w-12 h-12 border-2 border-main rounded-full cursor-pointer ${
                      clickedRadio === "ita"
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {clickedRadio === "ita" && (
                      <Icon icon="material-symbols:check" className="w-6 h-6" />
                    )}
                    IT
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="en"
                    value="en"
                    name="language"
                    onChange={() => handleClickedRadioChange("en")}
                    className="hidden"
                  />
                  <label
                    htmlFor="en"
                    onClick={() => handleClickedRadioChange("en")}
                    className={`flex items-center justify-center w-12 h-12 border-2 border-main rounded-full cursor-pointer ${
                      clickedRadio === "en"
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {clickedRadio === "en" && (
                      <Icon icon="material-symbols:check" className="w-6 h-6" />
                    )}
                    EN
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="fr"
                    value="fr"
                    name="language"
                    checked={clickedRadio === "fr"}
                    onChange={() => handleClickedRadioChange("fr")}
                    className="hidden"
                  />
                  <label
                    htmlFor="fr"
                    onClick={() => handleClickedRadioChange("fr")}
                    className={`flex items-center justify-center w-12 h-12 border-2 border-main rounded-full cursor-pointer ${
                      clickedRadio === "fr"
                        ? "bg-main text-white"
                        : "bg-white text-main"
                    }`}
                  >
                    {clickedRadio === "fr" && (
                      <Icon icon="material-symbols:check" className="w-6 h-6" />
                    )}
                    FR
                  </label>
                </div>
              </div>
            </div>
            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="5"
              className="col-span-2 py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              placeholder="Write your message..."
              required
            ></textarea>
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                checked={checkedGift}
                onChange={() => setCheckedGift((prev) => !prev)}
                className="w-4 h-4 text-[#F4F3EF] bg-gray-100 !border-third rounded focus:ring-third focus:ring-2 "
              />
              <label
                htmlFor="link-checkbox"
                className="flex items-center gap-2 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
              >
                <div className="flex items-center">
                  <Icon
                    icon="mdi:present-outline"
                    className="w-5 h-5 text-main/95"
                  />
                  <span className="hidden text-xl text-main xl:block">*</span>
                </div>
              </label>
            </div>
          </div>
          <br className="hidden xl:block" />
          <p className="hidden text-sm text-main/80 xl:block">
            * Clicca se vuoi regalarlo
          </p>
          <div className="flex justify-end mt-6">
            <input
              type="submit"
              value="Prenota ora"
              className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPrenotazione;
