import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "node-fetch";
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  link: new HttpLink({
    fetch: fetch as any,
    uri: "/api/graphql",
  }),
});

export default apolloClient;
