import { Icon } from "@iconify/react";
import React from "react";

const ContactCard = ({ icon, title, description, color }) => {
  return (
    <div>
      <div className="flex w-full gap-4">
        {/* <div className="rounded-full bg-main text-white p-7 lg:p-4 aspect-square w-6 h-6 lg:w-16 lg:h-16 flex items-center justify-center font-regular text-[22px] relative">
          <Icon
            icon={icon}
            width={30}
            height={30}
            className="absolute text-white"
          />
        </div> */}
        <div className="flex flex-col gap-1">
          <h4 className="text-[20px]  font-bold text-main">{title}</h4>
          <p className="text-main text-[17px] fxl:text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
