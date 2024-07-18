import * as React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Link,
  Hr,
  Heading,
} from "@react-email/components";
import { Icon } from "@iconify/react";

export function Email(props) {
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
  } = props;

  const formattedDOB = new Date(dob).toLocaleDateString("it-IT");
  const formattedPrice = totalNumber.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const baseUrl = "https://www.reactemailtemplate.com/";

  return (
    <Html lang="it">
      <Head />
      <Preview>Richiesta prenotazione per degustazione: {deg}</Preview>
      <Tailwind>
        <Body className="bg-white text-main">
          <Container className="px-4 mx-auto my-8 bg-white border border-solid rounded border-main">
            <Section className="py-10">
              <Row>
                <Column className="w-full text-center">
                  <Img
                    src="https://i.ibb.co/Vp42ftY/logo.png"
                    alt="company_logo"
                    className="object-contain w-full h-[100px]"
                  />
                </Column>
              </Row>
            </Section>
            <Section>
              <Row>
                <Column className="w-1/2">
                  <Text>Nome della degustazione: {deg}</Text>
                </Column>
                <Column>
                  <Text>Data: {date}</Text>
                  <Text>Orario scelto: {timeSlot}</Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />
              <Row>
                <Column>
                  <Text>Lingua : {language}</Text>
                  <Text>Adulti: {adultCount}</Text>
                </Column>
                <Column>
                  <Text>Tipologia: {tipo}</Text>
                  <Text>Durata: {durata}</Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>Nome : {name}</Text>
                  <Text>Email: {email}</Text>
                </Column>
                <Column>
                  <Text>Cognome: {surname}</Text>
                  <Text>Bambini: {numeroMinori ? numeroMinori : "0"}</Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>Telefono : {phone}</Text>
                  <Text>Cap: {cap}</Text>
                </Column>
                <Column>
                  <Text>Nazione: {nation}</Text>
                  <Text>Città: {city}</Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Text>Regalo: {gift ? "Sì" : "No"}</Text>
                <Text>Prezzo totale: {formattedPrice}</Text>
              </Row>
              <Row>
                <Heading as="h2" className="font-bold">
                  Note
                </Heading>
                <Text className="leading-[26px]">{message}</Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
