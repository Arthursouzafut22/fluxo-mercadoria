import { API_URL } from "../api";
import type { ProductProps } from "./type";

export class GetProducts {
  public static async execute(token: string): Promise<ProductProps[]> {
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
