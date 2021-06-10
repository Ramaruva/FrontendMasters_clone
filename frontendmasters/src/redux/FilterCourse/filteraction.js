import axios from "axios";

//There are the actions for the filtering the course based
//on the type of course(React, Redux, Javascript, Nodejs...etc)
import {
	TITLE_FAILURE,
	TITLE_REQUEST,
	TITLE_SUCCESS,
} from "./filteractionType";
export const titleRequest = () => {
	return {
		type: TITLE_REQUEST,
	};
};

export const titleSuceess = (payload) => {
	return {
		type: TITLE_SUCCESS,
		payload,
	};
};

export const titleFailure = (error) => {
	return {
		type: TITLE_FAILURE,
		payload: error,
	};
};

//we are using thunk middleware function which return function inside function...

//filtering the course based on the type...

export const FilterCoursedata = (payload) => (dispatch) => {
	const requestAction = titleRequest();
	dispatch(requestAction);
	console.log(payload);
	//using axios for making network request from server endpoint
	//we are using our own mockserver as database
	return axios
		.get(`https://ramserver54.herokuapp.com/courses?type=${payload}`)
		.then((res) => {
			//dispatching success action here
			const successAction = titleSuceess(res.data);
			dispatch(successAction);
			// FetchCoursedata();

			console.log(res.data);
		})
		.catch((error) => {
			//dispatching error action here
			const failureAction = titleFailure(error);
			dispatch(failureAction);
		});
};
