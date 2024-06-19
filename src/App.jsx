/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ListaTareas from './components/ListaTareas';

function App() {
  const [listaTareas, setListaTareas] = useState([]); // arreglo vacio para las tareas
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => { 
    if (nuevaTarea.trim() !== "") { // evaluamos si lo que ingresamos no está vacío, trim
      setListaTareas([...listaTareas, { text: nuevaTarea, completed: false }]);
      setNuevaTarea("");
    }
  };

  const alternarTareas = (index) => {
    const actualizarTareas = listaTareas.map((tarea, i) =>
      i === index ? { ...tarea, completed: !tarea.completed } : tarea
    );
    setListaTareas(actualizarTareas);
  };

  const borrarTarea = (index) => {
    setListaTareas(listaTareas.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-500 flex p-10 items-start justify-center">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl text-center font-bold mb-4 ">LISTA DE TAREAS</h1>
        <div className="mb-4">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="Agregar NuevaTarea" //texto que se muestra cuando el
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
          />
          <button
            className="bg-green-600 text-white p-2 mt-3 rounded-full  "
            onClick={agregarTarea}
  
          >
            Agregar
          </button>
        </div>
        <ListaTareas
          listaTareas={listaTareas}
          alternarTareas={alternarTareas}
          borrarTarea={borrarTarea}
        />
      </div>
    </div>
  );
}

export default App;
