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
                <Text className="font-bold">Nome della degustazione:</Text>
                <Text>{deg}</Text>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />
              <Row>
                <Column>
                  <Text>
                    <span className="font-bold">Data: </span>
                    <span>{date}</span>{" "}
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <span className="font-bold">Orario scelto: </span>
                    <span>{timeSlot}</span>{" "}
                  </Text>
                </Column>
              </Row>

              <Hr className="border border-solid  my-[10px] mx-0 w-full" />
              <Row>
                <Column>
                  <Text>
                    <span className="font-bold">Lingua: </span>
                    <span>{language}</span>
                  </Text>
                  <Text>
                    <span className="font-bold">Adulti: </span>
                    <span>{adultCount}</span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <span className="font-bold">Tipologia: </span>{" "}
                    <span>{tipo}</span>
                  </Text>
                  <Text>
                    <span className="font-bold">Durata: </span>
                    <span>{durata}</span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>
                    <span className="font-bold">Nome: </span>
                    <span>{name}</span>
                  </Text>
                  <Text>
                    <span className="font-bold">Email: </span>{" "}
                    <span>{email}</span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <span className="font-bold">Cognome: </span>
                    <span>{surname}</span>
                  </Text>
                  <Text>
                    <span className="font-bold">Bambini: </span>{" "}
                    <span>{numeroMinori ? numeroMinori : "0"}</span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>
                    <span className="font-bold">Telefono: </span>
                    <span>{phone}</span>
                  </Text>
                  <Text>
                    <span className="font-bold">Cap: </span> <span>{cap}</span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <span className="font-bold">Nazione: </span>
                    <span>{nation}</span>
                  </Text>
                  <Text>
                    <span className="font-bold">Città: </span>
                    <span>{city}</span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Text>
                  <span className="font-bold">Regalo: </span>{" "}
                  <span>{gift ? "Sì" : "No"}</span>
                </Text>
                <Text>
                  <span className="font-bold">Prezzo totale: </span>{" "}
                  <span>{formattedPrice}</span>
                </Text>
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
