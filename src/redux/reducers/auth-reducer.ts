import { authAPI } from "./../../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

export type InitialStateType = typeof initialState;

//reducer
const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        userIdbhwbxh: "sxnjs",
      };

    default:
      return state;
  }
};

export default authReducer;

//actioncreator
type SetUserAuthDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetUserAuthDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetUserAuthDataActionPayloadType;
};

export const setUserAuthData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetUserAuthDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: {
      userId,
      email,
      login,
      isAuth,
    },
  };
};

//thunkcreator
export const getUserAuthData = () => async (dispatch: any) => {
  let response = await authAPI.authMe();

  if (response.data.resultCode === 0) {
    dispatch(
      setUserAuthData(
        response.data.data.id,
        response.data.data.email,
        response.data.data.login,
        true
      )
    );
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  let response = await authAPI.authLogin(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getUserAuthData());
  } else {
    let message = response.data.messages[0]
      ? response.data.messages[0]
      : "error!!!";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.authLogout();
  if (response.data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};
