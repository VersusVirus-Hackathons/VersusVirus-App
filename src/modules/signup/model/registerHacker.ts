import { thunk } from "easy-peasy";
import { AppThunk } from "../../../model";
import { State } from "./types";
import gql from "graphql-tag";
import {
  RegisterHackerVariables,
  RegisterHacker,
} from "./types/RegisterHacker";

export type RegisterHackerInput = RegisterHackerVariables["data"];
const MUTATION = gql`
  mutation RegisterHacker($data: RegisterHackerInput!) {
    registerHacker(data: $data) {
      success
    }
  }
`;

function isValid(s: State["profile"]): s is Required<State["profile"]> {
  return true; // for simplicity, we let graphql validate
}

const registerHacker: AppThunk<any, void, any> = thunk(
  async (actions, payload, { getState, injections: { apollo } }) => {
    const { profile } = getState();
    if (!isValid(profile)) {
      throw new Error("missing props");
    }

    const result = await apollo.mutate<RegisterHacker, RegisterHackerVariables>(
      {
        mutation: MUTATION,
        variables: {
          data: profile,
        },
      },
    );

    return result;
  },
);

export default registerHacker;
