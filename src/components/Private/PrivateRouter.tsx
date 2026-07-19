import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Auth/useAuth";

export default function PrivateRouter() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
