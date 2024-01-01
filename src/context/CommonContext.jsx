import { createContext, useContext } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'; 


export const myContext=createContext()

const CommonContext = ({children}) => {
    const [state,setState]=useState(0);
    const contextValue={
      state,setState
    }
  return (
   <myContext.Provider value={contextValue}>
    {children}
   </myContext.Provider>
  )
}

export const useCommon=()=>{
  const {state,setState}=useContext(myContext);
  return {state,setState}
}


export default CommonContext;

