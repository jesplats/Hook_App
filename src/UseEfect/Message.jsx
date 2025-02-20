import { useEffect } from 'react'
import { useState } from 'react'
export const Message = () => {
 
const  [coors, setcoors] = useState({x:0, y:0})


 useEffect(() => {
 
    
   const onMouseMove = ({x,y}) => {
   //const coors = {x, y}
   setcoors({x,y})
    console.log(coors)
   }
   
    window.addEventListener('mousemove', onMouseMove)
 
   return () => {
    //window.removeEventListener('mousemove', onMouseMove)
   }
 }, [])
 
 
    return (
   <>
   <h3> existe</h3>
   {
    JSON.stringify(coors)
   }
   </>
  )
}

