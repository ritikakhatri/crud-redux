

const initialState = [];

const postReducer =(state = initialState, action)=>{
	switch (action.type) {
		case 'ADD_POSTS':
			return state.concat(action.payload);
		default:
			return state
	}
}

export default postReducer;