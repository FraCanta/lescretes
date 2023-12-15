import Image from "next/image";
import React from "react";
import View from "@/public/assets/cotoView.jpg";
const Sections3 = () => {
  return (
    <div className="w-[90%]  flex-col justify-start items-start gap-[20px] xl:gap-[50px] flex mx-auto">
      <h3 className="text-main text-[35px] xl:text-5xl font-bold xl:leading-[50px]">
        La nostra filosofia
      </h3>
      <div className="flex-col justify-start items-start gap-5 flex text-main text-base xl:text-[20px] font-normal leading-9">
        <p>
          L’azienda Les Crêtes produce{" "}
          <span className="underline leading-9">i suoi vini</span> in un
          contesto alpino, che si sviluppa ai piedi del Monte Bianco,
          caratterizzato da montagne elevate, pendenze sabbiose e temperature
          rigide. Il microclima fresco, secco e ventilato è caratterizzato da
          suoli di origine morenica, drenanti e a forte componente minerale.{" "}
        </p>
        <p>
          L’attenzione all’ambiente e le tecniche di coltivazione sono aspetti
          fondamentali per la nostra realtà. Questa ha un legame intrinseco e
          focalizzato con l’habitat circostante. Ogni attività viene svolta con
          la massima dedizione e cura, in relazione alla qualità e alla passione
          che ci contraddistingue.
        </p>
        <p>
          Les Crêtes inoltre segue le linee guida dei programmi europei di
          settore per quanto concerne i trattamenti fitosanitari, scegliendo di
          fare un utilizzo ridotto di fitofarmaci. Questa è la nostra filosofia.
        </p>
      </div>
      <div className="flex-col justify-start items-start gap-[50px] flex">
        <h3 className="text-main text-[35px] xl:text-5xl font-bold 2xl:leading-[50px]">
          Dare valore al territorio significa tutelarne l’identità
        </h3>
        <div className="relative h-[50vh] xl:h-[70vh] w-full">
          <Image
            className="w-full  rounded-lg object-cover object-top"
            fill
            src={View}
          />
        </div>
        <div className="flex-col justify-start items-start gap-5 flex text-main text-base xl:text-[20px] font-normal leading-9">
          <p>
            La principio cardine della filosofia dell’azienda è continuare a
            seguire i valori delle generazioni passate valorizzando il{" "}
            <span className="underline">“Terroir”</span> con fedeltà e rispetto
            delle tradizioni. Lo sguardo, però, è sempre rivolto a quel futuro
            di innovazione che permette di esprimere appieno le potenzialità di
            un territorio vitivinicolo di montagna come quello valdostano. Una
            realtà unica ed irripetibile.{" "}
          </p>

          <p>
            La gestione agronomica, in prevalenza manuale, segue le pratiche
            della lotta integrata a tutela dell’ambiente e a salvaguardia del
            territorio. Le condizioni climatiche favoriscono inoltre una
            coltivazione a basso impatto ambientale.{" "}
          </p>
          <p>
            Le uve, raccolte a mano, sono disposte in piccole casse, per
            proteggerne l’integrità e vengono trasformate con grande attenzione.
            I vini, sapidi freschi ed eleganti, esprimono questa filosofia e
            l’essenza del ”terroir” di montagna. Sono figli di una cantina a
            conduzione famigliare, di piccoli appezzamenti coltivati a mano e
            curati nei dettagli, per ottenere uve sane, con basse rese, seguendo
            sia in campo che in cantina, le pratiche tradizionali ed
            eco-sostenibili, a tutela dell’ambiente e del territorio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sections3;
