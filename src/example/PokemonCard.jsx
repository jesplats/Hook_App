import  { useState } from "react";
import  { useLayoutEffect, useRef } from "react";
export const PokemonCard = ({ id, Sprite,name = [] }) => {
    let h2ref = useRef();
    
    let  [obtenercor, setobtenercor] = useState({height:0,width:0});

useLayoutEffect(()=>{
  let {height,width}=h2ref.current.getBoundingClientRect(); 
  setobtenercor({height,width});
  console.log(height,width);


},[name])

  
  
   
  return (
      <section style={{ height: 200 ,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2 ref={h2ref}  >{id} - {name} </h2>
      
      <div>
        {
            Sprite.map((img, index) => (
                <img key={index} src={img} alt={name} />
            ))
            }
      </div>
     <pre>{JSON.stringify(obtenercor)}</pre>
      
      </section>
      

     
    );
  };
  