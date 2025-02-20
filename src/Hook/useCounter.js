import { useState } from "react";

export const UseCounter = (initiValue = 10) => {
  const [counter, setcounter] = useState(initiValue);

  const increment = ({ value = 2 }) => {
    if (counter == 20) return;
    setcounter(counter + value);
  };

  const decrementar = ({ value = 1 }) => {
    if (counter == 0) return;
    setcounter(counter - value);
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
