import Image from "next/image";
import React from "react";
import Tre from "@/public/assets/degustazioni/tre.jpeg";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Cards = ({
  img,
  title,
  descrizione,
  price,
  link,
  details,
  button,
  name,
  bed,
  wine,
  fork,
  tempo,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <div className="h-full overflow-hidden transition-all duration-500 ease-out bg-white  shadow-lg shadow-main/10 card hover:shadow-xl !rounded-sm">
            <figure>
              <Image
                src={img}
                alt={`${title} degustazione img`}
                className="rounded-t-sm  h-[45vh] object-cover w-full"
                width={500}
                height={600}
              />
            </figure>
            <div className="card-body !py-6 !px-4 !gap-6">
              <div className="flex flex-wrap items-center justify-between gap-y-4">
                <h2 className="card-title  font-bold text-xl lg:text-[18px] fxl:text-3xl uppercase">
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
                    {tempo}
                  </div>
                </div>
              </div>

              <p className="text-lg whitespace-normal fxl:text-xl text-main">
                {descrizione}
              </p>
              <div className="items-center justify-between mt-2 border-t border-t-main/30 card-actions">
                <p className="py-4 font-bold text-[16px]">{price}</p>
                <Icon icon="teenyicons:arrow-right-solid" />
              </div>
            </div>
          </div>
        </Link>
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

export default Cards;
