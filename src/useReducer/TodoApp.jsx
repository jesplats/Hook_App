//import { useEffect, useReducer } from "react"
//import { todoReducer } from "./todoReducer.js"
import { TodoList } from "./todoList.jsx"
import { TodoAdd } from "./TodoAdd.jsx"
import { useTodos } from "../Hook/useTodos.jsx"

export const TodoApp = () => {

  let {todos,handleDeleteTodo,handleNewTodo,handleToggTodo,todosCount,pendingCount}=useTodos()
  

  return (
  <>
 <h1> todoapp:{todosCount} <small>Pendiente {pendingCount}</small></h1>
 <hr/>

  <div className="row">
    <div className="col-7">
  <TodoList todos={todos} 
  onDeleteTodo={handleDeleteTodo}
  onToggleTodo={handleToggTodo}
  />   
    </div>
    
    <div className="col-5"> 
        <h4> Agregar Todo</h4>
          <TodoAdd onNewTodo={handleNewTodo}/>
        
        <hr/>

    </div>

  </div>

 
  
 </>
  )
}
