import profileReducer, {addPost} from './profile-reducer';

let state = {
		Comments: [
			{id: 1, comment: 'Hi, how are you?', likes: 20},
			{id: 2, comment: "It's my first blog", likes: 25},
			{id: 3, comment: 'blablabla', likes: 30}
		]
};

test('new post should be added', () => {
	//1. test data
	let action = addPost('new test text');
	
	//action
	let newState = profileReducer(state, action);

	//3.expectation
	expect(newState.Comments.length).toBe(4);
}); 

test('comment in new post should be "new test text"', () => {
	//1. test data
	let action = addPost('new test text');
	

	//action
	let newState = profileReducer(state, action);

	//3.expectation
	expect(newState.Comments[3].comment).toBe("new test text");
});