import { useEffect, useState } from "react"

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

useEffect(() => {
    console.log('hey')
})
  
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

    </>
  )
}


