import axios from "axios";


/**
 * 
 * @param {pass userid} id 
 * @returns userdata
 */
export const getUserData=async(id)=>{
    
    try {
        const res= await axios.get(`https://ramserver54.herokuapp.com/frontendusers/${id}`)
       // console.log(res.data)
        return res.data;
    } catch (error) {
         return alert(error)
    }
}