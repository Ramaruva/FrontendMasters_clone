import axios from "axios";

import {
	COURSE_FAILURE,
	COURSE_REQUEST,
	COURSE_SUCCESS,
	PREVIEW_FAILURE,
	PREVIEW_REQUEST,
	PREVIEW_SUCCESS,
	TITLE_FAILURE,
	TITLE_REQUEST,
	TITLE_SUCCESS,
} from "./actionType";

//actions are accepted type and payload
//These are the action for the displaying all courses in the webpage
export const courseRequest = () => {
	return {
		type: COURSE_REQUEST,
	};
};

export const courseSuceess = (payload) => {
	return {
		type: COURSE_SUCCESS,
		payload,
	};
};

export const courseFailure = (error) => {
	return {
		type: COURSE_FAILURE,
		payload: error,
	};
};

//There are the actions for the filtering the course based
//on the type of course(React, Redux, Javascript, Nodejs...etc)
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

//Action for getting the data when user clicks on get preview button on Allcourse.jsx

export const previewRequest = () => {
	return {
		type: PREVIEW_REQUEST,
	};
};

export const previewSuceess = (payload) => {
	return {
		type: PREVIEW_SUCCESS,
		payload,
	};
};

export const previewFailure = (error) => {
	return {
		type: PREVIEW_FAILURE,
		payload: error,
	};
};

//we are using thunk middleware function which return function inside function...

export const FetchCoursedata = (payload) => (dispatch) => {
	//we are dispatching the request  action here
	const requestAction = courseRequest();
	dispatch(requestAction);
	//using axios for making network request from server endpoint
	//we are using our own mockserver as database
	return axios
		.get("https://ramserver54.herokuapp.com/courses")
		.then((res) => {
			//dispatching success action here
			const successAction = courseSuceess(res.data);
			dispatch(successAction);
			// console.log(res.data);
		})
		.catch((error) => {
			//dispatching error action here
			const failureAction = courseFailure(error);
			dispatch(failureAction);
		});
};

//filtering the course based on the type...
export const FilterCoursedata = (payload) => (dispatch) => {
	const requestAction = titleRequest();
	dispatch(requestAction);
	// console.log(payload);
	//using axios for making network request from server endpoint
	//we are using our own mockserver as database
	return axios
		.get(`https://ramserver54.herokuapp.com/courses?type=${payload}`)
		.then((res) => {
			//dispatching success action here
			const successAction = titleSuceess(res.data);
			dispatch(successAction);
			// FetchCoursedata();

			// console.log(res.data);
		})
		.catch((error) => {
			//dispatching error action here
			const failureAction = titleFailure(error);
			dispatch(failureAction);
		});
};

//https://ramserver54.herokuapp.com/courses/1

//dynamically fetching the data from the server

export const PreviewCoursedata = (payload) => (dispatch) => {
	const requestAction = previewRequest();
	dispatch(requestAction);
	// console.log(payload);
	//using axios for making network request from server endpoint
	//we are using our own mockserver as database
	return axios
		.get(`https://ramserver54.herokuapp.com/courses/${payload}`)
		.then((res) => {
			//dispatching success action here
			const successAction = previewSuceess(res.data);
			dispatch(successAction);
			// FetchCoursedata();

			console.log(res.data);
		})
		.catch((error) => {
			//dispatching error action here
			const failureAction = previewFailure(error);
			dispatch(failureAction);
		});
};
