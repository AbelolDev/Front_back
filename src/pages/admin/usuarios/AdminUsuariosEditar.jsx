import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";
import NavbarAdmin from "../../../components/NavbarAdmin";

const API_URL = "http://204.236.219.118:8080/api/users";

const AdminUsuarioEditar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // ================================
  // Cargar datos del usuario
  // ================================
  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const res = await axios.get(`${API_URL}/${id}`);
        setUsuario(res.data);
        setNombre(res.data.nombre);
        setCorreo(res.data.correo);
      } catch (error) {
        console.error("Error al cargar usuario:", error);
        M.toast({ html: "No se pudo cargar el usuario", classes: "red" });
      } finally {
        setLoading(false);
      }
    };

    fetchUsuario();
  }, [id]);

  // ================================
  // Enviar actualización
  // ================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !correo) {
      M.toast({ html: "Completa todos los campos", classes: "red" });
      return;
    }

    try {
      await axios.put(`${API_URL}/${id}`, {
        nombre,
        correo,
      });

      M.toast({ html: "Usuario actualizado correctamente", classes: "green" });
      navigate("/admin_panel/usuarios");

    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      M.toast({ html: "Error al actualizar usuario", classes: "red" });
    }
  };

  if (loading) return <p>Cargando usuario...</p>;
  if (!usuario) return <p>Usuario no encontrado</p>;

  return (
    <>
      <NavbarAdmin />

      <main className="container my-5">
        <h5>Editar Usuario</h5>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <label className="active">Nombre</label>
          </div>

          <div className="input-field">
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <label className="active">Correo</label>
          </div>

          <button type="submit" className="btn blue">
            Guardar Cambios
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminUsuarioEditar;
