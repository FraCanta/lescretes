"use client";

import React, { useState } from "react";
const Sections7 = () => {
  const [isEditing, setIsEditing] = useState(false);
  // Stato per gestire il valore dell'input
  const [inputValue, setInputValue] = useState("");

  // Funzione per gestire il click sul bottone
  const handleButtonClick = () => {
    // Cambia lo stato per indicare che stiamo modificando l'input
    setIsEditing(true);
  };

  // Funzione per gestire l'invio del modulo
  const handleFormSubmit = (e) => {
    // Impedisce il comportamento predefinito del modulo
    e.preventDefault();
    // Puoi fare qualcosa con il valore di inputValue qui, ad esempio inviarlo al server
    // console.log("Valore inviato:", inputValue);
    // Ripristina lo stato
    setIsEditing(false);
    setInputValue("");
  };
  return (
    <>
      <div className="w-[90%] mx-auto min-h-[80vh] h-full relative flex flex-col justify-center items-center py-[48px] 2xl:py-0 gap-6 ">
        <h3 className="text-[25px] 2xl:text-[40px] text-main font-black">
          Non perderti le novità e le curiosità! Iscriviti alla newsletter
        </h3>
        <p className="text-[16px] lg:text-[20px] text-main font-medium w-full 2xl:w-[60%] mb-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at
          ac tempus enim.
        </p>

        {/* Mostra il bottone se non stiamo modificando l'input */}
        {!isEditing && (
          <button
            onClick={handleButtonClick}
            className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 xl:text-[1rem] 2xl:text-[1.2rem]  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow  text-white hover:transition-all  bg-[#4A4A49] max-w-max max-h-max"
          >
            Iscriviti
          </button>
        )}
        {/* Mostra il modulo di input se stiamo modificando l'input */}
        {isEditing && (
          <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="name@email.it"
                aria-label="Full name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 xl:text-[1rem] 2xl:text-[1.2rem]  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow  text-white hover:transition-all  bg-[#4A4A49] max-w-max max-h-max"
              >
                Invia
              </button>
            </div>
          </form>
        )}
      </div>
      {/* <div className="w-full h-[350px] 2xl:h-[400px] relative z-[999]">
          <Image
            src={News}
            alt=""
            fill
            className="object-cover rounded-[30px]"
          />
        </div> */}
    </>
  );
};

export default Sections7;
