import axios from "axios";
import { auth } from "../../firebase/firebase";
import { userData } from "../user/userAction";
import {
	AUHTSUCCESS,
	AUTHFAILURE,
	AUTHLOADING,
	LOGINFAILURE,
	LOGINLOADING,
	LOGINSUCCESS,
	LOGOUTSUCCESS,
	RESETSUCCESS,
	RESETFAILURE
} from "./authactionTypes";

//signup part
export const authLoading = () => ({
	type: AUTHLOADING,
});

export const authFailure = (payload) => ({
	type: AUTHFAILURE,
	payload,
});

export const authSuccess = (payload) => ({
	type: AUHTSUCCESS,
	payload,
});

export const register = (payload) => async (dispatch) => {
	dispatch(authLoading());
	const { email, password, firstname, lastname } = payload;
	const obj = {
		firstname,
		lastname,
		Beginner: 0,
		Expert: 0,
		Professional: 0,
		JavaScript: 0,
		"Computer Science": 0,
		Fullstack: 0,
		"Design to Code": 0,
		CSS: 0,
		"Node Js": 0,
		"React Js": 0,
		"Vue.js": 0,
		"Angular.js": 0,
		Webpack: 0,
		"Data Visualization with D3.js": 0,
		"Async JS & Rx.js": 0,
		"bookmark":[]
	};

	try {
		await auth.createUserWithEmailAndPassword(email, password);
		return auth.onAuthStateChanged(
      (user) => (
         // eslint-disable-next-line
				dispatch(authSuccess(user)), userDetails({ ...obj, id: user.uid })
			)
		);
	} catch (error) {
		dispatch(authFailure(error));
	}
};
///for userdata
const userDetails = async (obj) => {
	try {
		const res = axios.post(
			"https://ramserver54.herokuapp.com/frontendusers",
			obj
		);
		console.log(res);
	} catch (error) {
		alert("in uploading userdata");
	}
};
///Login part
export const loginLoading = () => ({
	type: LOGINLOADING,
});

export const loginFailure = () => ({
	type: LOGINFAILURE,
});

export const loginSuccess = (payload) => ({
	type: LOGINSUCCESS,
	payload,
});

export const login = (payload) => async (dispatch) => {
	dispatch(loginLoading());
	const { email, password } = payload;
	try {
		await auth.signInWithEmailAndPassword(email, password);
    return auth.onAuthStateChanged(
       // eslint-disable-next-line
			(user) => (dispatch(loginSuccess(user.uid)), dispatch(userData(user.uid)))
		);
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const logoutSuccess = () => ({
	type: LOGOUTSUCCESS,
});
export const logout = () => async (dispatch) => {
	try {
		await auth.signOut();
		localStorage.removeItem("id");
		dispatch(logoutSuccess());
	} catch (error) {}
};

export const resetSuccess =()=>
(
	{
		type:RESETSUCCESS
	}
)
export const resetFailure =()=>
(
	{
		type:RESETFAILURE
	}
)

export const resetpassword =(email)=>async(dispatch)=>
{
	try {
		 await auth.sendPasswordResetEmail(email)
		 dispatch(resetSuccess())
	} catch (error) {
		dispatch(resetFailure())
	}
}