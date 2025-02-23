
import { useState } from "react";
import { Small } from "./Small";
import { UseCounter } from "../Hook/useCounter";
export const Memorize = () => {
   
    const [show, setshow] = useState(true)

    let {counter,increment}=UseCounter(10);
  
  return (
<>
<h1>counter <Small value={counter} /> </h1>
<hr/>
<button className="btn btn-primary"

onClick={increment} >+1</button>

<button className="btn btn-outline-primary" onClick={()=>setshow(!show)}>show/hiden {JSON.stringify(show)}</button>
</>
  )
}
