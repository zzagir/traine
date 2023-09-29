import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className="todoList">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  );
};
export default TodoItem;
