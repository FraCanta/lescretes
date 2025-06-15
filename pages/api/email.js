import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { Email } from "../../components/contactForm/email";
import { Thanks } from "@/components/contactForm/thanks";
import { Email2 } from "@/components/contactForm/email2";
import ContactThanks from "@/components/contactForm/contactThanks";

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
    tagliere,
    namegift, // Aggiunto nameGift
    surnamegift, // Aggiunto surnameGift
    emailgift, // Aggiunto emailGift
    phonegift, // Aggiunto phoneGift
    selectedCard,
  } = req.body;

  const today = new Date();
  const formattedDate = today.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  // Crea il trasportatore per inviare le email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true", // Confronto booleano
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
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
    thankHtml = render(<ContactThanks name={name} surname={surname} />);
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
        tagliere={tagliere}
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
  } else if (formType === "regalo") {
    emailHtml = `
  <div style="max-width: 2xl; padding: 6px; margin: auto; background-color: #f7fafc; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <h1 style="margin-bottom: 16px; font-size: 24px; font-weight: bold; text-align: center; color: #2d3748;">
      Nuova richiesta di regalo
    </h1>
    <div style="padding: 16px; background-color: #ffffff; border-radius: 8px;">
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Nome e cognome di chi fa il regalo:</strong> ${name} ${surname}
      </p>
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Email di chi fa il regalo:</strong> ${email}
      </p>
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Telefono di chi fa il regalo:</strong> ${phone}
      </p>
       <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Data richiesta:</strong> ${formattedDate}
      </p>
    </div>
    <div style="padding: 16px; background-color: #ffffff; border-radius: 8px; margin-top: 16px;">
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Nome degustazione:</strong> ${selectedCard}
      </p>
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Nome e cognome di chi riceve il regalo:</strong> ${namegift} ${surnamegift}
      </p>
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Email di chi riceve il regalo:</strong> ${emailgift}
      </p>
      
      <p style="margin-bottom: 8px; color: #4a5568;">
        <strong style="color: #2d3748;">Telefono di chi riceve il regalo:</strong> ${phonegift}
      </p>
      <p style="margin-bottom: 16px; color: #4a5568;">
        <strong style="color: #2d3748;">Dedica di chi fa il regalo:</strong> ${message}
      </p>
    </div>
  </div>
`;

    thankHtml = `
  <div style="max-width: 2xl; padding: 16px; margin: auto; background-color: #f7fafc; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <h1 style="margin-bottom: 16px; font-size: 24px; font-weight: bold; text-align: center; color: #2d3748;">
    Grazie ${name} ${surname}!
  </h1>
  <p style="margin-bottom: 16px; text-align: center; color: #4a5568;">
    Per averci inviato la sua richiesta per il regalo destinato a ${namegift} ${surnamegift}.
  </p>
  <h2 style="margin-bottom: 16px; font-size: 20px; font-weight: bold; text-align: center; color: #2d3748;">
    Ecco il riepilogo del suo regalo:
  </h2>
  <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px;">
    <tbody>
      <!-- Dettagli riepilogo -->
      <tr style="background-color: #edf2f7;">
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Nome e cognome di chi fa il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${name} ${surname}</td>
      </tr>
      <tr>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Email di chi fa il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${email}</td>
      </tr>
      <tr style="background-color: #edf2f7;">
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Data richiesta</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${formattedDate}</td>
      </tr>
      <tr>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Telefono di chi fa il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${phone}</td>
      </tr>
      <tr style="background-color: #edf2f7;">
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Nome degustazione</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${selectedCard}</td>
      </tr>
      <tr>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Nome e cognome di chi riceve il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${namegift} ${surnamegift}</td>
      </tr>
      <tr style="background-color: #edf2f7;">
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Email di chi riceve il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${emailgift}</td>
      </tr>
      <tr>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Telefono di chi riceve il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${phonegift}</td>
      </tr>
      <tr style="background-color: #edf2f7;">
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #4a5568; font-weight: bold;">Dedica di chi fa il regalo</td>
        <td style="padding: 8px 16px; border: 1px solid #e2e8f0; color: #2d3748;">${message}</td>
      </tr>
    </tbody>
  </table>
  <h2 style="margin-top: 32px; margin-bottom: 16px; font-size: 20px; font-weight: bold; text-align: center; color: #2d3748;">
    Termini e condizioni
  </h2>
  <ul style="list-style-type: disc; padding-left: 40px; color: #4a5568;">
    <li style="margin-bottom: 8px;">Il voucher regalo è valido per 1 anno dal momento dell’acquisto.</li>
    <li style="margin-bottom: 8px;">Il voucher regalo non è rimborsabile dopo la data di scadenza.</li>
    <li style="margin-bottom: 8px;">Il voucher regalo potrà essere utilizzato una sola volta.</li>
  </ul>
  
</div>

`;
  } else {
    // Gestisci un tipo di modulo sconosciuto, se necessario
    return res.status(400).json({ error: "Invalid form type" });
  }

  try {
    // Determina il soggetto dell'email principale in base al tipo di form
    const subject =
      formType === "contatti"
        ? `Richiesta informazioni: ${reason}` // Subject for contact form inquiries
        : formType === "prenotazione"
        ? `Richiesta prenotazione degustazione: ${deg}` // Subject for reservation request
        : `Richiesta regalo: ${selectedCard}`; // Subject for gift form

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
      from: `Les Crêtes <info@lescretes.it>`,
      to: email,
      subject: "Grazie per la tua richiesta",
      html: thankHtml,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res
    .status(200)
    .json({ success: true, message: "Email sent successfully" });
}
