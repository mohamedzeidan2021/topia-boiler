import { SET_INTERACTIVE_PARAMS, SET_HAS_SETUP_BACKEND } from "./types";

const globalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_INTERACTIVE_PARAMS:
      return {
        ...state,
        ...payload,
        hasInteractiveParams: true,
      };
    case SET_HAS_SETUP_BACKEND:
      return {
        ...state,
        ...payload,
        hasSetupBackend: true,
      };
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

export { globalReducer };
