import axios from "axios";
import { getData } from "../../localstorage/localstorage";
import { USER_SUCCESS } from "./userActionTypes";

export const userSuccess =(payload)=>(
    {
        type:USER_SUCCESS,
        payload
    }
)

export const userData=(id)=>async(dispatch)=> {
    let i=id||getData("userId");
    try {
        
        const res= await axios.get(`https://ramserver54.herokuapp.com/frontendusers/${i}`)
         dispatch(userSuccess(res.data));
    } catch (error) {
        alert("Failed to get data")
    }
}

export const userPatch =(data,id)=>async(dispatch)=>
{
    try {
        const res= await axios.patch(`https://ramserver54.herokuapp.com/frontendusers/${id}`,data)
        dispatch(userData(id))
    } catch (error) {
      alert("failed to patch the data")   
    }
}