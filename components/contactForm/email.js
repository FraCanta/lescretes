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
import { Span } from "next/dist/trace";

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
                  <Text>
                    <Span className="font-bold">Nome della degustazione:</Span>{" "}
                    <Span>{deg}</Span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <Span className="font-bold">Data:</Span>
                    <Span>{date}</Span>{" "}
                  </Text>
                  <Text>
                    <Span className="font-bold">Orario scelto:</Span>
                    <Span>{timeSlot}</Span>{" "}
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />
              <Row>
                <Column>
                  <Text>
                    <Span className="font-bold">Lingua :</Span>
                    <Span>{language}</Span>
                  </Text>
                  <Text>
                    <Span className="font-bold">Adulti:</Span>
                    <Span>{adultCount}</Span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <Span className="font-bold">Tipologia:</Span>{" "}
                    <Span>{tipo}</Span>
                  </Text>
                  <Text>
                    <Span className="font-bold">Durata:</Span>
                    <Span>{durata}</Span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>
                    <Span className="font-bold">Nome :</Span>
                    <Span>{name}</Span>
                  </Text>
                  <Text>
                    <Span className="font-bold">Email:</Span>{" "}
                    <Span>{email}</Span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <Span className="font-bold">Cognome:</Span>
                    <Span>{surname}</Span>
                  </Text>
                  <Text>
                    <Span className="font-bold">Bambini:</Span>{" "}
                    <Span>{numeroMinori ? numeroMinori : "0"}</Span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>
                    <Span className="font-bold">Telefono :</Span>
                    <Span>{phone}</Span>
                  </Text>
                  <Text>
                    <Span className="font-bold">Cap:</Span> <Span>{cap}</Span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <Span className="font-bold">Nazione:</Span>
                    <Span>{nation}</Span>
                  </Text>
                  <Text>
                    <Span className="font-bold">Città:</Span>
                    <Span>{city}</Span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Text>
                  <Span className="font-bold">Regalo:</Span>{" "}
                  <Span>{gift ? "Sì" : "No"}</Span>
                </Text>
                <Text>
                  <Span className="font-bold">Prezzo totale:</Span>{" "}
                  <Span>{formattedPrice}</Span>
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
