import { useState } from "react";

function UseStateTest() {
  const [val, setVal] = useState("");
  const [massiv, setMassiv] = useState("");

  return (
    <div
      style={{
        margin: "20px auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        placeholder="type in text"
        onChange={(e) => setVal(e.target.value)}
        style={{ margin: "20px" }}
      />
      <button
        onClick={() => {
          console.log(massiv);
        }}
      >
        add to massiv
      </button>
      <div>{val}</div>
      <div>{massiv}</div>
    </div>
  );
}
export default UseStateTest;
