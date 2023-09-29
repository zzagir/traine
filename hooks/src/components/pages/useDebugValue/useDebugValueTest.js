import { useDebugValue, useState } from "react";

function useDebugValueTest() {
  const [name, setName] = useState("Max");
  useDebugValue(() =>
    console.log(name === "Max" ? `Его зовут ${name}` : "Не знаю его вац")
  );
}
export default useDebugValueTest;
