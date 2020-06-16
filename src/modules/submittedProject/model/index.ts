import { action } from "easy-peasy";

type State = {
  isLightboxOpen: boolean;
  photoIndex: number;
};

const initialState: State = {
  isLightboxOpen: false,
  photoIndex: null,
};
export default {
  ...initialState,
  setIsLightboxOpen: action<State>((s, isLightboxOpen) => {
    s.isLightboxOpen = isLightboxOpen;
  }),
  setPhotoIndex: action<State>((s, photoIndex) => {
    s.photoIndex = photoIndex;
  }),
};
