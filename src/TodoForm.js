import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ fontSize: "1rem", padding: "10px" }}
      />
      <button type="submit" style={{ fontSize: "1rem", padding: "10px" }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
