import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import DataLoader from "../components/DataLoader";

const BaseURL = "http://204.236.219.118:8080/api/products";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Inicializar sidenav de Materialize
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  useEffect(() => {
    fetch(BaseURL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data.slice(0, 2));
        } else {
          console.error("API no devolvió un array:", data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <section className="section container my-5 mx-3">
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div className="col s12 m6 left-align">
            <p>
              Nuestra empresa se dedica a la compra y venta de productos en
              línea a través de sus redes,
            </p>
            <p>
              nos preocupa en gran medida el ofrecerle a nuestros clientes
              productos de alta calidad.
            </p>
            <p>
              Llevamos más de 5 años en el mercado y contamos con una confianza
              del consumidor que
            </p>
            <p>
              nos ha permitido consolidarnos como una gran opción para los
              clientes.
            </p>
          </div>

          <div className="col s12 m5">
            <div className="row">
              {products.map((product, index) => (
            <div key={product.id_producto ?? index} className="col s6">
              <ProductCard
                product={{
                  ...product,
                  imagen:
                    product.imagen ||
                    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
                }}
              />
            </div>
          ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
