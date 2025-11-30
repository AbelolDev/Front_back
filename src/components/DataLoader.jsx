import { useState, useEffect } from "react";
import axios from "axios";

export default function DataLoader({ endpoint, renderItem }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]); // <- aquí usamos la prop endpoint

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || (Array.isArray(data) && data.length === 0)) return <div>No data found</div>;

  // Si data no es un array, lo convertimos en array
  const items = Array.isArray(data) ? data : [data];

  return <>{items.map(renderItem)}</>;
}
