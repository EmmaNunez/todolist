/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function Tareas({ tarea, index, alternarTareas, borrarTarea }) {
  return (
    <li
      className={`flex justify-between items-center p-2 border-b m-3 ${tarea.completed ? "line-through" : ""}`}
    >
      <span onClick={() => alternarTareas(index)}>{tarea.text}</span>
      <button
        className="bg-red-600 rounded-e-3xl text-white p-2"
        onClick={() => borrarTarea(index)}
      >
        Delete
      </button>
    </li>
  );
}

export default Tareas;
