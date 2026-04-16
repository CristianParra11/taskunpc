import { useTareas } from "../context/TareasContext";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea, eliminarTarea } = useTareas();

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      opacity: completada ? 0.5 : 1,
      textDecoration: completada ? "line-through" : "none"
    }}>
      <h3>{titulo}</h3>
      <p>{materia}</p>
      <p>{fecha}</p>

      <button onClick={() => toggleTarea(id)}>
        {completada ? "Desmarcar" : "Completar"}
      </button>

      <button onClick={() => eliminarTarea(id)}>
        ❌ Eliminar
      </button>
    </div>
  );
}

export default TareaCard;