

// Save Todo
export const saveTodo = (text) => {
    const newTodo = {
      id : crypto.randomUUID(),
      text : text
    }

    return newTodo
    
  }

  // Delete Todo
  export const deleteTodo = (id) => {
   return id
  }


  // Edit Todo
  export const editTodo  = (todo) => {
    return todo
  }

  // Update Todo
  export const updateTodo = (id , text) => {
    return {id , text}
  }