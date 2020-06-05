import { getUserAuthData } from "./auth-reducer";
import { InferActionsTypes, BaseThunkType } from "../redux-store";

let initialState = {
  initialized: false
};
type InitialStateType = typeof initialState;

//reducer
export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
};

//actioncreator
type ActionsType = InferActionsTypes<typeof actions>
export const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'}as const)
}

//thunkcreators
type ThunkType = BaseThunkType<ActionsType>

export const initializeApp = (): ThunkType => async (dispatch) => {
  let promise = await dispatch(getUserAuthData());
  dispatch(actions.initializedSuccess());
}
