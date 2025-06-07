/* eslint-disable @typescript-eslint/no-explicit-any */
import ThemeSwtich from "@/dark-night mode/ThemeSwtich";
import React, { useState } from "react";
import { Todo, useTodoStore } from "./todoStore";

const TodoList: React.FC = () => {
  const {
    todos,
    filter,
    search,
    sortBy,
    sortOrder,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    setFilter,
    setSearch,
    setSortBy,
    setSortOrder,
    clearCompleted,
  } = useTodoStore();

  const [newTodo, setNewTodo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "">("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(
        newTodo.trim(),
        category || undefined,
        priority as "low" | "medium" | "high" | undefined
      );
      setNewTodo("");
      setCategory("");
      setPriority("");
    }
  };

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (editingId !== null && editText.trim()) {
      editTodo(editingId, editText.trim());
      setEditingId(null);
      setEditText("");
    }
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .filter((todo) =>
      search ? todo.text.toLowerCase().includes(search.toLowerCase()) : true
    );

  const sortTodos = (todos: Todo[]) => {
    return [...todos].sort((a, b) => {
      let comparison = 0;

      if (sortBy === "date") {
        comparison =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      } else if (sortBy === "priority") {
        const priorityValue: Record<string, number> = {
          high: 3,
          medium: 2,
          low: 1,
          undefined: 0,
        };
        const aValue = a.priority ? priorityValue[a.priority] : 0;
        const bValue = b.priority ? priorityValue[b.priority] : 0;
        comparison = aValue - bValue;
      } else if (sortBy === "name") {
        comparison = a.text.localeCompare(b.text);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });
  };

  const sortedAndFilteredTodos = sortTodos(filteredTodos);

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      <div className="container max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <ThemeSwtich />
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex mb-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-grow p-3 border rounded-l dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 text-white transition-all bg-blue-600 rounded-r hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (optional)"
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as any)}
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </form>

        <div className="flex flex-col gap-3 mb-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-3 py-1 rounded transition-all ${
                filter === "active"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1 rounded transition-all ${
                filter === "completed"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              Completed
            </button>
          </div>
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search todos..."
              className="w-full p-2 border rounded md:w-auto dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="p-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="date">Date</option>
            <option value="priority">Priority</option>
            <option value="name">Name</option>
          </select>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="p-1 text-sm border rounded dark:border-gray-600"
          >
            {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>

        {sortedAndFilteredTodos.length === 0 ? (
          <div className="p-8 text-center text-gray-500 border border-dashed rounded-lg dark:text-gray-400 dark:border-gray-700">
            <p className="text-xl">No todos found</p>
            <p className="mt-2 text-sm">
              Add a new todo or change your filters
            </p>
          </div>
        ) : (
          <ul className="space-y-2 overflow-y-auto max-h-[400px] rounded-lg border dark:border-gray-700">
            {sortedAndFilteredTodos.map((todo) => (
              <li
                key={todo.id}
                className="p-3 transition-all border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-750 dark:border-gray-700"
              >
                {editingId === todo.id ? (
                  <div className="flex">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-grow p-2 mr-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                      autoFocus
                    />
                    <button
                      onClick={saveEdit}
                      className="px-3 py-1 text-white transition-all bg-green-600 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="w-5 h-5 mr-3 accent-blue-600 dark:accent-blue-500"
                      />
                      <div className="flex flex-col flex-1">
                        <span
                          className={`${
                            todo.completed ? "line-through text-gray-400" : ""
                          } transition-all`}
                        >
                          {todo.text}
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {todo.category && (
                            <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-200">
                              {todo.category}
                            </span>
                          )}
                          {todo.priority && (
                            <span
                              className={`px-2 py-1 text-xs rounded ${getPriorityColor(
                                todo.priority
                              )}`}
                            >
                              {todo.priority}
                            </span>
                          )}
                          <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-400">
                            {new Date(todo.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1 ml-2">
                      <button
                        onClick={() => startEditing(todo)}
                        className="p-1 text-blue-600 transition-all hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeTodo(todo.id)}
                        className="p-1 text-red-600 transition-all hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-3 mt-6 border-t dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {todos.filter((t) => !t.completed).length} items left
          </p>
          <button
            onClick={clearCompleted}
            className="px-3 py-1 text-sm transition-all bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
