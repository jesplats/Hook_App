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

  //const { username, email, pasword } = formState;

  return {
    onChange,
    formState,
  };
};
