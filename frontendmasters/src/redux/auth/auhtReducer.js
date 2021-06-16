import { AUHTSUCCESS, AUTHFAILURE, AUTHLOADING, LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTSUCCESS } from "./authactionTypes";

const initstate={
    success:false,
    failure:false,
    loading:false,
    suinfo:"",
    failinfo:"",
    //loginpart
    logLoading:false,
    logFailure:false,
    logSuccess:false,

   // outSuccess:false
}

export const authReducer =(state=initstate, { type, payload })=>
{
    switch (type) {
        case AUTHFAILURE:
            return{
                ...state,
                loading:false,
                failure:true,
                failinfo:payload
            }
        case AUTHLOADING :
            return{
                ...state,
                loading:true
            }
        case AUHTSUCCESS :
            return {
                ...state,
                failure:false,
                loading:false,
                success:true,
                failinfo:"",
                suinfo:payload
            }  
            
         //login parts
         case LOGINLOADING :
             return {
                 ...state,
                 logLoading:true
             }  
         case LOGINFAILURE :
             return {
                 ...state,
                 logLoading:false,
                 logFailure:true
             } 
         case LOGINSUCCESS :
             return {
                 ...state,
                 logLoading:false,
                 logFailure:false,
                 logSuccess:true
             } 
          
             
         case LOGOUTSUCCESS:
             return {
                 ...state,
                 logSuccess:false
             }    
        default:
            return state;
    }
}