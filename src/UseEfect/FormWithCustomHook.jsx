import {  useState } from "react"
import { Message } from "./Message"
 export const FormWithCustomHook = () => {
 
const [formState, setformState] = useState({

    username: 'jesus plata',
    email: 'jesus@gmail.com',
    pasword: ''
})

const onChange=({target})=>{

    const {value}=target
setformState({
    ...formState,
[target.name]: value
})
}



const {username, email,pasword} = formState

//useEffect(() => {
  //  console.log('cambiado')
//},[formState])

//useEffect(()=>{
  //  console.log('email cambio')
//},[email])
  
    return (
    <>

    <h1>Formulario con customhook</h1>
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

<input
    type="password"
    className="form-control mt-2"
    placeholder="pasword"
    name="email"
    value={pasword}
    onChange={onChange}
    />

    {
        (username === 'jesus plata') && <Message />
    }

    </>
  )


}


