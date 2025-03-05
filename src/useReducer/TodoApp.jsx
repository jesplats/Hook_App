import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer.js"
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


let handleDeleteTodo=(id)=>{
 
 console.log({id})
  dispatch({
   type:"[TODO] Remove todo",
   payload:id
 })

} 

let handleToggTodo=(id)=>{
  console.log({id})
  console.log({id})
   dispatch({
    type:"[TODO] Toggle todo",
    payload:id
  })

}

  return (
  <>
 <h1> todo app</h1>
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
