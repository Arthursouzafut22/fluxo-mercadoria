import { toast } from "react-toastify";
import { API_URL } from "../api";
import type { ProductProps } from "./type";

export class DeleteProduct {
  public static async execute(
    token: string,
    id: number,
    setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>
  ) {
    try {
      const result = await fetch(API_URL + `/produtos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
      throw error;
    }
  }
}
