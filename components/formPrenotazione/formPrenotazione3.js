import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ["it", "us", "gb", "fr", "de"].includes(iso2);
});

const FormPrenotazione3 = ({ inputs, setInputs, data }) => {
  const [phone, setPhone] = useState("");
  const options = countryList().getData();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setInputs((prev) => ({
      ...prev,
      dob: date,
    }));
  };

  const handleNationChange = (selectedOption) => {
    setInputs((prev) => ({
      ...prev,
      nation: selectedOption ? selectedOption.label : "",
    }));
  };

  const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <Icon icon="ic:baseline-clear" />
      </components.ClearIndicator>
    );
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: "transparent",

      borderBottomColor: state.isFocused ? "#4A4A49" : "#4A4A49",
      boxShadow: state.isFocused ? `0 0 0 1px #4A4A49` : provided.boxShadow,
      "&:hover": {
        borderColor: state.isFocused ? "#4A4A49" : "#4A4A49",
      },
      color: state.isFocused ? "#FFFFFF" : "#4A4A49",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#4A4A49"
        : state.isFocused
        ? "#4A4A49"
        : provided.backgroundColor,
      color: state.isSelected || state.isFocused ? "#FFFFFF" : "#4A4A49",
      "&:hover": {
        backgroundColor: "#4A4A49",
        color: "#FFFFFF",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#4A4A49",
    }),
  };

  return (
    <div className="container mx-auto bg-white ">
      <div className="py-5 ">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-10">
          <input
            id="name"
            type="text"
            name="name"
            required
            value={inputs.name}
            onChange={handleChange}
            className="col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
            placeholder={data.nome}
          />
          <input
            id="surname"
            type="text"
            name="surname"
            required
            value={inputs.surname}
            onChange={handleChange}
            className="col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
            placeholder={data.cognome}
          />
          <div className="grid grid-cols-1 col-span-2 gap-6 lg:grid-cols-2">
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
              name="email"
              placeholder={data.email}
              type="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
            <DatePicker
              id="dob"
              showIcon={!inputs.dob}
              selected={inputs.dob}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              isClearable
              className="w-full !col-span-2 !px-0 py-2 bg-transparent lg:!col-span-1 text-main focus:outline-none"
              placeholderText={data.birth}
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              minDate={new Date(1900, 0, 1)}
              maxDate={new Date(2006, 11, 31)}
              required
              icon={
                !inputs.dob && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
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
                )
              }
            />
          </div>

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
            className="!border-b  focus:outline-none focus:border-main bg-transparent !w-full col-span-2 lg:col-span-1 text-main"
          />
          <input
            id="city"
            type="text"
            name="city"
            required
            value={inputs.city}
            onChange={handleChange}
            className="col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
            placeholder={data.city}
          />
          <input
            id="cap"
            type="text"
            name="cap"
            required
            value={inputs.cap}
            onChange={handleChange}
            className="col-span-2 py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
            placeholder={data.cap}
          />

          <Select
            options={options}
            value={options.find((option) => option.label === inputs.nation)}
            onChange={handleNationChange}
            components={{ ClearIndicator }}
            isClearable
            className="col-span-2 lg:col-span-1 !border-none"
            placeholder={data.nation}
            styles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default FormPrenotazione3;
