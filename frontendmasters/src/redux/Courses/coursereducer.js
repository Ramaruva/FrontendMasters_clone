//Reducers which accepts state and action , action contains type and payload
//state is initilised to initial state as default
//store contains getState(), and dispatch()--which dispatches the action

import {
	COURSE_FAILURE,
	COURSE_REQUEST,
	COURSE_SUCCESS,
	TITLE_FAILURE,
	TITLE_REQUEST,
	TITLE_SUCCESS,
	PREVIEW_FAILURE,
	PREVIEW_REQUEST,
	PREVIEW_SUCCESS,
} from "./actionType";

const initialstate = {
	coursedata: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
	previewdata:""
};

//basically reducer is a switch case function , perform the operation based on the type of request
//it returns defaultly the original state.
export const courseReducer = (state = initialstate, { type, payload }) => {
	switch (type) {
		case COURSE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case COURSE_SUCCESS:
			return {
				...state,
				coursedata: payload,
				isLoading: false,
				isError: false,
				isSuccess: true,
			};
		case COURSE_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		//filter based on the type of the course
		case TITLE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case TITLE_SUCCESS:
			return {
				...state,
				coursedata: payload,
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
		//based on ID , we are diplaying data to user
		case PREVIEW_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case PREVIEW_SUCCESS:
			return {
				...state,
				previewdata: payload,
				isLoading: false,
				isError: false,
				isSuccess: true,
			};
		case PREVIEW_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
