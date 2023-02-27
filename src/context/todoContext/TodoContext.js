import { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

const initialState = {
    todos : [],
      edit : {
        todo : {},
        isEdit : false
      }
}



export const TodoProvider = ({children}) => {
    const [state , dispatch]  = useReducer(TodoReducer , initialState)
    return (
        <TodoContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext