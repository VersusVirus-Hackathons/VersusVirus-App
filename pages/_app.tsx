import "../main.css";
import { StoreProvider } from "easy-peasy";
import withReduxStore from "../src/utils/withReduxStore";
import { ApolloProvider } from "@apollo/client";
import withApolloClient from "../src/utils/withApolloClient";
import Head from "next/head";
import { Reset } from "styled-reset";
import "react-image-lightbox/style.css";

const MyApp = ({ Component, pageProps, reduxStore, apolloClient }) => {
  return (
    <>
      <Reset />
      <Head>
        <title>CH VS Virus</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <StoreProvider store={reduxStore}>
          <Component {...pageProps} />
        </StoreProvider>
      </ApolloProvider>
    </>
  );
};

export default withApolloClient(withReduxStore(MyApp));
