import { Icon } from "@iconify/react";
import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          {" "}
          <span className="uppercase text-sm text-main font-bold">Nome</span>
          <input
            className="w-full bg-second text-main mt-2 p-3 rounded-md focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div>
          <span className="uppercase text-sm text-main font-bold">Cognome</span>
          <input
            className="w-full bg-second text-main mt-2 p-3 rounded-md focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          {" "}
          <span className="uppercase text-sm text-main font-bold">Email</span>
          <input
            className="w-full bg-second text-main mt-2 p-3 rounded-md focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div>
          {" "}
          <span className="uppercase text-sm text-main font-bold">
            Telefono
          </span>
          <input
            className="w-full bg-second text-main mt-2 p-3 rounded-md focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
      </div>
      <div className="mt-8">
        <span className="uppercase text-sm text-main font-bold">Message</span>
        <textarea className="w-full h-32 bg-second text-main mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div className="mt-8">
        <button className="flex items-center justify-center gap-2 capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 xl:text-[1rem] 2xl:text-[1.2rem]  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow  text-white hover:transition-all  bg-[#4A4A49]">
          Send Message <Icon icon="gg:arrow-right-o" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
