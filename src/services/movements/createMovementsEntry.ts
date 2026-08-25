import { apiFetch } from "../../api/apiClient";
import type { FormMovementsEntryType } from "../../components/FormMovementsEntry/type";

export class CreateMovementsEntry {
  public static async execute(data: FormMovementsEntryType) {
    try {
      const result = await apiFetch("/movimentacoes/entradas", {
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
