import Hero from "@/components/heroHome/Hero";
import React from "react";
import Ter from "@/public/assets/terroir2.png";
import Banner from "@/components/Banner/Banner";
import Wine from "@/public/assets/vinibanner.png";
const Terroir = () => {
  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row items-center  min-h-[calc(100vh_-_70px)] md:min-h-[calc(80vh_-_70px)] fxl:min-h-[calc(100vh_-_100px)]">
        <Hero
          img={Ter}
          text="Il Terroir: Un Tesoro Protetto tra le Grandi Alpi e le Vigne Rigogliose"
        />
      </div>
      <div className="w-[90%]  flex-col justify-start items-start gap-[50px] flex mx-auto py-20 fxl:gap-20">
        <div className="flex-col justify-start items-start gap-10 flex">
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl font-normal fxl:text-2xl flex flex-col gap-10 fxl:gap-16 3xl:text-4xl">
            <p>
              Situata nel cuore delle Alpi ed incastonata tra “quattro grandi”
              come il Monte Bianco, il Cervino, il Monte Rosa ed il Gran
              Paradiso, la Valle d’Aosta è la più piccola delle regioni
              d’Italia.
            </p>
            <p>
              La Valle d’Aosta è la regione europea con la maggior
              concentrazione di aree protette. Il 13% della superficie totale è
              occupata da parchi, riserve naturali e oasi. La maggiore
              estensione protetta è quella del Parco Nazionale Gran Paradiso,
              seguita dal Parco Regionale Mont Avic. Orograficamente è divisa in
              due dalla Dora Baltea che scorre nella valle centrale in direzione
              ovest-est, ed evidenzia due versanti, uno ombroso esposto a nord
              detto <i>envers</i> nel dialetto locale, e uno assolato e arido
              esposto a sud detto <i>adret</i>. Nella Valle centrale
              confluiscono una ventina di valli laterali orientate lungo l’asse
              nord-sud.
            </p>
            <p>
              La vite in questo territorio trova il suo habitat ideale sui
              terrazzamenti ventilati che si estendono lungo la valle centrale e
              salgono a ridosso della montagna.
            </p>
          </div>
        </div>
        {/* <div className="flex-col justify-start items-start gap-10 flex">
          <h2 className="text-main text-[35px] md:text-5xl font-bold leading-[46px]">
            Parla l’esperto: l’enologo ci spiega...
          </h2>
          <div className=" text-main text-base md:text-[20px] font-normal leading-9 flex flex-col gap-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mauris enim, sagittis a est ut, ultrices lobortis odio. Cras
              feugiat tellus orci, eu porta dolor blandit a. Sed massa ante,
              tempus eu ullamcorper non, consectetur ut neque. Pellentesque
              euismod nulla orci, quis euismod metus luctus quis. Morbi ut justo
              sit amet massa pellentesque ultrices. Pellentesque ornare varius
              quam, ut sollicitudin elit iaculis ut. Donec libero ex, facilisis
              ut malesuada a, finibus a ex. Vestibulum tempus aliquam quam id
              consequat.
            </p>
            <p>
              Pellentesque maximus tortor non ante suscipit malesuada. Phasellus
              euismod orci sit amet dui volutpat, quis eleifend tortor aliquam.
              Donec in gravida ipsum. Fusce mollis nibh eu laoreet varius. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec aliquam ex sit amet orci rhoncus scelerisque.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              magna tincidunt, bibendum dolor et, ultricies turpis. Etiam
              iaculis dolor dolor, et tempor lacus mattis vestibulum.
              Pellentesque volutpat neque at suscipit hendrerit. Vivamus
              interdum ex mollis, ultricies purus sed, porttitor est.
              Suspendisse tortor justo, commodo vel quam nec, pretium semper
              metus. Quisque congue velit ac nisi luctus ullamcorper. Aenean at
              tincidunt ante.
            </p>
          </div>
        </div> */}
        <div className="flex-col justify-start items-start gap-10  flex">
          <h2 className="text-main text-3xl md:text-5xl fxl:text-6xl font-bold leading-[46px] 3xl:text-7xl">
            I vini rossi
          </h2>
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl font-normal fxl:text-2xl  flex flex-col gap-10 fxl:gap-16 3xl:text-4xl">
            <p>
              I vini rossi Les Crêtes nascono tra 350-800 m di altitudine. I
              vigneti sono frazionati in micro-parcelle (con estensione media
              inferiore a 1500 mq.), in forte pendenza e sono caratterizzati da
              medie densità d’impianto (6-9.000 piedi/ha). Oltre che nelle zone
              di Les Crêtes e La Tour di Aymavilles, con esposizione Nord/Ovest,
              le uve si trovano anche nelle vigne Les Toules di Sarre, zona
              vocazionale storica del Torrette, e nelle vigne di Saint
              Christophe con esposizione Sud.
            </p>
            <p>
              Il Nebbiolo invece, da sempre presente anche in Valle d’Aosta,
              viene coltivato nel fondovalle alluvionale di origine glaciale
              (nelle zone vocate di Arnad e Issogne).
            </p>
            <p>
              In località Bufferia e Sazzé di Aymavilles hanno origine le uve
              destinate a diventare i nostri vini rossi più tradizionali. I
              vigneti hanno dai 20 ai 70 anni, si tratta delle vecchie vigne di
              famiglia. Il terreno è sabbioso e in forte pendenza, con
              esposizione Ovest.
            </p>
            <p>
              Il Pinot Nero Revei, che in patois significa orologio, è legato
              invece alla storia della torre medievale che domina il vigneto di
              Aymavilles dove nascono le uve con produciamo questo vino di lunga
              attesa.
            </p>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-10 flex">
          <h2 className="text-main text-3xl md:text-5xl font-bold leading-[46px] fxl:gap-6xl 3xl:text-7xl">
            I vini bianchi
          </h2>
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl font-normal flex flex-col gap-10 fxl:gap-16 fxl:text-2xl 3xl:text-4xl">
            <p>
              I vigneti, da cui nascono i nostri vini bianchi, sono coltivati
              tra 600-800 m di altitudine. Per la conformazione geografica della
              Valle d’Aosta, le forti pendenze e per motivi di successione
              ereditaria, sono frazionati in micro-parcelle (estensione media
              inferiore a 1500 mq.). Sono inoltre caratterizzati da elevate
              densità d’impianto (8-9.000 piedi/ha).
            </p>
            <p>
              L’accorpamento più esteso si sviluppa nella zona Les Crêtes di
              Aymavilles, dove la collina offre ai visitatori la sua torre
              medievale, oggi punto di degustazione accessibile ai nostri
              clienti.
            </p>

            <p>
              Nella zona di Aymavilles e anche a Saint Christophe, alle porte di
              Aosta, troviamo i vigneti di Petite Arvine Valle d’Aosta e
              Chardonnay Valle d’Aosta. In bassa Valle, nella zona di Montjovet,
              nascono invece le uve di Fleur – Petite Arvine Valle d’Aosta. Il
              Pinot Gris nasce invece dalle uve coltivate ad Aymavilles e a
              Saint Nicolas.
            </p>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-10 flex">
          <h2 className="text-main text-3xl md:text-5xl font-bold leading-[46px] fxl:text-6xl 3xl:text-7xl">
            Le bollicine e i desserts
          </h2>
          <div className=" text-main text-xl md:text-2xl 2xl:text-xl font-normal flex flex-col gap-10 fxl:gap-16 fxl:text-2xl 3xl:text-4xl">
            <p>
              Il Neblù è un blend di uve a bacca nera, coltivate nelle nostre
              proprietà sin dall’antichità. Dal 2005 Les Crêtes ha avviato la
              vinificazione in spumante, dando vita ad un Metodo Classico unico
              nel suo genere. Pressatura soffice con fermentazione a temperatura
              controllata (14 °C) di 12 giorni, Spumantizzazione con Metodo
              Classico e affinamento “sur lies” di 24 mesi. Di colore brillante,
              cerasuolo chiaro. Perlage fine e persistente, al naso fruttato con
              sentori di ciliegia, ribes e piccoli frutti rossi. In bocca secco,
              fresco e sapido, con finale persistente. Una bollicina unica nel
              suo genere.
            </p>
            <p>
              Rebàn (in dialetto valdostano “nastro”), nasce per celebrare, un
              momento s peciale. E’ il primo Metodo Classico valdostano di
              Petite Arvine vinificato in purezza. E’ uno spumante varietale che
              esprime la freschezza e la salinità tipiche del vitigno ed
              espressivo del terroir valdostano.
            </p>

            <p>
              Il nostro vino da uve stramature – Doré – nasce ad un’altitudine
              media di circa 700 metri s.l.m. Le uve appassite in pianta,
              raccolte a precedere la prima nevicata, subiscono una pressatura
              soffice e sono lasciate fermentare per 25 giorni a temperatura
              controllata e proseguono poi l’affinamento per 12 mesi. Note di
              zabaione, crema pasticcera, miele, bacche aromatiche, caramello e
              albicocche secche avvolgono il palato con un lungo finale
              fruttato. Il vino da uve stramature Doré stupisce per il profumo
              intenso e un’inaspettata freschezza.
            </p>
          </div>
        </div>
      </div>

      <Banner
        img={Wine}
        title="Scopri la nostra selezione di vini. Potrai assaporare tutta la nostra esperienza."
        btn1="Scopri di più"
        link1="/vini"
      />
    </>
  );
};

export default Terroir;
