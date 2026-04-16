import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import TareaCard from "./TareaCard";

function ListaTareas() {
  const { tareas } = useTareas();

  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <h2>Lista de Tareas</h2>

      {/* BOTONES DE FILTRO */}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      {/* LISTA */}
      {tareasFiltradas.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;