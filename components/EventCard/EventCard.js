// components/EventoCard.jsx
import React from "react";
import { format, isBefore } from "date-fns";
import { it } from "date-fns/locale";
import CtaOutlineBrown from "../Cta/CtaOutlineBrown";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";

function EventCard({ date, title, description, image }) {
  const eventDate = new Date(date);
  const today = new Date();
  const isPast = isBefore(eventDate, today);

  return (
    <div className="flex flex-col mb-6 overflow-hidden bg-white border shadow-md rounded-xs md:flex-row border-main/10">
      {/* Colonna data */}
      <div className="relative flex items-center justify-center flex-shrink-0 gap-1 px-4 py-10 text-white lg:py-6 bg-main md:flex-col md:w-20 ">
        <p className="text-xl font-bold leading-none">
          {format(eventDate, "dd", { locale: it })}
        </p>
        <p className="text-sm tracking-wide uppercase">
          {format(eventDate, "MMM", { locale: it })}
        </p>
        <div className="absolute lg:bottom-0 right-0 w-full h-[80%] lg:h-[65%] ">
          <Image
            src={Pattern}
            fill
            className="object-cover opacity-10 mix-blend-luminosity"
            alt="pattern"
          />
        </div>
      </div>

      {/* Immagine (se presente) */}
      {image && (
        <div className="object-cover w-full h-52 md:w-48 md:h-auto">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
      )}

      {/* Contenuto */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="mb-2 text-2xl font-bold text-main">{title}</h3>
          {/* <p className="mb-2 text-sm italic text-main/60">
            {format(eventDate, "EEEE d MMMM yyyy", { locale: it })}
          </p> */}
          <p className="mb-6 text-main">{description}</p>
        </div>

        {/* Stato e pulsante */}
        <div className="flex items-center justify-between">
          <span
            className={`flex items-center gap-2 text-sm font-semibold ${
              isPast ? "text-main" : "text-main"
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full ${
                isPast ? "bg-[red]" : "bg-[green]"
              }`}
            ></span>
            {isPast ? "Chiuso" : "Attivo"}
          </span>

          {!isPast ? (
            <CtaOutlineBrown
              link={`mailto:rifugiodelvino@lescretes.it?subject=Informazioni su ${title}`}
            >
              Richiedi dettagli
            </CtaOutlineBrown>
          ) : (
            <button
              disabled
              className="inline-block px-4 py-2 font-semibold text-gray-500 bg-gray-300 rounded cursor-not-allowed"
            >
              Prenotazioni chiuse
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
