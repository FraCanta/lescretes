import nodemailer from "nodemailer";

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
      pass: "abtryarebjkirtkh",
    },
  });

  try {
    await transporter.sendMail({
      from: `${email}`,
      to: ["thalliondev@gmail.com"],
      // cc: ["elena@lescretes.it", "corti.giulio@gmail.com"],
      subject: `${name}  ${surname} ${deg} `,

      html: ` 
      


<div >
<div style="font-size:16px; margin-top: 20px">Ho sentito parlare di te tramite ${phone}.</div>
<div style="font-size:16px; margin-top: 20px">Sono ${name} ,</div>
<div style="font-size:16px; padding:4px; margin-bottom:20px;">
${message}
</div>
<div>
${gift ? "🎁 Voglio fare un regalo" : ""}
Referenze del contatto: 
</div>

<ul>
<li>
${email}
</li></ul>

</div>
‍


    </div>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
