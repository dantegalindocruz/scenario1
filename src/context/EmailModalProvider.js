import React, {useContext, useState} from 'react';

// This initializes the context
export const StateContext = React.createContext();

// This hook keeps us from having to import useContext & state context in our other components
export function useStateContext() {
    return useContext(StateContext);
}

// This holds the global state (is deconstructed so that you don't have to pass props property)
export function EmailModalProvider({children}) {
    const openModalAction = () => {
        setNewState({
            ...newState,
            openModal: true
        })
    }

    const closeModalAction = () => {
        setNewState({
            ...newState,
            openModal: false
        })
    }
    const [newState, setNewState] = useState(
        {
            openModal: false,
            openModalAction,
            closeModalAction
        })  
    

    return (
        <StateContext.Provider value={newState}>
            {children}
        </StateContext.Provider>
    )
}