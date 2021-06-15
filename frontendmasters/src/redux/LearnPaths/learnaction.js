import axios from "axios";
import { LEARN_FAILURE, LEARN_REQUEST, LEARN_SUCCESS } from "./learnactionType";

//actions are accepted type and payload
//These are the action for the displaying all courses in the webpage
export const learnRequest = () => {
	return {
		type: LEARN_REQUEST,
	};
};

export const learnSuceess = (payload) => {
	return {
		type: LEARN_SUCCESS,
		payload,
	};
};

export const learnFailure = (error) => {
	return {
		type: LEARN_FAILURE,
		payload: error,
	};
};

//filtering the course based on the type..like....beginners, fullstack, professional, export
export const FilterLearndata = (payload) => (dispatch) => {
	const requestAction = learnRequest();
	dispatch(requestAction);
	// console.log(payload);
	//using axios for making network request from server endpoint
	//we are using our own mockserver as database
	return axios
		.get(`https://ramserver54.herokuapp.com/profeesional?level=${payload}`)
		.then((res) => {
			//dispatching success action here
			const successAction = learnSuceess(res.data);
			dispatch(successAction);

			console.log(res.data);
		})
		.catch((error) => {
			//dispatching error action here
			const failureAction = learnFailure(error);
			dispatch(failureAction);
		});
};
