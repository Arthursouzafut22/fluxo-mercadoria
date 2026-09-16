import { apiFetch } from "../../api/apiClient";
import type { MovementsProps, TypeMovements } from "./type";

export class GetMovementsType {
  public static async execute(
    type: TypeMovements | "todas"
  ): Promise<MovementsProps[]> {
    try {
      const result = await apiFetch(`/movimentacoes/${type}`, {
        method: "GET",
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error(`Erro ao buscar movimentações do tipo ${type}`);
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
