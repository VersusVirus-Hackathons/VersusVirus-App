import { State } from "./types";
import { action, thunk, persist } from "easy-peasy";

import registerHacker from "./registerHacker";
const initialState: State = {
  profile: {},
};

const updateProfile = action<State, Partial<State["profile"]>>(
  (state, value) => {
    state.profile = {
      ...state.profile,
      ...value,
    };
  },
);

const actions = {
  reset: action<State, void>((state) => (state = initialState)),
  registerHacker,
  updateProfile,
};

export default persist({
  ...initialState,
  ...actions,
});
