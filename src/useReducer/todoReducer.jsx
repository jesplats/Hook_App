import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./todoList.jsx"
import { TodoAdd } from "./TodoAdd.jsx"
let initialState=[
  
  //{
    
  
  //id: new Date().getTime(),
    //description:"Recolectar thanos",
   // done:false ,
 //},


]
 let init=()=>{
  return JSON.parse(localStorage.getItem("todos")) || []
 }

export const TodoApp = () => {
   
  const [todos, dispatch] = useReducer(todoReducer, initialState,init)
  
  useEffect(() => {
console.log(todos)
localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


let handleNewTodo=(todos)=>{
  let action={ 
  type:"Add todo",
   payload:todos
}
dispatch(action)}

  return (
  <>
 <h1> todo app</h1>
 <hr/>

  <div className="row">
    <div className="col-7">
  <TodoList todos={todos}/>   
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
