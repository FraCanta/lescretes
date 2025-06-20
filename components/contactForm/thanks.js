import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Text,
} from "@react-email/components";
export function Thanks(props) {
  const { name } = props;

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://i.ibb.co/Pstg4Pt8/logo.png"
            className="object-contain w-full h-[100px]"
            alt="logo les cretes"
            style={logo}
          />
          <Text style={paragraph}>Salve {name},</Text>
          <Text style={paragraph}>
            Grazie per averci contattato e per aver scelto la nostra azienda per
            la tua degustazione di vini.
          </Text>
          <Text style={paragraph}>
            Abbiamo ricevuto la tua richiesta di prenotazione e ti risponderemo
            al più presto per confermare tutti i dettagli. Siamo entusiasti di
            offrirti un'esperienza indimenticabile tra i nostri vigneti e di
            farti scoprire i nostri vini.
          </Text>
          <Text style={paragraph}>
            Per qualsiasi ulteriore informazione o chiarimento, non esitare a
            contattarci ad info@lescretes.it.
          </Text>
          {/* <Section style={btnContainer}>
            <Button style={button} href="https://getkoala.com">
              Get started
            </Button>
          </Section> */}
          <Text style={paragraph}>
            Cordiali saluti,
            <br />
            Les Crêtes
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            SR20, 5011010 Aymavilles (AO) Valle d’Aosta, Italia
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
