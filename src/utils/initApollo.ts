import fetch from "isomorphic-unfetch";
import once from "lodash/once";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloLink,
} from "@apollo/client";

const create = (initialState?: NormalizedCacheObject) => {
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    ssrMode: !process.browser,
    link: ApolloLink.from([
      new HttpLink({
        fetch: fetch as any,
        uri: (!process.browser ? process.env.ROOT_URL : "") + "/api/graphql",
      }),
    ]),
  });
};

export const initApollo: typeof create = !process.browser
  ? create
  : once(create);
