import {  useState } from "react"
import { Message } from "./Message"
 export const SimpleForm = () => {
 
const [formState, setformState] = useState({

    username: 'jesus plata',
    email: 'jesus@gmail.com'
})

const onChange=({target})=>{

    const {value}=target
setformState({
    ...formState,
[target.name]: value
})
}



const {username, email} = formState

//useEffect(() => {
  //  console.log('cambiado')
//},[formState])

//useEffect(()=>{
  //  console.log('email cambio')
//},[email])
  
    return (
    <>
    <h1>Simple Form</h1>
    <hr />
    <input
    type="text"
    className="form-control"
    placeholder="username"
    name="username"
    value={username}
    onChange={onChange}
   
    />

<hr />

    <input
    type="email"
    className="form-control mt-2"
    placeholder="jesusp@gmail.com"
    name="email"
    value={email}
    onChange={onChange}
    />
    {
        (username === 'jesus plata') && <Message />
    }

    </>
  )


}


