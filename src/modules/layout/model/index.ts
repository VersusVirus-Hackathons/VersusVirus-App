import { action } from "easy-peasy";

type State = {
  showNavigation: boolean;
};

const initialState: State = {
  showNavigation: false,
};
export default {
  ...initialState,
  setShowNavigation: action<State>((s, show) => {
    s.showNavigation = show;
  }),
};
