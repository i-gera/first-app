import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import ProfilePageReducer from './reducers/profile-reducer';
import PostsPageReducer from './reducers/posts-reducer';
import FriendsPageReducer from './reducers/friends-reducer';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.___store = store;

export default store;