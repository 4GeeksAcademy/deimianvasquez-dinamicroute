// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    // Provide the store and dispatc method to all child components.

    useEffect(() => {
        const getAllCharacaters = async () => {
            try {

                const response = await fetch(`${store.urlBaseRickAndMorty}/character`)
                const data = await response.json()

                dispatch({
                    type: "ADD_CHARACTERS",
                    payload: data.results
                })

            } catch (error) {
                console.log("error: ", error)
            }
        }
        getAllCharacaters()
    }, [])


    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}