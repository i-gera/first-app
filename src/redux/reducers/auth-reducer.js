import { authAPI } from './../../api/api';
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

//reducer
const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case (SET_USER_DATA):
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}

export default authReducer;

//actioncreator
export const setUserAuthData = (userId, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: {
			userId,
			email,
			login,
			isAuth
		}
	};
}

//thunkcreator
export const getUserAuthData = () => {
  return (dispatch) => {
    return authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserAuthData(
          data.data.id,
          data.data.email,
          data.data.login,
		  true
        ));
      }
    });
}
}

export const login = (email, password, rememberMe) =>  (dispatch) =>
 {
	 authAPI.authLogin(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
		  dispatch(getUserAuthData())
      } else {
		 let message = data.messages[0] ? data.messages[0] : "error!!!";
		  dispatch(stopSubmit("login", {_error: message}))
		  
	  }
    });
}


export const logout = () =>  (dispatch) => {
    authAPI.authLogout().then((data) => {
      if (data.resultCode === 0) {
		  dispatch(setUserAuthData(null, null, null, false))
      }
    });
}

