import React, { createContext, useEffect, useState } from "react"
import axios from "axios";
export const AppContext = createContext();

 const init={
     plan:"Monthly",
     price:"39$"

}

export const AppContextProvider=({children})=>{
    const [price,setprice] = useState(init)
    const [ispay, setispay] = useState(false)

    const value ={
        price,
        setprice,
        ispay,
        setispay
    }
    return(
        <>
            <AppContext.Provider value={value}>{children}</AppContext.Provider>
        </>
    )
} 