import  { useState } from 'react';
export const Counter=()=>{
    
     const [primero,setprimero]=useState({
      counter1:10,
      counter2:20,
      counter3:30

      
     });
    
        const {counter1,counter2,counter3}=primero;
          
    return(
      <>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      <h1>{counter3}</h1>
      <hr/>
      <button className='btn' onClick={()=>setprimero({
        ...primero,counter1:counter1+1
})
        } >+1</button>
      
      </>
    )
} 