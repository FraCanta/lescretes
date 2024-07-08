import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { Email } from "../../components/contactForm/email";

export default async function mailer(req, res) {
  const { name, surname, email, phone, message, deg, gift } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      //   user: process.env.SMTP_USER, se vogliamo inserire le credenziali su env
      //   pass: process.env.SMTP_PASSWORD,
      user: "thalliondev@gmail.com",
      pass: "lywb cntb nbqm uckr",
    },
  });
  const emailHtml = render(<Email url="https://example.com" />);
  try {
    await transporter.sendMail({
      from: `${email}`,
      to: ["thalliondev@gmail.com"],
      // cc: ["elena@lescretes.it", "corti.giulio@gmail.com"],
      subject: `${name}  ${surname} ${deg} `,

      html: emailHtml,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
