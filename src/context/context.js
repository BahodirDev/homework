import { createContext, useContext, useState } from "react";


const ContextState = createContext('');



export const StateComponent =({children})=>{

    const [state,setState] = useState()

    return(
        <ContextState.Provider value={[state,setState]}>
            {children}
        </ContextState.Provider>
    )
}

const useContextState =()=> useContext(ContextState);

export {useContextState};