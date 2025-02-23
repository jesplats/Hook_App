import { useState, useCallback } from "react";
import { ShowIncrement } from "./showincrement";
export const CallbackHook = () => {
  let [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
