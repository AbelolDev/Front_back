import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminPanelSummary from "../components/AdminPanelSummary";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminCard from "../components/AdminCard";

const urlProductos = "http://localhost:8080/api/products";
const urlUsuarios = "http://localhost:8080/api/users";

const AdminPanel = () => {
  const [sizeProductos, setSizeProductos] = useState(0);
  const [sizeUsuarios, setSizeUsuarios] = useState(0);

  useEffect(() => {
    // Obtener cantidad de productos
    axios
      .get(urlProductos)
      .then((res) => setSizeProductos(res.data.length))
      .catch((err) => console.error("Error fetching productos:", err));

    // Obtener cantidad de usuarios
    axios
      .get(urlUsuarios)
      .then((res) => setSizeUsuarios(res.data.length))
      .catch((err) => console.error("Error fetching usuarios:", err));
  }, []);

  const summaryData = {
    productos: sizeProductos,
    usuarios: sizeUsuarios,
    reportes: 15,
    alertas: 3,
  };

  return (
    <>
      <NavbarAdmin />

      <section className="container my-5">
        <h4 className="center-align">Panel de Administración</h4>
        <AdminPanelSummary data={summaryData} />

        <h5 className="center-align mt-5">Accesos rápidos</h5>
        <div className="row">
          <AdminCard
            icon="shopping_cart"
            iconColor="green-text"
            title="Productos"
            description="Gestiona los productos de la tienda."
            buttonColor="green"
            linkTo="/admin_panel/productos"
          />
          <AdminCard
            icon="group"
            iconColor="blue-text"
            title="Usuarios"
            description="Gestiona los usuarios registrados."
            buttonColor="blue"
            linkTo="/admin_panel/usuarios"
          />
        </div>
      </section>
    </>
  );
};

export default AdminPanel;
