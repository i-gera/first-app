import {ProfileReducer, actions} from './profile-reducer';
import { ProfileType, CommentsType } from '../../types/types';

let state = {
		Comments: [
			{id: 1, comment: 'Hi, how are you?', likes: 20},
			{id: 2, comment: "It's my first blog", likes: 25},
			{id: 3, comment: 'blablabla', likes: 30}
        ] as Array<CommentsType>,
        newPostText: "",
        profile: null as ProfileType | null,
        status: "",
};
type StateType = typeof state;


test('new post should be added', () => {
	//1. test data
	let action = actions.addPost('new test text');
	
	//action
	let newState = ProfileReducer(state, action );

	//3.expectation
	expect(newState.Comments.length).toBe(4);
}); 

test('comment in new post should be "new test text"', () => {
	//1. test data
	let action = actions.addPost('new test text');
	

	//action
	let newState = ProfileReducer(state, action);

	//3.expectation
	expect(newState.Comments[3].comment).toBe("new test text");
});