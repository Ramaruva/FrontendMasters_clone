import axios from "axios";

//These are the actions for the filtering based on the author_name ...

import {
	AUTHOR_FAILURE,
	AUTHOR_REQUEST,
	AUTHOR_SUCCESS,
} from "./authoractionType";
export const authorRequest = () => {
	return {
		type: AUTHOR_REQUEST
	};
};

export const authorSuceess = (payload) => {
	return {
		type: AUTHOR_SUCCESS,
		payload,
	};
};

export const authorFailure = (error) => {
	return {
		type: AUTHOR_FAILURE,
		payload: error,
	};
};

//we are using thunk middleware function which return function inside function...

//filtering the  based on the author_name...

export const FilterAuthordata = (authorname) => (dispatch) => {
	const requestAction = authorRequest();
	dispatch(requestAction);
	// console.log(authorname);

	//using axios for making network request from server endpoint
	//we are using our own mockserver as database
	return axios
		.get(`https://ramserver54.herokuapp.com/courses?author_name=${authorname}`)
		.then((res) => {
			//dispatching success action here
			const successAction = authorSuceess(res.data);
			dispatch(successAction);

			console.log(res.data);
		})
		.catch((error) => {
			//dispatching error action here
			const failureAction = authorFailure(error);
			dispatch(failureAction);
		});
};
