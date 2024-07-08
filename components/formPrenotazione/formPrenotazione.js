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

        // const { error } = await res.json();

        // if (error) {
        //   setForm({
        //     state: "error",
        //     message: error,
        //   });
        //   return;
        // }

        // setForm({
        //   state: "Fatto",
        //   message:
        //     "Il tuo messaggio è stato inviato. Grazie per averci contattato!",
        // });

        if (res.status === 200) {
          setInputs({
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
          });
          setCheckedGift(false);
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

  return (
    <div className="container mx-auto bg-white xl:my-6">
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
              className="col-span-2 py-2 bg-transparent border-b focus:outline-none focus:border-main xl:col-span-1"
              placeholder="First Name"
            />
            <input
              id="surname"
              type="text"
              name="surname"
              value={inputs.surname}
              onChange={handleChange}
              className="col-span-2 py-2 bg-transparent border-b focus:outline-none focus:border-main xl:col-span-1"
              placeholder="Last Name"
            />
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="col-span-2 py-2 bg-transparent border-b focus:outline-none focus:border-main xl:col-span-1"
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

            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="5"
              className="col-span-2 py-2 bg-transparent border-b focus:outline-none focus:border-main"
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
                <Icon
                  icon="basil:present-solid"
                  className="w-6 h-6 text-main/95"
                />
                <span className="text-main/50 text-md">
                  Voglio fare un regalo
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <input
              type="submit"
              value="Send Message"
              className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main  w-full max-w-max text-center  lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 border-main"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPrenotazione;
