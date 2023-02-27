import { useContext } from 'react'
import TodoContext from '../context/todoContext/TodoContext'
import ListItem from './ListItem'

function ListGroup() {
  
  const {todos} = useContext(TodoContext)
  
  return (
    <ul className="list-group">
        {
          todos.map(todo => <ListItem key={todo.id} todo={todo}/>)
        }
    </ul>
  )
}

export default ListGroup
