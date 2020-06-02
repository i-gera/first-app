import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import ProfilePageReducer from './reducers/profile-reducer'
import PostsPageReducer from './reducers/posts-reducer'
import FriendsPageReducer from './reducers/friends-reducer'
import authReducer from './reducers/auth-reducer'
import appReducer from './reducers/app-reducer'


let rootReducer = combineReducers({
	PostsPage: PostsPageReducer,
	ProfilePage: ProfilePageReducer,
	FriendsPage: FriendsPageReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.___store = store

export default store