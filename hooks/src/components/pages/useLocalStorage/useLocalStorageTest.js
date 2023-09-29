import { useEffect, useState } from "react";

function UseLocalStorageTest() {
  const [name, setName] = useState("");
  const [nameVal, setNameVal] = useState("");

  useEffect(() => {
    setNameVal(localStorage.getItem("name"));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>{nameVal}</h1>

      <input
        defaultValue={nameVal}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          localStorage.setItem("name", name);
          setNameVal(localStorage.getItem("name"));
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default UseLocalStorageTest;
