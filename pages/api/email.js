import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { Email } from "../../components/contactForm/email";
import { Thanks } from "@/components/contactForm/thanks";
import { Email2 } from "@/components/contactForm/email2";

export default async function mailer(req, res) {
  const {
    name,
    surname,
    email,
    phone,
    message,
    deg,
    city,
    cap,
    dob,
    nation,
    adultCount,
    language,
    gift,
    numeroMinori,
    timeSlot,
    date,
    tipo,
    totalNumber,
    durata,
    reason,
    formType, // Aggiunto formType
  } = req.body;

  // Crea il trasportatore per inviare le email
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.it",
    port: 465,
    secure: true,
    auth: {
      user: "info@lescretes.it",
      pass: "infocontact_2024?!", // Usa le credenziali corrette
    },
  });

  // Scegli il tipo di email da inviare in base a formType
  let emailHtml;
  let thankHtml;

  if (formType === "contatti") {
    emailHtml = render(
      <Email2
        name={name}
        surname={surname}
        email={email}
        phone={phone}
        message={message}
        reason={reason}
        nation={nation}
      />
    );
  } else if (formType === "prenotazione") {
    emailHtml = render(
      <Email
        name={name}
        surname={surname}
        email={email}
        phone={phone}
        deg={deg}
        gift={gift}
        message={message}
        adultCount={adultCount}
        language={language}
        city={city}
        cap={cap}
        dob={dob}
        nation={nation}
        numeroMinori={numeroMinori}
        timeSlot={timeSlot}
        date={date}
        tipo={tipo}
        totalNumber={totalNumber}
        durata={durata}
      />
    );
    thankHtml = render(
      <Thanks
        name={name}
        surname={surname}
        email={email}
        phone={phone}
        deg={deg}
        gift={gift}
        message={message}
        adultCount={adultCount}
        language={language}
      />
    );
  } else {
    // Gestisci un tipo di modulo sconosciuto, se necessario
    return res.status(400).json({ error: "Invalid form type" });
  }

  try {
    // Determina il soggetto dell'email principale in base al tipo di form
    const subject =
      formType === "contatti"
        ? `Richiesta informazioni: ${reason}` // Subject for contact form inquiries
        : `Richiesta prenotazione degustazione: ${deg}`; // Subject for reservation request

    // Invio della mail principale
    await transporter.sendMail({
      from: `Les Crêtes <info@lescretes.it>`,
      to: ["info@lescretes.it"],
      subject: subject,
      replyTo: `${email}`,
      html: emailHtml,
    });

    // Invio della mail di ringraziamento
    await transporter.sendMail({
      from: `Les Crêtes degustazioni <info@lescretes.it>`,
      to: email,
      subject: "Grazie per la tua prenotazione",
      html: thankHtml,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
