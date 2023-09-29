const TodoInput = ({ text, setText, handleAddTodo }) => {
  return (
    <label className="todoLabel">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add todo</button>
    </label>
  );
};
export default TodoInput;
