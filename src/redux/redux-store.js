import {
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import ProfilePageReducer from './reducers/ProfilePage-reducer';
import PostsPageReducer from './reducers/PostsPage-reducer';
import FriendsPageReducer from './reducers/FriendsPage-reducer';
import authReducer from './reducers/auth-reducer';
import appReducer from './reducers/app-reducer';


let reducers = combineReducers({
	PostsPage: PostsPageReducer,
	ProfilePage: ProfilePageReducer,
	FriendsPage: FriendsPageReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;