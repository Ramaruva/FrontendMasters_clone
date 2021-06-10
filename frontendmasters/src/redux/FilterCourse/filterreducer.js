//Reducers which accepts state and action , action contains type and payload
//state is initilised to initial state as default
//store contains getState(), and dispatch()--which dispatches the action

import {
	TITLE_FAILURE,
	TITLE_REQUEST,
	TITLE_SUCCESS,
} from "./filteractionType";

const initialstate = {
	filterdata: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
};

//basically reducer is a switch case function , perform the operation based on the type of request
//it returns defaultly the original state.
export const filterReducer = (state = initialstate, { type, payload }) => {
	switch (type) {
		//filter based on the type of the course
		case TITLE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case TITLE_SUCCESS:
			console.log(payload);
			return {
				...state,
				filterdata: payload,
				isLoading: false,
				isError: false,
				isSuccess: true,
			};
		case TITLE_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
