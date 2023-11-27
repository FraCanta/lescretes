import Image from "next/image";
import React from "react";
import Tre from "@/public/assets/degustazioni/tre.jpeg";
import Link from "next/link";

const Cards = ({ img, title, descrizione, price, link, lang }) => {
  return (
    <>
      <Link href={link}>
        <div className="card w-full xl:w-96 border">
          <figure className="p-4 ">
            <Image
              src={img}
              alt="Shoes"
              className="rounded rounded-lg h-[35vh] object-cover"
              width={500}
              height={600}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title !justify-center font-bold text-[24px]">
              {title}
            </h2>
            <p className="text-center text-base">{descrizione}</p>
            <div className="card-actions justify-center border-t mt-4">
              <p className="text-center py-4 font-bold text-[18px]">{price}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
