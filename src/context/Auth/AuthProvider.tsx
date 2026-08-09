import { useState, type PropsWithChildren } from "react";
import { AuthContext } from "./AuthContext";
import { authStorage } from "../../api/authStorage";

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(() =>
    authStorage.getAccessToken()
  );

  function login(accessToken: string, refreshToken: string) {
    authStorage.setTokens(accessToken, refreshToken);
    setToken(accessToken);
  }

  function logout() {
    authStorage.clearTokens();
    setToken(null);
    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
