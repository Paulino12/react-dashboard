import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"


const INITIAL_STATE = {
    darkMode: true
}



export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)
    const test = "test"
    return (
        <DarkModeContext.Provider value={{
            darkMode: state.darkMode, dispatch, test
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}