import {
	POPULAR_COURSE_FAILURE,
	POPULAR_COURSE_REQUEST,
	POPULAR_COURSE_SUCCESS,
} from "./popularactionType";

const popularobj = {
	populardata: [],
	isLoading: false,
	isError: false,
	isSuccess: false,
};

// reducer accepts state and action..
//action contians type and payload..

export const popualReducer = (state = popularobj, { type, payload }) => {
	switch (type) {
		case POPULAR_COURSE_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
				isSuccess: false,
			};
		case POPULAR_COURSE_SUCCESS:
			return {
				...state,
				populardata: payload,
				isLoading: false,
				isError: false,
				isSuccess: true,
			};

		case POPULAR_COURSE_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};

		default:
			return state;
	}
};
