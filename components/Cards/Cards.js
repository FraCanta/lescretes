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
}) => {
  return (
    <>
      <Link href={link}>
        <div className="h-full overflow-hidden transition-all duration-500 ease-out bg-white border shadow-lg shadow-main/10 card hover:shadow-xl">
          <figure className="p-4 ">
            <Image
              src={img}
              alt={`${title} degustazione img`}
              className="rounded-lg h-[35vh] object-cover w-full  "
              width={500}
              height={600}
            />
          </figure>
          <div className="card-body !py-2 !px-6">
            <h2 className="card-title  font-bold text-[20px] fxl:text-3xl">
              {title}
            </h2>
            <p className="text-lg fxl:text-xl text-main">{descrizione}</p>
            <div className="flex items-center justify-between mt-4 border-t card-actions mx-">
              <p className=" py-4 font-bold text-[16px]">{price}</p>
              <Icon icon="uiw:arrow-right" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
