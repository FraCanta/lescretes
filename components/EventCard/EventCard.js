import React from "react";
import { format, isBefore } from "date-fns";
import { it, enUS, fr, de, ko, ja, ru, zhCN } from "date-fns/locale";
import { useRouter } from "next/router";
import CtaOutlineBrown from "../Cta/CtaOutlineBrown";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";

// Mappa i codici delle lingue alle locale di date-fns
const localeMap = {
  it: it,
  en: enUS,
  fr: fr,
  de: de,
  ko: ko,
  jp: ja, // Next.js usa "jp", ma date-fns usa "ja"
  ja: ja, // alias nel caso servisse
  ru: ru,
  zh: zhCN,
};

function EventCard({ date, title, description, image, labels }) {
  const { locale } = useRouter();
  const eventDate = new Date(date);
  const today = new Date();
  const isPast = isBefore(eventDate, today);

  // Se la lingua non è mappata, fallback a 'enUS'
  const currentLocale = localeMap[locale] || it;

  return (
    <div className="flex flex-col mb-6 overflow-hidden bg-white border shadow-md rounded-xs md:flex-row border-main/10">
      <div className="flex">
        {/* Colonna data */}
        <div className="relative flex flex-col items-center justify-center flex-shrink-0 w-16 gap-1 px-4 py-10 text-white lg:py-6 bg-main ">
          <p className="text-xl font-bold leading-none">
            {format(eventDate, "dd", { locale: currentLocale })}
          </p>
          <p className="text-sm tracking-wide uppercase">
            {format(eventDate, "MMM", { locale: currentLocale })}
          </p>
          <div className="absolute bottom-0 right-0 w-full h-[65%] ">
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
          <div className="object-cover w-full h-52 md:w-52 ">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Contenuto */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="mb-2 text-2xl font-bold text-main">{title}</h3>
          <p className="mb-6 text-main">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold text-main">
            <span
              className={`w-3 h-3 rounded-full ${
                isPast ? "bg-[red]" : "bg-[green]"
              }`}
            />
            {isPast ? labels.closed : labels.active}
          </span>

          {!isPast ? (
            <CtaOutlineBrown
              link={`mailto:rifugiodelvino@lescretes.it?subject=Informazioni su ${title}`}
            >
              {labels.cta}
            </CtaOutlineBrown>
          ) : (
            <button
              disabled
              className="inline-block px-4 py-2 font-semibold text-gray-500 bg-gray-300 rounded cursor-not-allowed"
            >
              {labels.closedBooking}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
