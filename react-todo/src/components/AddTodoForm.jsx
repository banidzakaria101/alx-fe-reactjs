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
        data-testid="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-2 rounded">
        Add
      </button>
    </form>
  );
}
