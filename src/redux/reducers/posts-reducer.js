const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	Dialogs: [{
			name: "Gera",
			id: 1
		},
		{
			name: "Aibol",
			id: 2
		},
		{
			name: "Arys",
			id: 3
		},
		{
			name: "Arya",
			id: 4
		}
	],
	Messages: [{
			id: 1,
			message: "HI!"
		},
		{
			id: 2,
			message: "HI!!"
		},
		{
			id: 3,
			message: "HI!!!"
		},
		{
			id: 4,
			message: "HI!!!!"
		}
	]
};

const PostsPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case (SEND_MESSAGE):
			let body = action.newMessageBody;
			return {
				...state,
				Messages: [...state.Messages, {
						id: 7,
						message: body
					}]
			};

		default:
			return state;

	}
}

export const sendMessage = (newMessageBody) => {
	return {
		type: SEND_MESSAGE, newMessageBody
	};
}

export default PostsPageReducer;