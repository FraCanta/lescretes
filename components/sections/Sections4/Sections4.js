import React from "react";
import Tabs from "./Tabs";

const Sections4 = ({ tabs }) => {
  return (
    <>
      <div className="w-[90%] mx-auto flex flex-col gap-4 py-[50px] lg:py-[90px] min-h-screen justify-center ">
        {" "}
        <h2 className="text-main text-3xl md:text-5xl  lg:text-[43.12px] fxl:text-[55px] 3xl:text-7xl font-bold  ">
          Vini di Montagna: Espressione Autentica della Valle d'Aosta
        </h2>
        <p className="lg:w-[90%] text-main text-xl md:text-2xl 2xl:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal font-normal">
          I nostri vini sapidi, freschi ed eleganti, esprimono l’essenza del
          <strong> Terroir</strong> di montagna della Valle d’Aosta. Sono creati
          con passione e dedicati agli amatori ed esperti. Il clima alpino
          influenza fortemente le caratteristiche organolettiche dei{" "}
          <strong>vini prodotti in Valle d’Aosta</strong>. Sono figli di una
          cantina a conduzione famigliare, con piccoli appezzamenti coltivati a
          mano e curati nei minimi dettagli.
        </p>
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default Sections4;
