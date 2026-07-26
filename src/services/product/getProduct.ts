import { API_URL } from "../api";

export class Product {
  public static async getProduct(token: string) {
    try {
      const result = await fetch(API_URL + "/produtos", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error("Erro ao buscar produtos.");
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
