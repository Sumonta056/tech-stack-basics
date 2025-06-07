import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  category?: string;
  priority?: "low" | "medium" | "high";
};

type TodoStore = {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  search: string;
  sortBy: "date" | "priority" | "name";
  sortOrder: "asc" | "desc";
  addTodo: (
    text: string,
    category?: string,
    priority?: "low" | "medium" | "high"
  ) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  setSearch: (search: string) => void;
  setSortBy: (sortBy: "date" | "priority" | "name") => void;
  setSortOrder: (sortOrder: "asc" | "desc") => void;
  clearCompleted: () => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      filter: "all",
      search: "",
      sortBy: "date",
      sortOrder: "desc",
      addTodo: (text, category, priority) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text,
              completed: false,
              createdAt: new Date().toISOString(),
              category,
              priority,
            },
          ],
        })),
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      editTodo: (id, text) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        })),
      setFilter: (filter) => set({ filter }),
      setSearch: (search) => set({ search }),
      setSortBy: (sortBy) => set({ sortBy }),
      setSortOrder: (sortOrder) => set({ sortOrder }),
      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),
    {
      name: "todo-storage",
    }
  )
);
