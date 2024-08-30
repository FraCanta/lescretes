import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { Email } from "../../components/contactForm/email";
import { Thanks } from "@/components/contactForm/thanks";

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
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.it",
    port: 465,
    secure: true,
    auth: {
      //   user: process.env.SMTP_USER, se vogliamo inserire le credenziali su env
      //   pass: process.env.SMTP_PASSWORD,
      user: "info@lescretes.it",
      pass: "infocontact_2024?!",
    },
  });
  const emailHtml = render(
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

  const thankHtml = render(
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

  try {
    await transporter.sendMail({
      from: `Les Crêtes degustazioni <info@lescretes.it>`,
      to: ["thalliondev@gmail.com","info@lescretes.it"],
      subject: `Richiesta prenotazione degustazione: ${deg} `,
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
