import React from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import DataLoader from "../../components/DataLoader";
import "../../assets/css/Productos.css";

// Imágenes de stock
const stockImages = [
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a41552238a8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032465179-c1e0fc62c206?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032457862-0e61a8e69d19?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342452485-86f22c0f6f9a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365926-1ffb09d3d2df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a41552238a8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365926-1ffb09d3d2df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365926-1ffb09d3d2df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342452485-86f22c0f6f9a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032457862-0e61a8e69d19?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365926-1ffb09d3d2df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a41552238a8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032465179-c1e0fc62c206?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342452485-86f22c0f6f9a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365926-1ffb09d3d2df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a41552238a8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032465179-c1e0fc62c206?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342452485-86f22c0f6f9a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600185365926-1ffb09d3d2df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1585386959984-a41552238a8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1593032465179-c1e0fc62c206?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503342452485-86f22c0f6f9a?auto=format&fit=crop&w=800&q=80"
];


export default function Productos() {
  const baseURL = "http://localhost:8080/api/products";

  return (
    <>
      <Navbar />
      <section className="productos-container">
        <DataLoader
          endpoint={baseURL}
          renderItem={(product, index) => (
            <ProductCard
              key={product?.id_producto ?? index}
              product={{
                ...product,
                imagen: stockImages[index % stockImages.length],
              }}
            />
          )}
        />
      </section>
    </>
  );
}
