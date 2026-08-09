import { apiFetch } from "../../api/apiClient";

export class Reports {
  public static async GetSummaryReport() {
    try {
      const response = await apiFetch("/relatorios/resumo", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar relatório.");
      }

      return await response.json();
    } catch (error: unknown) {
      console.log("Falha na conexão com o servidor", error);
      throw error;
    }
  }

  public static async GetInventoryReports() {
    try {
      const response = await apiFetch("/relatorios/estoque", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar informações de estoque.");
      }

      return await response.json();
    } catch (error: unknown) {
      console.log("Falha na conexão com o servidor", error);
      throw error;
    }
  }
}
