import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="todo-input"
        className="border rounded p-1 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-2 rounded">
        Add
      </button>
    </form>
  );
}
