import React from "react";
import { format, isBefore } from "date-fns";
import { it, enUS, fr, de, ko, ja, ru, zhCN } from "date-fns/locale";
import { useRouter } from "next/router";
import CtaOutlineBrown from "../Cta/CtaOutlineBrown";
import Image from "next/image";
import Pattern from "@/public/assets/pattern3.png";
import { Icon } from "@iconify/react";
import Link from "next/link";

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

function EventCard({
  date,
  title,
  description,
  image,
  labels,
  wine,
  fork,
  tempo,
  price,
  priceTitle,
  link,
}) {
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
          <div className="flex flex-col gap-2 mb-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Titolo + Icone */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
              <div className="flex flex-wrap items-center gap-2 lg:gap-6">
                <h3 className="text-xl font-bold uppercase text-main">
                  {title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {wine && (
                      <Icon
                        icon="game-icons:wine-glass"
                        className="w-6 h-6 text-main/80"
                      />
                    )}
                    {fork && (
                      <Icon
                        icon="circum:fork-knife"
                        className="w-6 h-6 text-main/80"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon
                      icon="lets-icons:time-light"
                      className="w-6 h-6 text-main/80"
                    />
                    <span className="text-main/80">{tempo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stato (span) */}
            <div className="flex items-center gap-2 text-sm font-semibold text-main">
              <span
                className={`w-3 h-3 rounded-full ${
                  isPast ? "bg-[red]" : "bg-[green]"
                }`}
              />
              {isPast ? labels.closed : labels.active}
            </div>
          </div>

          <p className="mb-6 text-base text-main">{description}</p>
        </div>

        <div className="flex flex-col justify-between gap-4 lg:items-center lg:flex-row">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold ">{priceTitle}</h3>
            <p className="text-lg text-main/80">{price}</p>
          </div>
          {!isPast ? (
            link ? (
              <Link
                href={link}
                title={labels.cta}
                className="uppercase justify-between font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-base fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow text-main bg-white flex items-center gap-2"
              >
                {labels.cta}
                <Icon icon="teenyicons:arrow-right-solid" />
              </Link>
            ) : (
              <span
                className="uppercase justify-between font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-base fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow text-main/40 bg-white flex items-center gap-2 cursor-not-allowed"
                title="Link non ancora disponibile"
              >
                {labels.cta}
                <Icon
                  icon="teenyicons:arrow-right-solid"
                  className="opacity-40"
                />
              </span>
            )
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
