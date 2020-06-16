import { ApolloClient } from "@apollo/client";
import { createStore, Store } from "easy-peasy";

import rootModel from "../model";

export interface Injections {
  apollo: ApolloClient<object>;
}

export type InitialState = Partial<typeof rootModel>;

let store: Store<typeof rootModel, {}>;
export const getStore = () => store;

export function initializeStore({
  initialState = {},
  apollo,
}: {
  initialState: InitialState;
  apollo: ApolloClient<object>;
}) {
  store = createStore<typeof rootModel, {}>(rootModel, {
    initialState,
    injections: {
      apollo,
    },
  });
  return store;
}
