import Hero from "@/components/heroHome/Hero";
import React from "react";
import Ter from "@/public/assets/terroir2.png";
const Terroir = () => {
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero
          img={Ter}
          text="Il Terroir: Un Tesoro Protetto tra le Grandi Alpi e le Vigne Rigogliose"
        />
      </div>
    </>
  );
};

export default Terroir;
