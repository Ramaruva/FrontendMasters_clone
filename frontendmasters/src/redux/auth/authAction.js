import { auth } from "../../firebase/firebase";
import {
  AUHTSUCCESS,
  AUTHFAILURE,
  AUTHLOADING,
  LOGINFAILURE,
  LOGINLOADING,
  LOGINSUCCESS,
  LOGOUTSUCCESS,
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
  const { email, password } = payload;
  
  try {
    await auth.createUserWithEmailAndPassword(email, password);
   return auth.onAuthStateChanged((user) => dispatch(authSuccess(user)));
  } catch (error) {
    dispatch(authFailure(error));
  }
};
  ///Login part
export const loginLoading = () => ({
  type: LOGINLOADING,
});

export const loginFailure = () => ({
  type: LOGINFAILURE,
});

export const loginSuccess = () => ({
  type: LOGINSUCCESS,
});

export const login =(payload)=>async(dispatch)=>
{
    dispatch(loginLoading())
    const {email,password}=payload
    try {
          await auth.signInWithEmailAndPassword(email, password)
          dispatch(loginSuccess())
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logoutSuccess = () =>
(
  {
    type:LOGOUTSUCCESS
  }
)
export const logout =() => async(dispatch)=>
{
  try {
    await auth.signOut();
    dispatch(logoutSuccess())
  } catch (error) {
    
  }
}
