import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const onChange = ({ target }) => {
    const { value } = target;
    setformState({
      ...formState,
      [target.name]: value,
    });
  };

  let onResetForm =()=>{
    setformState(initialForm)
  }

  //const { username, email, pasword } = formState;

  return {
    ...formState,
    onChange,
    formState,
    onResetForm
  };
};
