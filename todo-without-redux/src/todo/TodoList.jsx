import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleToggleComplete, handleRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          handleToggleComplete={handleToggleComplete}
          handleRemoveTodo={handleRemoveTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
