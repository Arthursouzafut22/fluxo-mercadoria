import type { LoginForm } from "../pages/Login/types/type";
import { API_URL } from "./api";

export class AuthService {
  public static async Login(data: LoginForm) {
    try {
      const response = await fetch(API_URL + "/autenticacao/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message);
      }
      
      return payload;
    } catch (error: unknown) {
      console.error("Falha na conexeão com API (Error de comunicação)", error);
      throw error;
    }
  }
}
