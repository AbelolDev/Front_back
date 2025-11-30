import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import NavbarAdmin from "../../../components/NavbarAdmin";
import TablaProductos from "../../../components/AdminTablaProductos";

const urlProductos = "http://localhost:8080/api/products";

const AdminProductos = () => {
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductos = async () => {
    try {
      const response = await axios.get(urlProductos);
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      alert("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  const deleteProducto = async (id) => {
    try {
      await axios.delete(`${urlProductos}/${id}`);
      setProductos((prev) => prev.filter((p) => p.id_producto !== id));
      alert("Producto eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("No se pudo eliminar el producto.");
    }
  };

  const handleEdit = (id) => navigate(`/admin_panel/productos/editar/${id}`);

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro de eliminar este producto?")) {
      deleteProducto(id);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <NavbarAdmin />

      <main className="container my-5">
        <h5>Lista de productos</h5>

        {/* === Botón igual al de AdminUsuarios === */}
        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Link
            to="/admin_panel/productos/producto_nuevo"
            className="btn green tooltipped"
            data-tooltip="Agregar producto"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>

        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div
            style={{
              maxHeight: "420px",
              overflowY: "auto",
              overflowX: "hidden",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              background: "#fafafa",
            }}
          >
            <TablaProductos
              productos={productos}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default AdminProductos;
