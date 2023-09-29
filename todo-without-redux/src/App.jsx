import { useState } from "react";
import "./App.css";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import TodoInput from "./todo/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
    console.log(todos);
  };

  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleToggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <TodoInput handleAddTodo={handleAddTodo} setText={setText} text={text} />

      <TodoList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
}

export default App;
