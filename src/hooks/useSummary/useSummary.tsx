import React from "react";
import type { InventoryProps, ReportProps } from "../../pages/Dashboard/type";
import { Reports } from "../../services/reports/reports";

export function useSummary() {
  const [summary, setSummary] = React.useState({} as ReportProps);
  const [inventory, setInventory] = React.useState({} as InventoryProps);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadSummary() {
      try {
        setLoading(true);

        const [summary, inventoryReports] = await Promise.all([
          Reports.GetSummaryReport(),
          Reports.GetInventoryReports(),
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
  }, []);

  return { summary, inventory, loading };
}
