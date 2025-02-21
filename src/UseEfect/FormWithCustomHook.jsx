//import {  useState } from "react"
//import { Message } from "./Message"
import { useForm } from "../Hook/useForm" 
export const FormWithCustomHook = () => {
  
       
   let {onChange,formState,onResetForm,email,username,pasword} = useForm(
    {
      username: '',
      email: '',
      pasword: ''
    }
   );

 

   //let {username,email,pasword} = formState;

 // {
    //username: "jesus plata",
    //email: "jesus@gmail.com",
    //pasword: "",
  //}


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
<hr/>
<input
    type="password"
    className="form-control mt-2"
    placeholder="Contraseña"
    name="pasword"
    value={pasword}
    onChange={onChange}
    />

  <hr/>

<button className="btn btn-primary" onClick={onResetForm}>Borrar</button>

    </>
  )

  //{   (username === 'jesus plata') && <Message />}
}


