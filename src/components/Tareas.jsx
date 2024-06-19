/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Tareas({ tarea, index, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`flex justify-between items-center p-2 border-b ${tarea.completed ? "line-through" : ""}`}
    >
      <span onClick={() => toggleTodo(index)}>{tarea.text}</span>
      <button
        className="bg-red-500 rounded-full text-white p-1 ml-3"
        onClick={() => deleteTodo(index)}
      >
        Delete
      </button>
    </li>
  );
}

export default Tareas;
