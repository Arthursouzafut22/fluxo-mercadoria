import { toast } from "react-toastify";
import { apiFetch } from "../../api/apiClient";
import type { FormMovementsType } from "../../components/FormMovements/type";

export class UpdateMovements {
  public static async execute(
    data: FormMovementsType,
    id: number,
    productId: number
  ) {
    try {
      const result = await apiFetch(`/movimentacoes/${id}/${productId}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      const payload = await result.json();

      if (!result.ok) {
        toast.error(payload.message);
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
