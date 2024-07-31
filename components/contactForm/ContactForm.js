import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";
import Link from "next/link";
import toast from "react-hot-toast";

const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ["it", "us", "gb", "fr", "de"].includes(iso2);
});

const ContactForm = ({ translation, inputs, setInputs }) => {
  const [phone, setPhone] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const options = countryList().getData();

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
      inputs.email &&
      inputs.message &&
      inputs.phone &&
      inputs.reason &&
      inputs.nation
    ) {
      try {
        const formDataMail = {
          ...inputs,
        };

        const res = await fetch(`/api/contatti`, {
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
            reason: "",
            nation: "",
          });
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
      toast.error("Please fill in all required fields");
    }
  };

  const handleNationChange = (selectedOption) => {
    setInputs((prev) => ({
      ...prev,
      nation: selectedOption ? selectedOption.label : "",
    }));
  };

  const handleReasonChange = (selectedOption) => {
    setInputs((prev) => ({
      ...prev,
      reason: selectedOption ? selectedOption.value : "",
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
    singleValue: (provided) => ({
      ...provided,
      color: "#4A4A49",
    }),
  };

  return (
    <form className="container mx-auto bg-white" onSubmit={onSubmitForm}>
      <div>
        <div className="grid grid-cols-2 gap-6 xl:gap-8">
          <div className="flex flex-col col-span-2 gap-2 lg:col-span-1">
            <label className="font-bold text-main">{translation.name}</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={inputs.name}
              onChange={handleChange}
              className="py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
              placeholder=""
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2 lg:col-span-1">
            <label className="font-bold text-main">{translation.surname}</label>
            <input
              id="surname"
              type="text"
              name="surname"
              required
              value={inputs.surname}
              onChange={handleChange}
              className="py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
              placeholder=""
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2 lg:col-span-1">
            <label className="font-bold text-main">Email*</label>
            <input
              id="email"
              data-invalid="false"
              data-filled="false"
              className="py-2 bg-transparent border-b lg:col-span-1 focus:outline-none focus:border-main text-main"
              name="email"
              placeholder="example@email.com"
              type="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2 lg:col-span-1">
            <label className="font-bold text-main">{translation.numero}</label>
            <PhoneInput
              id="phone"
              name="phone"
              defaultCountry="it"
              value={inputs.phone}
              required
              onChange={(phone) =>
                setInputs((prev) => ({
                  ...prev,
                  phone: phone,
                }))
              }
              countries={countries}
              className="!border-b focus:outline-none focus:border-main bg-transparent !w-full col-span-2 lg:col-span-1  text-main"
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2 lg:col-span-1">
            <label className="font-bold text-main">
              {translation.reason.reasonTitle}
            </label>
            <Select
              options={translation.reason.reasonList.map((option) => ({
                value: option.value,
                label: option.name,
              }))}
              value={translation.reason.reasonList.find(
                (option) => option.value === inputs.reason
              )}
              onChange={handleReasonChange}
              components={{ ClearIndicator }}
              isClearable
              className="!border-none"
              placeholder=""
              styles={customStyles}
              required
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2 lg:col-span-1">
            <label className="font-bold text-main">{translation.nation}</label>

            <Select
              options={options}
              value={options.find((option) => option.label === inputs.nation)}
              onChange={handleNationChange}
              components={{ ClearIndicator }}
              isClearable
              className="!border-none"
              placeholder=""
              styles={customStyles}
              required
            />
          </div>
          <div className="flex flex-col col-span-2 gap-2">
            <label className="font-bold text-main">
              {translation.messaggio.name}
            </label>
            <textarea
              id="message"
              onChange={handleChange}
              value={inputs.message}
              cols="10"
              rows="5"
              className="w-full py-2 bg-transparent border-b focus:outline-none focus:border-main text-main"
              placeholder={translation.messaggio.placeholder}
              required
            ></textarea>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6 text-main">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            value="SI"
            required
            onChange={() => setPrivacyChecked(!privacyChecked)}
            checked={privacyChecked}
          />
          <label htmlFor="privacy">
            <span
              dangerouslySetInnerHTML={{
                __html: translation.check,
              }}
            ></span>{" "}
          </label>
        </div>

        <div className="flex mt-6">
          <button
            type="submit"
            className="cursor-pointer flex items-center text-lg xl:text-xl gap-2 text-main w-full max-w-max text-center lg:text-[21.57px] font-bold leading-snug py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 2xl:text-[1.2rem] fxl:text-2xl 3xl:text-3xl rounded-[32px] border-2 "
          >
            {translation.submit} <Icon icon="ri:mail-send-line" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
