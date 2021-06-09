//https://ramserver54.herokuapp.com/courses?_sort=rating&_order=DESC
import axios from "axios";
import {
	POPULAR_COURSE_REQUEST,
	POPULAR_COURSE_SUCCESS,
	POPULAR_COURSE_FAILURE,
} from "./popularactionType";
export const popularCourseRequest = () => {
	return {
		type: POPULAR_COURSE_REQUEST,
	};
};
export const popularCourseSuccess = (payload) => {
	return {
		type: POPULAR_COURSE_SUCCESS,
		payload,
	};
};
export const popularCourseFailure = (error) => {
	return {
		type: POPULAR_COURSE_FAILURE,
		payload: error,
	};
};

//Making network request and and displayed based on the rating in desc order

export const FetchPopulardata = (payload) => (dispatch) => {
	//dispatching the requestAction here
	const requestAction = popularCourseRequest();
	dispatch(requestAction);
	return axios
		.get("https://ramserver54.herokuapp.com/courses?_sort=rating&_order=DESC")
		.then((res) => {
			// console.log(res.data);
			//dispatching the successAction here..
			const successAction = popularCourseSuccess(res.data);
			dispatch(successAction);
		})
		.catch((error) => {
			//dispatching the failureAction here..
			const failureAction = popularCourseFailure(error);
			dispatch(failureAction);
		});
};
