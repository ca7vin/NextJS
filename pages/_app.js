import React from "react";
import "../styles/globals.css";
import Container from "../components/Container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
