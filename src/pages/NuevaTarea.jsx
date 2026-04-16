import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import { useNavigate } from "react-router-dom";

function NuevaTarea() {
  const [form, setForm] = useState({
    titulo: "",
    materia: "",
    fecha: ""
  });

  const { agregarTarea } = useTareas();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    agregarTarea(form);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" placeholder="Título" onChange={handleChange} />
      <input name="materia" placeholder="Materia" onChange={handleChange} />
      <input name="fecha" type="date" onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default NuevaTarea;