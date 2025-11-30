import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminProductoNuevo = () => {
  const navigate = useNavigate();

  // Estados según tu API
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  // 🔥 ESTE ES EL HANDLE SUBMIT CORRECTO
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!nombre || !descripcion || !precio || !stock) {
      return alert("Completa todos los campos");
    }

    const nuevoProducto = {
      nombre,
      descripcion,
      precio: Number(precio),
      stock: Number(stock),
    };

    console.log("Enviando a API:", nuevoProducto);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/products",
        nuevoProducto,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Producto creado:", response.data);
      alert("Producto creado correctamente!");

      navigate("/admin_panel/productos");

    } catch (error) {
      console.error("ERROR COMPLETO:", error);

      if (error.response) {
        console.error("STATUS:", error.response.status);
        console.error("DATA:", error.response.data);

        alert("Error al crear producto: " + JSON.stringify(error.response.data));
      } else {
        alert("No se pudo conectar con el servidor");
      }
    }
  };

  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
        <h5>Nuevo Producto</h5>

        <form onSubmit={handleSubmit}>
          <div className="row">

            {/* Nombre */}
            <div className="input-field col s12 m6">
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label htmlFor="nombre">Nombre del producto</label>
            </div>

            {/* Precio */}
            <div className="input-field col s12 m6">
              <input
                id="precio"
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                min="0"
              />
              <label htmlFor="precio">Precio</label>
            </div>

            {/* Descripción */}
            <div className="input-field col s12">
              <textarea
                id="descripcion"
                className="materialize-textarea"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
              <label htmlFor="descripcion">Descripción</label>
            </div>

            {/* Stock */}
            <div className="input-field col s12 m6">
              <input
                id="stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                min="0"
              />
              <label htmlFor="stock">Stock</label>
            </div>
          </div>

          <button type="submit" className="btn green">Guardar</button>
          <button
            type="button"
            className="btn grey ml-2"
            onClick={() => navigate("/admin_panel/productos")}
          >
            Cancelar
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminProductoNuevo;
