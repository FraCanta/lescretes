import Image from "next/image";
import React from "react";
import Tre from "@/public/assets/degustazioni/tre.jpeg";
import Link from "next/link";

const Cards = ({
  img,
  title,
  descrizione,
  price,
  link,
  details,
  button,
  name,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <div className="card h-full border">
            <figure className="p-4 ">
              <Image
                src={img}
                alt={`${title} degustazione img`}
                className="rounded-lg h-[35vh] object-cover w-full"
                width={500}
                height={600}
              />
            </figure>
            <div className="card-body !p-2">
              <h2 className="card-title !justify-center font-bold text-[20px] fxl:text-3xl">
                {title}
              </h2>
              <p className="text-center text-lg fxl:text-xl">{descrizione}</p>
              <div className="card-actions justify-center border-t mt-4">
                <p className="text-center py-4 font-bold text-[16px]">
                  {price}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="card w-full xl:w-full h-full border border-main/30">
          <figure className="p-4">
            <Image
              src={img}
              alt={`${title} degustazione img`}
              className="rounded-lg h-[35vh] object-cover"
              width={500}
              height={600}
            />
          </figure>
          <Link href={button} className="card-body !p-0 !py-4">
            <h2 className="card-title !justify-center font-bold text-[20px] fxl:text-[25px]">
              {name}
            </h2>
            <div className="card-actions justify-center  ">
              <p className="text-center text-main/60 font-[500] text-[16px] !-py-2">
                {details}
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cards;
