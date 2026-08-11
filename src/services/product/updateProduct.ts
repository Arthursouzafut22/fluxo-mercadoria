import { apiFetch } from "../../api/apiClient";
import type { FormProductUpdateType } from "../../components/FormProductUpdate/type";

export class UpdateProduct {
  public static async execute(data: FormProductUpdateType, id: number) {
    try {
      const result = await apiFetch(`/produtos/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error("Erro ao atualizar produto.");
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
