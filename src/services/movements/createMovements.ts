import { apiFetch } from "../../api/apiClient";
import type { FormMovementsType } from "../../components/FormMovements/type";

export class CreateMovements {
  public static async execute(data: FormMovementsType, type: string) {
    try {
      const result = await apiFetch(`/movimentacoes/${type}`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error("Erro ao registrar movimentação de entrada.");
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
