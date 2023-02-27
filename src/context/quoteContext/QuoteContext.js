import QuoteReducer from "./QuoteReducer";

const { createContext, useReducer } = require("react");

const QuoteContext = createContext()

export const QuoteProvider = ({children}) => {
   
    const initialState = {
        quoteData : {
            content : "Jeen K Hai Char Din",
            author : "Sallu Bhai"
        }
    }
   

    const [state , dispatch] = useReducer(QuoteReducer , initialState)

   
    return (
        <QuoteContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </QuoteContext.Provider>
    )
}

export default QuoteContext