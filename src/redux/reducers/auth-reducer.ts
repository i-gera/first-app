import { authAPI } from "./../../api/auth-api";
import { ResultCodesEnum } from "./../../api/api";
import { stopSubmit, FormAction } from "redux-form";
import { InferActionsTypes, BaseThunkType } from "../redux-store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};
type InitialStateType = typeof initialState;

//reducer
export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

//actioncreator
type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setUserAuthData : (
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
        ) => ({
            type: 'SET_USER_DATA',
            payload: {userId, email, login, isAuth}
        } as const)
}

//thunkcreator
type ThunkType = BaseThunkType<ActionsType | FormAction>
export const getUserAuthData = (): ThunkType => async (dispatch) => {
  let data = await authAPI.authMe();

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(
      actions.setUserAuthData(
        data.data.id,
        data.data.email,
        data.data.login,
        true
      )
    );
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean
): ThunkType => async (dispatch) => {
  let data = await authAPI.authLogin(email, password, rememberMe);
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getUserAuthData());
  } else {
    let message = data.messages[0]
      ? data.messages[0]
      : "error!!!";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = ():ThunkType => async (dispatch) => {
  let data = await authAPI.authLogout();
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setUserAuthData(null, null, null, false));
  }
};
