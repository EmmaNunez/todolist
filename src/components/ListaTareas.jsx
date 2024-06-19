/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Tareas from './Tareas';

function ListaTareas({ listaTareas, alternarTareas, borrarTarea }) {
  return (
    <ul>
      {listaTareas.map((tarea, index) => (
        <Tareas
          key={index}
          tarea={tarea}
          index={index}
          alternarTareas={alternarTareas}
          borrarTarea={borrarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
