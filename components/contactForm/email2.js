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

export function Email2(props) {
  const { name, surname, email, phone, message, reason, nation } = props;

  return (
    <Html lang="it">
      <Head />
      <Preview>Email con motivazione: {reason}</Preview>
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
                <Text>{reason}</Text>
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
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

              <Row>
                <Column>
                  <Text>
                    <span className="font-bold">Telefono: </span>
                    <span>{phone}</span>
                  </Text>
                </Column>
                <Column>
                  <Text>
                    <span className="font-bold">Nazione: </span>
                    <span>{nation}</span>
                  </Text>
                </Column>
              </Row>
              <Hr className="border border-solid  my-[10px] mx-0 w-full" />

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
