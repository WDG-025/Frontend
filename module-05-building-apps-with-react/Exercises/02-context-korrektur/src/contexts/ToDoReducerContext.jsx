import { createContext, useEffect, useReducer } from "react";

export const TodoReducerContext = createContext();

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  filter: "all", // "all", "completed", "active"
};

// Reducer-Funktion: definiert wie State basierend auf Actions verändert wird
function reduce(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      // {} für eigenen scope
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const todos = [newTodo, ...state.todos];
      localStorage.setItem("todos", JSON.stringify(todos));
      return { ...state, todos }; // alle returns müssen eine neue Kopie eines vollständigen state-Objekts zurückgeben (immutable pattern)
    }
    case "FILTER_TODO": {
      const filter = action.payload; // "all", "completed", "active"
      return { ...state, filter: filter };
    }
    case "TOGGLE_TODO": {
      const todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { ...state, todos };
    }
    case "DELETE_TODO": {
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos };
    }
    default:
      throw new Error("Unknown action", action.type); // Error für uns als Entwickler gedacht
  }
}

export default function TodoReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reduce, initialState);

  // Speichere Todos im LocalStorage, wenn sie sich ändern
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  // Action Creator Funktionen - kapseln dispatch-Aufrufe
  function addTodo(text) {
    dispatch({ type: "ADD_TODO", payload: text });
  }
  function setFilter(filter) {
    dispatch({ type: "FILTER_TODO", payload: filter });
  }
  function toggleTodo(id) {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }
  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", payload: id });
  }

  return (
    <TodoReducerContext
      value={{
        todos: state.todos,
        filter: state.filter,
        addTodo,
        setFilter,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoReducerContext>
  );
}
