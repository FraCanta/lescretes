import Image from "next/image";
import React from "react";
import Tre from "@/public/assets/degustazioni/tre.jpeg";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CtaPrimary from "../Cta/CtaPrimary";

const Cards2 = ({
  img,
  title,
  descrizione,
  price,
  priceTitle,
  link,
  details,
  button,
  name,
  bed,
  wine,
  fork,
  tempo,
  alt,
  ctaTitle,
}) => {
  return (
    <>
      {link ? (
        <div className="h-full !grid grid-cols-1 lg:!grid-cols-2 !p-4  !gap-6 transition-all duration-500 ease-out bg-white  shadow-lg shadow-main/10 card hover:shadow-xl !rounded-sm">
          <figure>
            <Image
              src={img}
              alt={alt}
              className="object-cover w-full lg:h-[350px] rounded-t-sm"
              width={500}
              height={800}
            />
          </figure>
          <div className="card-body !p-0 !py-4 !gap-y-4 !justify-between !h-full">
            <div className="flex flex-col justify-evenly gap-y-4">
              <h2 className="text-xl font-bold uppercase card-title lg:text-2xl fxl:text-3xl">
                {title}
              </h2>
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
                  {bed && (
                    <Icon
                      icon="hugeicons:wellness"
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
              <div className="flex flex-col gap-4">
                <p className="text-lg whitespace-normal fxl:text-xl text-main/80">
                  {descrizione}
                </p>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold ">{priceTitle}</h3>
                  <p className="text-lg text-main/80">{price}</p>
                </div>
              </div>
            </div>

            {/* <div className="items-center justify-between mt-2 border-t border-t-main/30 card-actions">
                <p className="py-4 font-bold text-[16px]">{price}</p>
                <Icon icon="teenyicons:arrow-right-solid" />
              </div> */}

            <Link
              href={link}
              title={title}
              className="uppercase justify-between font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-base  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow text-main   hover:bg-white hover:transition-all bg-second flex items-center gap-2"
            >
              {ctaTitle} <Icon icon="teenyicons:arrow-right-solid" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full h-full transition-all duration-500 ease-out bg-white shadow-lg shadow-main/10 card hover:shadow-xl !rounded-sm">
          <figure>
            <Image
              src={img}
              alt={`${name} cosmesi img`}
              className="rounded-t-sm h-[45vh] object-cover"
              width={500}
              height={600}
            />
          </figure>
          <Link href={button} className="flex flex-col !px-4 !p-0 !py-4 gap-2">
            <div>
              <h2 className="!justify-center font-bold text-[22px] fxl:text-3xl">
                {name}
              </h2>
              <p className="text-main/60 font-[500] text-[16px]">{details}</p>
            </div>
            <div className="items-center justify-between mt-4 border-t card-actions">
              <p className="py-4 font-bold text-[16px]">{price}</p>
              <Icon icon="teenyicons:arrow-right-solid" />
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cards2;
