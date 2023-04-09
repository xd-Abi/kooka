import React from "react";
import {Container, Head} from "@/components";

export default function Home() {
  return (
    <React.Fragment>
      <Head
        title="Kooka | Realtime Chat"
        description="A realtime chat system"
      />
      <Container>
        <p>Kooka</p>
      </Container>
    </React.Fragment>
  );
}
