import { UseCounter } from "../Hook/useCounter";

export const CounterWithCustomHook = () => {

   const {counter,increment,decrementar,reset,setcounter}=UseCounter();

        
   
    return(
        <>
        <h1>Counter With CustomHook.{counter}</h1>
        <hr/>
        <button className="btn btn-primary" onClick={increment} >+1</button>
        <button className="btn btn-primary" onClick={reset}>+Reset</button>
        <button className="btn btn-primary" onClick={decrementar}>-1</button>
    </>
    )
}