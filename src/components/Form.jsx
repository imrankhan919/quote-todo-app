import {useContext, useEffect, useState} from "react";
import TodoContext from "../context/todoContext/TodoContext"
import { saveTodo, updateTodo } from "../context/todoContext/TodoActions";

function Form() {
  
  const {dispatch , edit} = useContext(TodoContext)

  const [text , setText] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(edit.isEdit){
      const data = updateTodo(edit.todo.id , text)
      dispatch({
        type : "UPDATE_TODO",
        payload : data
      })
    }else{
      const data = saveTodo(text)
    dispatch({
      type : "SAVE_TODO",
      payload : data
    })
    }

    setText("")
  }


  useEffect(()=>{
    setText(edit.todo.text)
  },[edit])

  
  return (
    <form className="mb-5" onSubmit={(e)=>handleSubmit(e)}>
      <div className="mb-3">
        <input value={text} type="text" className="form-control rounded-0" required onChange={(e)=>setText(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary rounded-0 w-100">
        Save
      </button>
    </form>
  );
}

export default Form;
