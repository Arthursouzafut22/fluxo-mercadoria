import type { FormProductType } from "../../components/FormProduct/type";
import { API_URL } from "../api";

export class CreateProduct {
  public static async execute(data: FormProductType, token: string) {
    try {
      const result = await fetch(API_URL + "/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const payload = await result.json();

      if (!result.ok) {
        throw new Error("Erro ao criar produto.");
      }

      return payload;
    } catch (error) {
      console.error("Erro detalhado na captura:", error);
      throw error;
    }
  }
}
