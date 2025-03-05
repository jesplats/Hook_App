export let todoReducer = (inititialState = [], action) => {
  switch (action.type) {
    case "Add todo":
      return [...inititialState, action.payload];
    case "[TODO] Remove todo":
      return inititialState.filter((todos) => todos.id !== action.payload);
    case "[TODO] Toggle todo":
      return inititialState.map(todo=>{
        if(todo.id===action.payload){
          return{
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })
       
      default:
      return inititialState;
  }
};
