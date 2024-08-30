import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard</Preview>
      <Tailwind>
        <Body style={body}>
          <Container className="font-bold">
            <Text style={heading}>Hello {name}</Text>
            <Link href="https://example.com">Click here to login</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  backgroundColor: "#fff",
};

const heading: CSSProperties = {
  //   color: "white",
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  padding: 20,
};
export default WelcomeTemplate;
