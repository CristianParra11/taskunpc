import { tareasIniciales } from "../data/tareas";

function Header() {
  const pendientes = tareasIniciales.filter(
    (tarea) => !tarea.completada
  ).length;

  return (
    <div style={{ background: "#282c34", color: "white", padding: "10px" }}>
      <h1>TaskUPC</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </div>
  );
}

export default Header;