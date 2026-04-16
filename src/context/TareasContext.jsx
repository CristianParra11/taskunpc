import { createContext, useContext, useState, useEffect } from "react";
import { tareasIniciales } from "../data/tareas";

const TareasContext = createContext();

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const data = localStorage.getItem("tareas");
    return data ? JSON.parse(data) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function agregarTarea(nueva) {
    setTareas([
      ...tareas,
      { ...nueva, id: Date.now(), completada: false }
    ]);
  }

  function toggleTarea(id) {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((t) => t.id !== id));
  }

  return (
    <TareasContext.Provider
      value={{ tareas, agregarTarea, toggleTarea, eliminarTarea }}
    >
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}