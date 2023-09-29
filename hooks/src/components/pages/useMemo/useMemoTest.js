import { useMemo, useRef, useState } from "react";

function UseMemoTest() {
  const [name, setName] = useState("Max");

  const inputRef = useRef("");

  const age = 22;

  const value = useMemo(
    () => ({
      name,
      age,
    }),
    [name]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <input ref={inputRef} placeholder="type name" />
      <button
        onClick={() => {
          setName(inputRef.current.value);
        }}
      >
        Change name
      </button>
      <b>{name}</b>
    </div>
  );
}

export default UseMemoTest;
