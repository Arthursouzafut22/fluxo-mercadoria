import { toast } from "react-toastify";
import { apiFetch } from "../../api/apiClient";
import type { ProductProps } from "./type";

export class DeleteProduct {
  public static async execute(
    id: number,
    setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
  ) {
    try {
      const result = await apiFetch(`/produtos/${id}`, {
        method: "DELETE",
      });

      if (!result.ok) {
        throw new Error("Erro ao excluir produto.");
      }

      setProducts((prev) => prev?.filter((item) => item.id !== id));

      if (result.status === 204) {
        toast.success("Produto excluído com sucesso!");
      }

      const text = await result.text();
      const payload = text ? JSON.parse(text) : null;

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      toast.error("Erro ao excluir produto, Tente mais tarde.");
      throw error;
    }
  }
}
