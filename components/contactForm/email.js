import * as React from "react";
import { Html, Button, Tailwind } from "@react-email/components";

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <Button
          href={url}
          className="px-3 py-2 font-medium leading-4 text-white bg-brand"
        >
          Click me
        </Button>
      </Tailwind>
    </Html>
  );
}
