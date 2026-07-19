import { useAuth } from "../../context/Auth/useAuth";
import { Navigate } from "react-router-dom";

export default function HomeRedirect() {
  const { token } = useAuth();

  return token ? (
    <Navigate to={"/dashboard"} replace />
  ) : (
    <Navigate to={"/login"} replace />
  );
}
