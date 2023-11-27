import React from "react";

const Sections1 = () => {
  return (
    <div className="w-[90%] min-h-screen  flex-col justify-start items-start gap-[50px] flex mx-auto mt-20 xl:mt-0">
      <div className="flex-col justify-start items-start gap-5 flex">
        <h2 className="text-main text-[35px] xl:text-5xl font-bold leading-[46px]">
          La leggenda
        </h2>
        <div className=" text-main text-base xl:text-[20px] font-normal leading-9 flex flex-col gap-4">
          <p>
            Le figlie, Elena ed Eleonora, del 1977 e del 1980, avevano il
            compito di ricercare nei prati di Ozein le coccinelle per l'azienda.
            Queste coccinelle venivano poi trasportate con cura e rilasciate in
            vigna, poiché utili a combattere gli acari nocivi. Questa attività
            era più di un gioco per le bambine, ed erano divertite a osservarle.
          </p>
          <p>
            Questa scelta della famiglia Charrère non era una fiaba, ma una
            pratica concreta che riflette l'approccio sostenibile che la
            famiglia ha sempre avuto nella sua storia.
          </p>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-5 flex">
        <h2 className="text-main text-[35px] xl:text-5xl font-bold leading-[46px]">
          L’inizio
        </h2>
        <div className=" text-main text-base xl:text-[20px] font-normal leading-9 flex flex-col gap-4">
          <p>
            Il trisnonno Bernardin Charrère emigrò dall’ Alta Savoia ad
            Aymavilles intorno al 1750, costruendo l'edificio attualmente
            esistente con cantine e un frantoio per le noci.
          </p>
          <p>
            Il bisnonno Etienne ampliò l'attività, includendo la produzione di
            sidro in risposta alle esigenze del mercato e dell'economia
            dell'epoca. Aggiunse anche un mulino per macinare i creali locali.
            Il nonno Louis si adattò nuovamente alle esigenze del mercato
            costruendo un nuovo mulino.
          </p>
          <p>
            Antoine, padre di Costantino, gestì l'attività fino al 1955 quando
            l'olio d'oliva iniziò ad arrivare da altre regioni. Fu quindi
            necessario cambiare produzione e la scelta fu quella di produrre
            vini di alta qualità. L'attenzione fu posta sul pubblico e per
            distinguersi meglio si avviò un processo di personalizzazione a
            livello colturale (vinificazione separata dei crus), commerciale
            (indicazione delle località geografiche di ciascun vigneto) e
            storico (preservazione dei vitigni autoctoni) che avrebbero
            contribuito a valorizzare la Valle d'Aosta.
          </p>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-5 flex">
        <h2 className="text-main text-[35px] xl:text-5xl font-bold leading-[46px]">
          Costantino Charrère
        </h2>
        <div className=" text-main text-base xl:text-[20px] font-normal leading-9 flex flex-col gap-4">
          <p>
            {" "}
            Le figlie, Elena ed Eleonora, del 1977 e del 1980, avevano il
            compito di ricercare nei prati di Ozein le coccinelle per l'azienda.
            Queste coccinelle venivano poi trasportate con cura e rilasciate in
            vigna, poiché utili a combattere gli acari nocivi. Questa attività
            era più di un gioco per le bambine, ed erano divertite a osservarle.
          </p>
          <p>
            Questa scelta della famiglia Charrère non era una fiaba, ma una
            pratica concreta che riflette l'approccio sostenibile che la
            famiglia ha sempre avuto nella sua storia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sections1;
