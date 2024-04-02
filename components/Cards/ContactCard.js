import { Icon } from "@iconify/react";
import React from "react";

const ContactCard = ({ icon, title, description, color }) => {
  return (
    <div>
      <div className="flex  w-full gap-4">
        <div className="rounded-lg bg-main text-white p-5 aspect-square w-16 flex items-center justify-center font-regular text-[22px] relative">
          <Icon
            icon={icon}
            width={30}
            height={30}
            className="text-white absolute"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[22px] fxl:text-[25px] font-bold text-main">
            {title}
          </h4>
          <p className="text-main fxl:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
