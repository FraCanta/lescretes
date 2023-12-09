import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ["it", "us", "gb", "fr", "de"].includes(iso2);
});

const FormPrenotazione = ({ deg }) => {
  const [phone, setPhone] = useState("");
  const [inputs, setInputs] = useState({
    // state per le inputs normali
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    deg: deg,
  });
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
      console.log("siamo dentro");
      setForm({ state: "loading" });
      try {
        const formData = {
          ...inputs,
          gift: checkedGift,
        };
        console.log(formData);

        const res = await fetch(`/api/prenotazioni`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "Fatto",
          message:
            "Il tuo messaggio è stato inviato. Grazie per averci contattato!",
        });
        setInputs({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: "",
        });
        setCheckedGift(false);
      } catch (error) {
        setForm({
          state: "Errore",
          message: "Qualcosa è andato storto",
        });
      }
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto xl:my-6  bg-white">
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
              className="border-b  py-2 focus:outline-none focus:border-main bg-transparent col-span-2 xl:col-span-1"
              placeholder="First Name"
            />
            <input
              id="surname"
              type="text"
              name="surname"
              value={inputs.surname}
              onChange={handleChange}
              className="border-b  py-2 focus:outline-none focus:border-main bg-transparent col-span-2 xl:col-span-1"
              placeholder="Last Name"
            />
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="border-b  py-2 focus:outline-none focus:border-main bg-transparent col-span-2 xl:col-span-1"
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
              className="!border-b  focus:outline-none focus:border-main bg-transparent !w-full col-span-2 xl:col-span-1"
            />
            <select
              id="underline_select"
              className="block py-2.5 px-2.5 w-full text-md text-main bg-second border-0 border-b-2 rounded-lg border-main/20 appearance-none font-bold  focus:outline-none focus:ring-0 focus:border-main/30 peer col-span-2"
            >
              <option>{deg}</option>
            </select>
            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="5"
              className="border-b py-2 focus:outline-none focus:border-main bg-transparent col-span-2"
              placeholder="Write your message..."
              required
            ></textarea>

            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                checked={checkedGift}
                onChange={() => setCheckedGift((prev) => !prev)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-2"
              >
                <Icon
                  icon="basil:present-solid"
                  className="text-main/95 w-6 h-6"
                />
                <span className="text-main/50 text-md">
                  Voglio fare un regalo
                </span>
              </label>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main font-bold w-full max-w-max text-center  lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPrenotazione;
