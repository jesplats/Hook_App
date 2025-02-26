let initialValue = [
  {
    id: 1,
    name: "John",
    done: true,
  },
];

let Reducer = (state = initialValue, action) => {
  if (action.type === "[ADD_NEW] add addnew") {
    return [...state, action.payload];
  }
  return state;
};

let addnewreducerAction = () => {
  return {
    type: "[ADD_NEW] add addnew",
    payload: newReducer,
  };
};

let newReducer = {
  id: 2,
  name: "Doe",
  done: false,
};

let todo = Reducer(initialValue, addnewreducerAction());
console.log(todo); // [{id:1,name:"John",done:true}]
