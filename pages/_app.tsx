import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import theme from "../styles/theme";
import apolloClient from "../utils/apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
