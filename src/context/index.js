import {useState, createContext, useEffect } from "react";
import axios from "axios";




const UserContext = createContext();

const UserAccess = ({children})=>{
    const [state,setState] = useState({
        token:"",
        user_id:"",
        role:""
      });




    return(
        <UserContext.Provider value={[state , setState]}>
        {children}
        </UserContext.Provider>
    )

}

export {UserContext, UserAccess}