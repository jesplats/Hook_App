export let todoReducer = (inititialState = [], action) => {
  switch (action.type) {
    case "Add todo":
      return [...inititialState , action.payload];
    default:
      return inititialState;
  }
};
