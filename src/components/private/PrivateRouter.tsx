import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../context/Auth/useAuth";

export default function PrivateRouter({ children }: { children: ReactNode }) {
  const { token } = useAuth();

  return !token ? <Navigate to={"/login"} /> : children;
}
