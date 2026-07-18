import React from "react";
import type { InventoryProps, ReportProps } from "../../pages/Dashboard/type";
import { useAuth } from "../../context/Auth/useAuth";
import { Reports } from "../../services/reports/reports";

export function useSummary() {
  const [summary, setSummary] = React.useState({} as ReportProps);
  const [inventory, setInventory] = React.useState({} as InventoryProps);
  const [loading, setLoading] = React.useState(true);
  const { token } = useAuth();

  React.useEffect(() => {
    if (!token) return;

    async function loadSummary() {
      try {
        setLoading(true);

        const [summary, inventoryReports] = await Promise.all([
          Reports.GetSummaryReport(token as string),
          Reports.GetInventoryReports(token as string),
        ]);

        setSummary(summary);
        setInventory(inventoryReports);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadSummary();
  }, [token]);

  return { summary, inventory, loading };
}
