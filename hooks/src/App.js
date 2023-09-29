import React, { useContext } from "react";
import "./App.css";
import Context from "./components/pages/useContext/context";
import Test from "./components/pages/useEffect/test";
import UseStateTest from "./components/pages/useState/useStateTest";
import Counter from "./components/pages/useContext/context";
import UseEffectTest from "./components/pages/useEffect/useEffectTest";
import UseRefTest from "./components/pages/useRef/useRefTest";
import UseMemoTest from "./components/pages/useMemo/useMemoTest";
import UseCallbackTest from "./components/pages/useCallback/useCallbackTest";
import UseDebugValueTest from "./components/pages/useDebugValue/useDebugValueTest";
import UseReducerTest from "./components/pages/useReducer/useReducerTest";
import UseLocalStorageTest from "./components/pages/useLocalStorage/useLocalStorageTest";

function App() {
  return (
    <div
      style={{ margin: "20px auto", display: "flex", justifyContent: "center" }}
    >
      {/* <Toolbar />
      <Test />
      <Context /> */}
      {/* <Counter /> */}
      {/* <UseStateTest /> */}
      {/* <UseEffectTest /> */}
      {/* <UseRefTest /> */}
      {/* <UseMemoTest /> */}
      {/* <UseCallbackTest /> */}
      {/* <UseDebugValueTest /> */}
      {/* <UseReducerTest /> */}
      <UseLocalStorageTest />
    </div>
  );
}

export default App;
