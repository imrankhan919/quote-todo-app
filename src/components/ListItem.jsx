import React, { useContext } from 'react'
import {deleteTodo , editTodo} from '../context/todoContext/TodoActions'
import TodoContext from '../context/todoContext/TodoContext'

function ListItem({todo}) {
  

  const {dispatch} = useContext(TodoContext)

  const handleDelete = (id) => {
    const data = deleteTodo(id)

    dispatch({
      type : "DELETE_TODO",
      payload : data
    })

  }
  

  const handleEdit = (todo) => {
    const data = editTodo(todo)
    dispatch({
      type : "EDIT_TODO",
      payload : data
    })
  }

  
  return (
    <li className="list-group-item rounded-0">
        {todo.text}
        <button className="btn btn-danger float-end rounded-0 btn-sm" onClick={()=>handleDelete(todo.id)}>Delete</button>
        <button className="btn btn-warning float-end rounded-0 btn-sm" onClick={()=>handleEdit(todo)}>Edit</button>
    </li>
  )
}

export default ListItem
