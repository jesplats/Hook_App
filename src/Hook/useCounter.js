import { useState } from "react";

export const UseCounter = (initiValue = 10) => {
  const [counter, setcounter] = useState(initiValue);

  const increment = () => {
    setcounter(counter + 1);
  };

  const decrementar = () => {
    if (counter == 0) return;
    setcounter(counter - 1);
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
