import { getUserAuthData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

//reducer
const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export default appReducer;

//actioncreator
type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

//thunkcreator
export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getUserAuthData());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
