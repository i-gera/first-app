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
export const getUserAuthData = () => async(dispatch) => {
    let response = await authAPI.authMe();
    
	if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(
          response.data.data.id,
          response.data.data.email,
          response.data.data.login,
		  true
        ));
      }
    }

export const login = (email, password, rememberMe) =>  async (dispatch) => {
	 let response = await authAPI.authLogin(email, password, rememberMe);
      if (response.data.resultCode === 0) {
		  dispatch(getUserAuthData());
      } 
	  else {
		 let message = response.data.messages[0] ? response.data.messages[0] : "error!!!";
		  dispatch(stopSubmit("login", {_error: message}));		  
	  }
    }

export const logout = () => async(dispatch) => {
    let response = await authAPI.authLogout();
      if (response.data.resultCode === 0) {
		  dispatch(setUserAuthData(null, null, null, false))
      }
    }

