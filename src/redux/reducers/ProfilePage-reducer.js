import {
	profileAPI
} from '../../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
	Comments: [{
			id: 1,
			comment: 'Hi, how are you?',
			likes: 20
		},
		{
			id: 2,
			comment: "It's my first blog",
			likes: 25
		},
		{
			id: 3,
			comment: 'blablabla',
			likes: 30
		}
	],
	profile: null,
	status: ""
};

const ProfilePageReducer = (state = initialState, action) => {
	switch (action.type) {

		case (ADD_POST):
			let newPost = action.newPostText;
			return {
				...state,
				Comments: [...state.Comments,
						{
							id: 4,
							comment: newPost,
							likes: 1000
						}
					]
			};

		case (SET_USER_PROFILE):
			return {
				...state, profile: action.profile
			};

		case (SET_USER_STATUS):
			return {
				...state, status: action.status
			};

		default:
			return state;
	}
}

export const addPost = (newPostText) => {
	return {
		type: ADD_POST, 
		newPostText
	};
}

export const setUsersToProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	};
}

export const setStatusToProfile = (status) => {
	return {
		type: SET_USER_STATUS,
		status
	};
}

export const getUsersProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then(response => {
		dispatch(setUsersToProfile(response.data));
	});

}

export const getUsersStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatusToProfile(response.data));
	});

}

export const updateUsersStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatusToProfile(status));
		}
	});

}

export default ProfilePageReducer;