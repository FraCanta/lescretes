import * as React from "react";
import { Html, Text, Heading } from "@react-email/components";

export function Email(props) {
  const {
    name,
    surname,
    email,
    phone,
    message,
    deg,
    gift,
    adultCount,
    language,
  } = props;

  return (
    <Html lang="en">
      <Heading
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {deg}
      </Heading>
      <Text>
        Mi chiamo {name} {surname},
      </Text>
      <Text>{message}</Text>
      <Text>
        I miei contatti: {email} - {phone}
      </Text>
      {gift ? <Text>Voglio regalare: sì</Text> : null}

      <Text>Numero adulti: {adultCount}</Text>
      <Text>Lingua visita: {language}</Text>
    </Html>
  );
}
