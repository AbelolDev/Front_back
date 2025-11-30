import { useState } from "react";

const MensajesForm = () => ({ onSubmit }) => {
  const [usuario, setUsuario] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario.trim() || !contenido.trim()) return;

    onSubmit({ usuario, contenido });
    setContenido("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Enviar mensaje</h3>

      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <textarea
        placeholder="Contenido del mensaje"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default MensajesForm;