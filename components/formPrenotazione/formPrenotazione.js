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
const FormPrenotazione = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="container mx-auto xl:my-20  bg-white">
      <div className="py-5 ">
        <form>
          <div className="grid grid-cols-2 gap-6 xl:gap-10">
            <input
              type="text"
              className="border-b  py-2 focus:outline-none focus:border-main bg-transparent col-span-2 xl:col-span-1"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border-b  py-2 focus:outline-none focus:border-main bg-transparent col-span-2 xl:col-span-1"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="border-b  py-2 focus:outline-none focus:border-main bg-transparent col-span-2 xl:col-span-1"
              placeholder="Email"
            />
            {/* <input
              type="tel"
              className="border-b px-4 py-2 focus:outline-none focus:border-main bg-transparent col-span-2"
              placeholder="Phone"
            /> */}
            <PhoneInput
              defaultCountry="it"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              countries={countries}
              className="!border-b  focus:outline-none focus:border-main bg-transparent !w-full col-span-2 xl:col-span-1"
            />
            <textarea
              cols="10"
              rows="5"
              className="border-b py-2 focus:outline-none focus:border-main bg-transparent col-span-2"
              placeholder="Write your message..."
            ></textarea>

            <div class="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-2"
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
          <div className="mt-10 flex justify-end">
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
