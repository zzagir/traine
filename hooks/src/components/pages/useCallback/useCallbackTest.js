import { useCallback, useState } from "react";

function UseCallbackTest() {
  const [name, setName] = useState("Max");

  const age = 22;

  const getName = useCallback(() => console.log(name), [name]);

  getName();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <button
        onClick={() => {
          getName();
        }}
      >
        Get name button
      </button>
      <b>{name}</b>
    </div>
  );
}
export default UseCallbackTest;
