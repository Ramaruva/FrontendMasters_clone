//Reducers which accepts state and action , action contains type and payload
//state is initilised to initial state as default
//store contains getState(), and dispatch()--which dispatches the action

import { LEARN_FAILURE, LEARN_REQUEST, LEARN_SUCCESS } from "./learnactionType";

const initialstate = {
	learndata: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
	previewdata: "",
	percentage:0
};

//basically reducer is a switch case function , perform the operation based
//on the type of request it returns defaultly the original state.
export const learnReducer = (state = initialstate, { type, payload }) => {
	switch (type) {
		//filter based on the type of the course
		case LEARN_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case LEARN_SUCCESS:
			return {
				...state,
				learndata: payload,
				isLoading: false,
				isError: false,
				isSuccess: true,
			};
		case LEARN_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};
