
import { useState } from "react";
import { useRef } from "react";
export const FocusScreen = () => {

  let inputref=useRef();
  let [name,setname]=useState('');
  
let cambiarnombre=(event)=>{
  setname(event.target.value); //cambiar el valor del state name por el valor del input
}



 let handleClick=()=>  {
    //document.querySelector('input').select();
    //console.log(inputref);
   inputref.current.select();
 }
  
  return (
    <>

<h1>Focus Screen</h1>
<hr/>
<input
ref={inputref}
type="text"
placeholder="Ingrese su nombre"
className="form-control"
onChange={cambiarnombre}

/>
<hr/>
<input
ref={inputref}
type="text"
placeholder="Ingrese su nombre"
className="form-control"
//onChange={cambiarnombre}

/>

<button className="btn btn-primary mt-3" onClick={handleClick}>
    set focus
</button>
<h1>{name}</h1>
    </>
  )
}
