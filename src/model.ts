import {
  Actions,
  createTypedHooks,
  Dispatch,
  Meta,
  State,
  Thunk,
} from "easy-peasy";

import { Injections } from "./utils/initStore";
import signup from "./modules/signup/model";
import layout from "./modules/layout/model";
import submittedProject from "./modules/submittedProject/model";

const model = {
  signup,
  layout,
  submittedProject,
};

type StoreModelType = typeof model;
export interface StoreModel extends StoreModelType {}

export type AppThunk<Model extends {}, Payload = void, Result = void> = Thunk<
  Model,
  Payload,
  Injections,
  StoreModel,
  Promise<Result>
>;

export interface AppThunkHelpers<Model extends {}> {
  dispatch: Dispatch;
  getState: () => State<Model>;
  getStoreActions: () => Actions;
  getStoreState: () => State;
  meta: Meta;
}

const { useStoreActions, useStoreState, useStoreDispatch } = createTypedHooks<
  StoreModel
>();
export { useStoreActions, useStoreState, useStoreDispatch };

export default model;
