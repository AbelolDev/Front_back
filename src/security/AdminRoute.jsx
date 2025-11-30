import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user, role } = useContext(AuthContext);

  if (!user) return <Navigate to="/iniciar_sesion" />;
  if (role !== "ADMIN") return <Navigate to="/" />;

  return children;
}
