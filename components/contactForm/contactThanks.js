const ContactThanks = ({ name, surname }) => {
  return (
    <div>
      <div>
        <p>
          Salve {name} {surname},
        </p>
        <p>Grazie per averci contattato. Ti risponderemo al più presto.</p>

        <p>
          Cordiali saluti,
          <br />
          Les Crêtes
        </p>
        <hr />
        <p>SR20, 5011010 Aymavilles (AO) Valle d’Aosta, Italia</p>
      </div>
    </div>
  );
};

export default ContactThanks;
