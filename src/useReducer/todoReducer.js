export let todoReducer=(inititialState,action)=>{

switch(action.type){

    case 'ABC':
 throw new Error('Action.type= ABC no se puede hacer esto')
default:
    return inititialState;
}

}