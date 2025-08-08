import React from "react";

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul
      style={{
        width: "100%",

        padding: "0px",
      }}
    >
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textDecoration: todo.completed ? "line-through" : "none",
            gap: "10px",
          }}
        >
          <span
            onClick={() => toggleComplete(index)}
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(index)}
            style={{ fontSize: "1.1rem", padding: "6px 14px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
