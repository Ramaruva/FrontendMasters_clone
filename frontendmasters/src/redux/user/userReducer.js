import { getData, setData } from "../../localstorage/localstorage";
import { USER_SUCCESS } from "./userActionTypes";

const initstate={
    data:getData("userdata")||{}
}

export const userReducer =(state=initstate, { type, payload })=>
{
    switch (type) {
        case USER_SUCCESS:
            setData("userdata", payload)
            return{
                ...state,
                data:payload
            }
    
        default:
            return state
    }
}