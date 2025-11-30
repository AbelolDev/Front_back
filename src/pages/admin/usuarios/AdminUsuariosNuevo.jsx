import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";

import NavbarAdmin from "../../../components/NavbarAdmin";

const API_URL = "http://localhost:8080/api/users";

const AdminUsuarioNuevo = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [rolId, setRolId] = useState(1);

  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  // Inicializar Materialize (para labels y selects)
  useEffect(() => {
    M.updateTextFields();
  }, []);

  const validarCampos = () => {
    let temp = {};

    if (!nombre.trim()) temp.nombre = "El nombre es obligatorio";
    if (!correo.trim()) {
      temp.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      temp.correo = "Correo inválido";
    }
    if (!clave.trim()) {
      temp.clave = "La contraseña es obligatoria";
    } else if (clave.length < 8) {
      temp.clave = "Debe tener mínimo 8 caracteres";
    }

    setErrores(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCampos()) {
      M.toast({ html: "Revisa los campos marcados", classes: "red" });
      return;
    }

    const payload = {
      nombre,
      correo,
      clave,
      rol: {
        id_rol: Number(rolId),
      },
    };

    try {
      await axios.post(API_URL, payload);

      M.toast({
        html: "Usuario creado correctamente",
        classes: "green",
      });

      navigate("/admin_panel/usuarios");
    } catch (error) {
      console.error("Error al crear usuario:", error);
      M.toast({
        html: "Error al crear usuario",
        classes: "red",
      });
    }
  };

  return (
    <>
      <NavbarAdmin />

      <main className="container my-5">
        <h5 className="mb-4">Agregar Usuario</h5>

        <form onSubmit={handleSubmit}>

          {/* Nombre */}
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="nombre"
                type="text"
                className={errores.nombre ? "invalid" : ""}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="nombre" className="active">Nombre</label>
              {errores.nombre && (
                <span className="helper-text" data-error={errores.nombre}></span>
              )}
            </div>

            {/* Correo */}
            <div className="input-field col s12 m6">
              <input
                id="correo"
                type="email"
                className={errores.correo ? "invalid" : ""}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <label htmlFor="correo" className="active">Correo</label>
              {errores.correo && (
                <span className="helper-text" data-error={errores.correo}></span>
              )}
            </div>
          </div>

          {/* Clave */}
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="clave"
                type="password"
                className={errores.clave ? "invalid" : ""}
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                minLength="8"
              />
              <label htmlFor="clave" className="active">Clave</label>
              {errores.clave && (
                <span className="helper-text" data-error={errores.clave}></span>
              )}
            </div>

            {/* Rol */}
            <div className="input-field col s12 m6">
              <label className="active">Rol</label>
              <select
                className="browser-default"
                value={rolId}
                onChange={(e) => setRolId(e.target.value)}
              >
                <option value="1">Admin</option>
                <option value="2">Cliente</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn green mt-4">
            Guardar
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminUsuarioNuevo;
