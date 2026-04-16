import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tareas, eliminarTarea } = useTareas();

  const tarea = tareas.find(t => t.id == id);

  if (!tarea) return <p>Tarea no encontrada</p>;

  return (
    <div>
      <h2>{tarea.titulo}</h2>
      <p>Materia: {tarea.materia}</p>
      <p>Fecha: {tarea.fecha}</p>
      <p>Estado: {tarea.completada ? "Completada" : "Pendiente"}</p>

      <button onClick={() => {
        eliminarTarea(tarea.id);
        navigate("/");
      }}>
        Eliminar
      </button>
    </div>
  );
}

export default DetalleTarea;