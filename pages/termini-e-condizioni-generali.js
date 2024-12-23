import Head from "next/head";
import React from "react";

function Terms() {
  return (
    <>
      <Head>
        <title>Condizioni Generali di Prenotazione | Les Crêtes</title>
        <meta
          name="description"
          content="Leggi le condizioni generali di prenotazione per le visite guidate e degustazioni presso Les Crêtes. Informazioni su modifiche, cancellazioni e comportamento dei visitatori."
        />
        <meta
          name="keywords"
          content="Condizioni prenotazione, visite guidate, degustazioni, Les Crêtes, modifiche prenotazione, cancellazioni, regolamento visitatori"
        />
        <meta name="author" content="Les Crêtes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Condizioni Generali di Prenotazione | Les Crêtes"
        />
        <meta
          property="og:description"
          content="Consulta le regole per le prenotazioni, modifiche e cancellazioni delle visite guidate e degustazioni."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.lescretes.it/termini-e-condizioni-generali"
        />
        {/* <meta
          property="og:image"
          content="https://www.lescretes.it/assets/images/terms-preview.jpg"
        /> */}
        <link
          rel="canonical"
          href="https://www.lescretes.it/termini-e-condizioni-generali"
        />
      </Head>
      <div className="container p-6 mx-auto">
        <h1 className="mb-4 text-2xl font-bold">
          Condizioni generali di prenotazione di una visita guidata
        </h1>
        <p className="mb-4 text-main">
          - Tutti i prezzi si intendono IVA inclusa; per gli acquisti online le
          somme versate in anticipo sono da considerarsi a titolo cauzionale.
          <br />
          - La prenotazione è da considerarsi confermata solo dopo comunicazione
          scritta (tramite e-mail) da parte di Les Crêtes.
          <br />
          - Si prega di segnalare in anticipo eventuali allergie ed intolleranze
          alimentari, o particolari esigenze. Se non segnalato in precedenza, si
          declina qualsiasi responsabilità.
          <br />- Le degustazioni sono dedicate a persone di maggiore età, in
          quanto non è consentito servire alcolici ai minori di 18 anni.
        </p>

        <h2 className="mb-2 text-xl font-semibold">
          Condizioni generali di modifica o cancellazione di prenotazione di una
          visita guidata
        </h2>
        <p className="mb-4 text-main">
          - Le modifiche devono essere comunicate per iscritto (tramite e-mail)
          entro 2 giorni (feriali) dalla data della visita, fornendo nome,
          cognome e codice di prenotazione:
          <br />
          1. In caso di diminuzione del numero dei prenotati e di modifica del
          tipo di degustazione, se comunicato entro il suddetto termine,
          l’importo corrispondente verrà riaccreditato direttamente sulla carta
          di credito utilizzata, altrimenti Les Crêtes tratterrà l’importo
          dovuto.
          <br />
          2. In caso di aumento del numero di prenotati e di modifica del tipo
          di degustazione, la prenotazione dev’essere confermata da Les Crêtes.
          <br />
          - Ogni cancellazione di prenotazione deve essere comunicata per
          iscritto (tramite e-mail).
          <br />
          - La cancellazione della prenotazione deve pervenire entro 2 giorni
          (feriali) dalla data della visita, fornendo nome, cognome e codice di
          prenotazione. Se comunicato entro il suddetto termine, l’importo
          corrispondente verrà riaccreditato direttamente sulla carta di credito
          utilizzata, altrimenti Les Crêtes tratterrà l’importo totale.
          <br />- Les Crêtes si riserva il diritto di modificare il luogo
          dell’evento o di cancellare l’evento, in qualsiasi momento, per causa
          di forza maggiore e/o impossibilità (ivi inclusi i casi, a titolo
          esemplificativo e non esaustivo, di eventi meteorologici che rendano
          impossibile l’organizzazione dell’evento, impedimenti causati
          dall’emergenza Covid-19, ecc.). Ai partecipanti è assicurato il
          rimborso totale del ticket, tramite il medesimo mezzo di pagamento
          utilizzato ai fini dell’acquisto, sia che l’evento venga cancellato,
          sia che la modifica del luogo non permetta all'acquirente di prendere
          parte alla visita con degustazione.
        </p>

        <h2 className="mb-2 text-xl font-semibold">
          Norme generali di comportamento per i visitatori
        </h2>
        <p className="mb-4 text-main">
          - I visitatori sono pregati di presentarsi 20 minuti prima dell’inizio
          della visita, per effettuare il check-in.
          <br />
          - L’orario della visita è prestabilito e non modificabile, nel
          rispetto della prenotazione del resto del gruppo partecipante.
          <br />
          - L'ingresso ai locali dello stabilimento è consentito solo se
          accompagnati da personale autorizzato.
          <br />
          - Tutti i visitatori sono pregati di seguire sempre le indicazioni dei
          propri accompagnatori. In particolare è necessario:
          <br />
          &nbsp;&nbsp;- Prestare la massima attenzione ai mezzi in movimento
          (es. carrelli elevatori).
          <br />
          &nbsp;&nbsp;- In caso di emergenza (incendio, calamità naturale)
          mantenere la calma, non allontanarsi dall'accompagnatore, seguire le
          indicazioni fornite dalla guida ed utilizzare le vie di fuga indicate
          dall'apposita segnaletica.
          <br />- Animali domestici: gli amici a quattro zampe di piccola taglia
          sono i benvenuti, se all’interno dell’apposito trasportino. Per
          ulteriori informazioni vi preghiamo di contattarci.
        </p>
      </div>
    </>
  );
}

export default Terms;
