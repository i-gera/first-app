import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose,
    Action
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {ProfileReducer} from './reducers/profile-reducer'
import {PostsReducer} from './reducers/posts-reducer'
import {FriendsReducer} from './reducers/friends-reducer'
import {authReducer} from './reducers/auth-reducer'
import {appReducer} from './reducers/app-reducer'
import { ThunkAction } from 'redux-thunk'

let rootReducer = combineReducers({
	PostsPage: PostsReducer,
	ProfilePage: ProfileReducer,
	FriendsPage: FriendsReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

//type for action
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never
// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
// export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

//type for thunk
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.___store = store

export default store