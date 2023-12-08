import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
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
    message: "",
    phone: "",
  });
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
      inputs.name &&
      inputs.surname &&
      inputs.message &&
      inputs.email &&
      inputs.phone
    ) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/prenotazioni`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
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
          email: "",
          message: "",
          surname: "",
          phone: "",
        });
      } catch (error) {
        setForm({
          state: "Errore ",
          message: "Qualcosa è andato storto",
        });
      }
    }
  };

  return (
    <div className="container mx-auto xl:my-20  bg-white">
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
              placeholder="Email"
              type="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />

            <PhoneInput
              defaultCountry="it"
              value={inputs.phone}
              onChange={(phone) => setPhone(phone)}
              countries={countries}
              className="!border-b  focus:outline-none focus:border-main bg-transparent !w-full col-span-2 xl:col-span-1"
            />

            {/* <select
              id="underline_select"
              className="block py-2.5 px-2.5 w-full text-md text-main bg-second border-0 border-b-2 rounded-lg border-main/20 appearance-none font-bold  focus:outline-none focus:ring-0 focus:border-main/30 peer col-span-2"
            >
              <option defaultValue>{deg}</option>
            </select> */}
            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="5"
              required
              className="border-b py-2 focus:outline-none focus:border-main bg-transparent col-span-2"
              placeholder="Write your message..."
            ></textarea>

            {/* <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
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
            </div> */}
          </div>
          <div className="mt-10 flex justify-end">
            <input
              type="submit"
              className="bg-main p-3 mt-4 text-white border border-main rounded-xl hover:scale-105"
            />
            {form.state === "loading" ? (
              <div>Invio in corso....</div>
            ) : form.state === "error" ? (
              <div>{form.message}</div>
            ) : (
              form.state === "success" && (
                <div>Inviato correttamente, grazie per averci contattato.</div>
              )
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPrenotazione;
