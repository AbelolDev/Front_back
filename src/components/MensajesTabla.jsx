import React from "react";

const MensajesTabla = ({ mensajes }) => {
  return (
    <table className="highlight centered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Contenido</th>
        </tr>
      </thead>
      <tbody>
        {mensajes.length === 0 ? (
          <tr>
            <td colSpan="3">No hay mensajes registrados</td>
          </tr>
        ) : (
          mensajes.map((m) => (
            <tr key={m.id_mensaje}>
              <td>{m.id_mensaje}</td>
              <td>{m.usuario}</td>
              <td>{m.contenido}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default MensajesTabla;
