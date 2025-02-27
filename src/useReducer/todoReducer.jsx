import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./todoList.jsx"
import { TodoAdd } from "./TodoAdd.jsx"
let initialState=[{
    id: new Date().getTime(),
    description:"Recolectar thanos",
    done:false ,
 },
 {
    id: new Date().getTime()*3,
    description:"Recolectar piedras",
    done:false ,
 },

]


export const TodoApp = () => {
   
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  
  
let handleNewTodo=(todo)=>{
console.log({todo})
}

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
