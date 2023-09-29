import { useEffect, useLayoutEffect, useState } from "react";

function UseEffectTest() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("сработает после изменения одной из deps");
  //   return () => {
  //     console.log("сработает перед изменения одной из deps");
  //   };
  // }, [isLoading]);

  useLayoutEffect(() => {
    console.log("Layout effect");
  }, []);

  useEffect(() => {
    console.log("Effect");
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          isLoading === true ? setIsLoading(false) : setIsLoading(true)
        }
      >
        Set is loading
      </button>
      <div>{isLoading === true ? "true" : "false"}</div>
      <div>{count}</div>
    </div>
  );
}

export default UseEffectTest;
