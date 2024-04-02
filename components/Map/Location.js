import React from "react";

const Location = () => {
  return (
    <div className="grid grid-cols-1  w-[90%] mx-auto my-8 gap-10 min-h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5572.639584842158!2d7.247585!3d45.704621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478921853216a0e5%3A0x1b38ef9ac6af5c76!2sLes%20Cr%C3%AAtes%20Produzione%20e%20vendita%20Vini!5e0!3m2!1sit!2sit!4v1712063822384!5m2!1sit!2sit"
        style={{ border: 0 }}
        allowFullScreen=" "
        loading="lazy"
        referrerPolice="no-referrer-when-downgrade"
        className="w-full aspect-square lg:h-[60vh]"
      ></iframe>
      <div className="flex flex-col  justify-between h-full gap-10">
        <h2 className="text-main text-2xl font-bold">
          Coordinate gps per il navigatore Latitudine 45.7046 Longitudine 7.2475
          oppure SR20, 50 – 11010 Aymavilles (AO)
        </h2>
        <div className="flex flex-col gap-4">
          <h2 className="text-main text-2xl font-bold">
            Da autostrada A5/Aosta/Monte Bianco/G.S.Bernardo – Tempo di
            percorrenza da uscita autostrada 3 min{" "}
          </h2>{" "}
          <ul className="elenco_contatti flex flex-col gap-2 text-main/80 text-xl">
            <li>percorrendo A5 prendere uscita Aosta Ovest-St.Pierre</li>
            <li>
              entrare in SS507 mantenendo la dx al bivio e proseguire per
              Cogne/Aymavilles fino alla rotonda della Piazza Chanoux di
              Aymavilles
            </li>
            <li>
              alla rotonda prendere la 4°uscita (direzione Gressan) per
              imboccare Fraz. Ferrière.
            </li>
            <li>Destinazione 400 m. sulla sinistra.</li>
          </ul>
        </div>{" "}
        <div className="flex flex-col gap-4">
          <h2 className="text-main text-2xl font-bold">
            Da statale SS26 – Tempo di percorrenza da Aosta 10 min
          </h2>{" "}
          <ul className="elenco_contatti flex flex-col gap-2 text-main/80">
            <li>percorrendo SS26 seguire per Cogne/Coumayeur/ Pt-St-Bernard</li>
            <li>
              svoltare a sinistra su SS507 direzione Cogne fino alla rotonda
              della Piazza Chanoux di Aymavilles
            </li>
            <li>
              alla rotonda prendere la 4a uscita (direzione Gressan) per
              imboccare Fraz. Ferrière.
            </li>
            <li>Destinazione 400 m. sulla sinistra.</li>
          </ul>
        </div>
        <p className="text-xl text-main">
          La cantina è dotata di un ampio parcheggio ed è accessibile ai
          disabili.
        </p>
      </div>
    </div>
  );
};

export default Location;
