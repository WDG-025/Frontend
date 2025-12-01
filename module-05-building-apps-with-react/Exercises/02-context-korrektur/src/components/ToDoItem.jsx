import { useContext } from "react";
import { TodoReducerContext } from "../contexts/ToDoReducerContext.jsx";

const ToDoItem = ({ todo }) => {
  // const { toggleTodo } = useContext(TodoContext);
  const { toggleTodo, deleteTodo } = useContext(TodoReducerContext);

  return (
    <li className="flex items-center mb-2">
      <label className="flex items-center grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <span className={todo.completed ? "line-through" : ""}>
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="ml-2 text-white px-2 py-1 rounded text-sm hover:bg-red-300"
        title="delete"
      >
        ❌
      </button>
    </li>
  );
};

export default ToDoItem;
