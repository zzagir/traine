import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos.sort(text),
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <label className="todoLabel">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddTodo}>Add todo</button>
      </label>

      <ul>
        {todos.map((todo) => (
          <li className="todoList" key={todo.id}>
            <span onClick={() => handleRemoveTodo(todo.id)}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
