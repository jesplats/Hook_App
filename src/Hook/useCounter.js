import { useState } from "react";

export const UseCounter = (initiValue ) => {
  const [counter, setcounter] = useState(initiValue);

  const increment = ({ value = 1 }) => {
    if (counter ==20) return;
    setcounter(counter + value);
  };

  const decrementar = ({ value = 1 }) => {
    if (counter == 0) return;
    if(counter >1){  setcounter(counter - value);}
  
  };

  const reset = () => {
    setcounter(initiValue);
  };

  return {
    counter,
    increment,
    decrementar,
    reset,
  };
};
