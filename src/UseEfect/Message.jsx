import { useEffect } from 'react'
export const Message = () => {
 
 useEffect(() => {
   
   const onMouseMove = ({x,y}) => {
    const coors = {x, y}
    console.log(coors)
   }
   
    window.addEventListener('mousemove', onMouseMove)
 
   return () => {
    window.removeEventListener('mousemove', onMouseMove)
   }
 }, [])
 
 
    return (
   <>
   <h3> existe</h3>
   </>
  )
}

