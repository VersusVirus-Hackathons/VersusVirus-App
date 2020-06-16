import { ApolloClient } from "@apollo/client";
import React from "react";
import { initializeStore, InitialState } from "./initStore";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(
  apollo: ApolloClient<object>,
  initialState?: InitialState,
) {
  // Always make a new store if server, otherwise state is shared between requests

  if (isServer) {
    return initializeStore({ initialState, apollo });
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore({
      initialState,
      apollo,
    });
  }
  return window[__NEXT_REDUX_STORE__];
}

export default (App) => {
  return class AppWithRedux extends React.Component {
    public static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState

      const reduxStore = getOrCreateStore(appContext.apolloClient);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    private reduxStore: any;

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(
        props.apolloClient,
        props.initialReduxState,
      );
    }

    public render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
