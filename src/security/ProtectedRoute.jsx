import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { usuario } = useContext(AuthContext);

  if (!usuario || usuario.rol !== "admin") {
    return <Navigate to="/iniciar_sesion" />;
  }

  return children;
}
