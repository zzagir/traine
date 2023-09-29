const TodoItem = ({
  id,
  text,
  completed,
  handleToggleComplete,
  handleRemoveTodo,
}) => {
  return (
    <li className="todoList">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleToggleComplete(id)}
      />
      <span>{text}</span>
      <span onClick={() => handleRemoveTodo(id)}>&times;</span>
    </li>
  );
};
export default TodoItem;
