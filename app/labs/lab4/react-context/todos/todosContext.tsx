"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
  todo: Todo;
  setTodo: (t: Todo) => void;
  addTodo: () => void;
  deleteTodo: (id: string) => void;
  updateTodo: () => void;
}

const TodosContext = createContext<TodosState | undefined>(undefined);

export const TodosProvider = ({ children }: { children: ReactNode }) => {

  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" }
  ]);

  const [todo, setTodo] = useState<Todo>({
    id: "-1",
    title: "Learn Mongo"
  });

  const addTodo = () => {
    const newTodo = { ...todo, id: Date.now().toString() };
    setTodos([...todos, newTodo]);
    setTodo({ id: "-1", title: "" });
  };

  const deleteTodo = (id: string) => {
    const filtered = todos.filter((t) => t.id !== id);
    setTodos(filtered);
  };

  const updateTodo = () => {
    const updated = todos.map((t) =>
      t.id === todo.id ? todo : t
    );
    setTodos(updated);
    setTodo({ id: "-1", title: "" });
  };

  return (
    <TodosContext.Provider value={{todos,todo,setTodo,addTodo,deleteTodo,updateTodo}}>
      {children}
    </TodosContext.Provider>
  );
}

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) throw new Error("useTodoshas to be in TodosProvider");
  return context;
};