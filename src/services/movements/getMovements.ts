import { apiFetch } from "../../api/apiClient";
import type { MovementsProps } from "./type";

export class GetMovements {
  public static async execute(): Promise<MovementsProps[]> {
    try {
      const result = await apiFetch("/movimentacoes", {
        method: "GET",
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error("Erro ao buscar movimentações.");
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
