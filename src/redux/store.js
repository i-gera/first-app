// import BlogsPageReducer from './reducers/BlogsPage-reducer.js';
// import GamePageReducer from './reducers/GamePage-reducer.js';

// let store = {
// 	_state : {
// 		GamePage: {
// 			Dialogs: [
// 				{name: "Gera", id: 1},
// 				{name: "Aibol", id: 2}, 
// 				{name: "Arys", id: 3},
// 				{name: "Arya", id: 4}],
// 			Messages: [
// 				{id: 1, message: "HI!"},
// 				{id: 2, message: "HI!!"}, 
// 				{id: 3, message: "HI!!!"},
// 				{id: 4, message: "HI!!!!"}],
// 			newMessageBody: ""
// 		},
// 		BlogsPage: {
// 			Comments: [
// 		        {id:1, comment: 'Hi, how are you?', likes: 20},
// 		        {id:2, comment: "It's my first blog", likes: 25},
// 		        {id:3, comment: 'blablabla', likes: 30}],
// 		    newPostText: ""
// 		}, 
//		FriendsPage: {
//			users: [
                // {id:1, followed: true, imgUrl: 'https://sun9-61.userapi.com/c848624/v848624970/16c9c9/oMyUBSwOfL0.jpg', name: 'Gera', status: 'I am so happy!', location: {country: 'KZ', city: 'Almaty'}},
                // {id:2, followed: false, imgUrl: 'https://sun9-61.userapi.com/c848624/v848624970/16c9c9/oMyUBSwOfL0.jpg', name: 'Saya', status: 'I like coffee', location: {country: 'KZ', city: 'Astana'}},
                // {id:3, followed: true, imgUrl: 'https://sun9-61.userapi.com/c848624/v848624970/16c9c9/oMyUBSwOfL0.jpg', name: 'Aidana', status: 'I love make up!', location: {country: 'KZ', city: 'Aktobe'}},
                // {id:4, followed: false, imgUrl: 'https://sun9-61.userapi.com/c848624/v848624970/16c9c9/oMyUBSwOfL0.jpg', name: 'Zhadyra', status: 'I am mommy', location: {country: 'KZ', city: 'Shymkent'}},
                // {id:5, followed: true, imgUrl: 'https://sun9-61.userapi.com/c848624/v848624970/16c9c9/oMyUBSwOfL0.jpg', name: 'Zhuldyz', status: 'I am so pretty!', location: {country: 'KZ', city: 'Oskemen'}},
                // {id:6, followed: false, imgUrl: 'https://sun9-61.userapi.com/c848624/v848624970/16c9c9/oMyUBSwOfL0.jpg', name: 'Miza', status: 'I like sport', location: {country: 'KZ', city: 'Aktau'}}
                // ]
// }	
// 	},

// 	_callSubscriber() {
// 		console.log("state changed");
// 	},

// 	getState() {		
// 		return this._state;
// 	},
// 	subscribe(observer) {
// 		this._callSubscriber = observer;
// 	},

// 	dispatch(action){

// 		this._state.BlogsPage = BlogsPageReducer(this._state.BlogsPage, action);
// 		this._state.GamePage = GamePageReducer(this._state.GamePage, action);
		
// 		this._callSubscriber(this._state);	
// 	}
// }

// export default store;
// window.store = store;

// //store - OOP