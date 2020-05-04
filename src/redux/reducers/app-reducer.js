import { getUserAuthData } from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
	initialized: false
};

//reducer
const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case (INITIALIZED_SUCCESS):
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

export default appReducer;

//actioncreator
export const initializedSuccess = () => {
	return {
		type: INITIALIZED_SUCCESS
	};
}

//thunkcreator
export const initializeApp = () => (dispatch)=> {
 let promise = dispatch(getUserAuthData());
 promise.then(()=>{
	 dispatch(initializedSuccess());
 })
}
