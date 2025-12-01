import { createContext, useState } from "react";

// 1. Context erstellen - wird als "Container" für geteilte Daten verwendet
export const TodoContext = createContext(null);

// 2. Provider-Komponente - verwaltet den globalen State und stellt ihn bereit
export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(() =>
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const [filter, setFilter] = useState("all");

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const toDos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(toDos));
      return toDos;
    });
  };

  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  // 3. Provider stellt alle Werte über "value" zur Verfügung
  return (
    <TodoContext
      value={{
        todos,
        setTodos,
        filter,
        toggleTodo,
        setFilterInView,
      }}
    >
      {children}
      {/* Alle Kind-Komponenten können jetzt auf den Context zugreifen */}
    </TodoContext>
  );
}
