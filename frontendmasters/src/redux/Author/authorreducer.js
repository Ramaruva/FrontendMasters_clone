//Reducers which accepts state and action , action contains type and payload
//state is initilised to initial state as default
//store contains getState(), and dispatch()--which dispatches the action

import {
	AUTHOR_FAILURE,
	AUTHOR_REQUEST,
	AUTHOR_SUCCESS,
} from "./authoractionType";

const initialstate = {
	authordata: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
};

//basically reducer is a switch case function , perform the operation based on the type of request
//it returns defaultly the original state.
export const authorReducer = (state = initialstate, { type, payload }) => {
	switch (type) {
		//filter based on the type of the course
		case AUTHOR_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case AUTHOR_SUCCESS:
			// console.log(payload);
			return {
				...state,
				authordata: payload,
				isLoading: false,
				isError: false,
				isSuccess: true,
			};
		case AUTHOR_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
