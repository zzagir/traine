/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Note } from "./Note";

// Реализовать интерфейс заметок
// По кнопке + заметки должны добавляться
// Поле ввода должно очищаться после добавления
// Заметки должны хранится в стейте компонента
// Note - компонент одной заметки
// Заметки могут быть с одинаковыми названиями
// Заметки должны удалятся по клику на Note
// Заметки должны быть отсортированы по алфавиту
// Количество заметок должно быть подсчитано в header

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
        },
      ]);
      setText("");
    }
  };

  const handleRemove = (itemId) => {
    setTodos(todos.filter((todo) => todo.id !== itemId));
  };

  return (
    <>
      <div className="header">Notes list, total {todos.length}</div>
      <div className="container">
        {/* button must add notes */}
        <div className="btn" onClick={handleAddTodo}>
          +
        </div>
        <input
          type="text"
          value={text}
          className="textInput"
          autoFocus
          onChange={(e) => setText(e.target.value)}
        />
        {todos
          .sort((a, b) => {
            if (a.text > b.text) return 1;
            if (a.text < b.text) return -1;
            return 0;
          })
          .map((todo) => (
            <div onClick={() => handleRemove(todo.id)} key={todo.id}>
              <Note item={todo.text} />
            </div>
          ))}
      </div>
    </>
  );
};
