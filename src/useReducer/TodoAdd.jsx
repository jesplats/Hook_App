import React from 'react'

import { useForm } from '../Hook/useForm'
export const TodoAdd = ({onNewTodo}) => {

 let { description,onChange,onResetForm}=useForm({
    description:""
 })

 let onFormSubmit=(event)=>{
  event.preventDefault();
  if (description.leghth<=1) return;
  
   let newTodo={
       id: new Date().getTime(),
       description:description,
       done:false
    }
    onNewTodo && onNewTodo(newTodo);
  }

  return (

    <form  onSubmit={onFormSubmit}> 
            <input
            type="text"
            name="description"
            placeholder="añadir"
            className="form-control"
            value={description}
            onChange={onChange}
            />
            <button
            type="submit"
            className="btn btn-outline-primary mt-2 btn-block"
            >
                Agregar
            </button>
        </form>
  
  )
}
