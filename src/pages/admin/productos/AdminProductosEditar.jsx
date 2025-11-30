import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavbarAdmin from "../../../components/NavbarAdmin";

const API_URL = "http://localhost:8080/api/products";

const AdminProductoEditar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // ============================
  // GET: Obtener un producto por ID
  // ============================
  const fetchProducto = async () => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      const data = res.data;

      setNombre(data.nombre);
      setPrecio(data.precio);
      setDescripcion(data.descripcion);
      setStock(data.stock);

      setCargando(false);
    } catch (err) {
      setError("No se pudo cargar el producto.");
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchProducto();
  }, []);

  // ============================
  // PUT: Actualizar un producto
  // ============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/${id}`, {
        nombre,
        precio: Number(precio),
        descripcion,
        stock: Number(stock),
      });

      alert("Producto actualizado correctamente");
      navigate("/admin_panel/productos");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar el producto");
    }
  };

  // ============================
  // Estados de carga / error
  // ============================
  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <NavbarAdmin />

      <main className="container my-5">
        <h5>Editar Producto</h5>

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
              <label className="active" htmlFor="nombre">Nombre del producto</label>
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
              <label className="active" htmlFor="precio">Precio</label>
            </div>

            {/* Descripción */}
            <div className="input-field col s12">
              <textarea
                id="descripcion"
                className="materialize-textarea"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              ></textarea>
              <label className="active" htmlFor="descripcion">Descripción</label>
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
              <label className="active" htmlFor="stock">Stock disponible</label>
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

export default AdminProductoEditar;
