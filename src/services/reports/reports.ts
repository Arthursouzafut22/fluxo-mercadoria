import { API_URL } from "../api";

export class Reports {
  public static async GetSummaryReport(token: string) {
    try {
      const response = await fetch(`${API_URL}/relatorios/resumo`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Erro ao buscar relatório");
      }

      return await response.json();
    } catch (error: unknown) {
      console.log("Falha na conexão com o servidor", error);
    }
  }

  public static async GetInventoryReports(token: string) {
    try {
      const response = await fetch(`${API_URL}/relatorios/estoque`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Erro ao buscar informações de estoque");
      }

      return await response.json();
    } catch (error: unknown) {
      console.log("Falha na conexão com o servidor", error);
    }
  }
}
