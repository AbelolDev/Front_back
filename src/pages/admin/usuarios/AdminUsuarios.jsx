import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import UsuarioTable from "../../../components/AdminTablaUsuarios";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const deleteUsuario = async (id) => {
    const confirmDelete = window.confirm("¿Eliminar este usuario?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      setUsuarios((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <>
      <NavbarAdmin />

      <main className="container my-5">
        <h5>Lista de Usuarios</h5>

        {/* botón agregar */}
        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Link
            to="/admin_panel/usuarios/usuario_nuevo"
            className="btn green tooltipped"
            data-tooltip="Agregar usuario"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>

        {loading ? (
          <p>Cargando usuarios...</p>
        ) : (
          <div
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              paddingRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px"
            }}
          >
            <UsuarioTable usuarios={usuarios} onDelete={deleteUsuario} />
          </div>
        )}
      </main>
    </>
  );
};

export default AdminUsuarios;
