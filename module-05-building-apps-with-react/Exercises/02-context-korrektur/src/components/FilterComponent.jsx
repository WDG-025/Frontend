import { useContext } from "react";
// import { TodoContext } from "../contexts/TodoContext.jsx";
import { TodoReducerContext } from "../contexts/ToDoReducerContext.jsx";

const FilterComponent = () => {
  // const { setFilterInView } = useContext(TodoContext);
  const { setFilter } = useContext(TodoReducerContext);

  return (
    <div className="mb-4 flex space-x-2">
      <button
        type="button"
        onClick={() => setFilter("all")}
        className="bg-gray-900 px-3 py-1 rounded"
      >
        All
      </button>
      <button
        type="button"
        onClick={() => setFilter("active")}
        className="bg-gray-900 px-3 py-1 rounded"
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => setFilter("completed")}
        className="bg-gray-900 px-3 py-1 rounded"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
