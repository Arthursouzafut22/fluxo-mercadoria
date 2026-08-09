import { apiFetch } from "../../api/apiClient";
import type { ProductProps } from "./type";

export class GetProducts {
  public static async execute(): Promise<ProductProps[]> {
    try {
      const result = await apiFetch("/produtos", {
        method: "GET",
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
