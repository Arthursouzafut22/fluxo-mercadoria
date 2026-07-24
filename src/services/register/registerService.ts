import type { FormRegister } from "../../pages/Register/types/type";
import { API_URL } from "../api";

export class RegisterService {
  static async createUser(data: FormRegister) {
    try {
      const result = await fetch(API_URL + "/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error(payload.message);
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
