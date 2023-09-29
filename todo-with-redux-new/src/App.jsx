import { useState } from "react";
import "./App.css";
import TodoList from "./todo/TodoList";
import TodoInput from "./todo/TodoInput";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="App">
      <TodoInput setText={setText} text={text} handleAddTodo={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
