/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Tareas from './Tareas';

function ListaTareas({ listaTareas, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {listaTareas.map((tarea, index) => (
        <Tareas
          key={index}
          tarea={tarea}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
