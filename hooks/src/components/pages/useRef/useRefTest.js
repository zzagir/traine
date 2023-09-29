import { useLayoutEffect, useRef } from "react";

function UseRefTest() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <div>
      <input ref={inputRef} placeholder="type text" />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default UseRefTest;
