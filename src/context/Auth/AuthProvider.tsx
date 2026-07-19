import { useState, type PropsWithChildren } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState(() => {
    const getToken = localStorage.getItem("token");
    return getToken ? getToken : null;
  });

  function login(token: string) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/login";
  }


  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
