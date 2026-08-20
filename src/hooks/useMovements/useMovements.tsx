import React from "react";
import type { MovementsProps } from "../../services/movements/type";
import { GetMovements } from "../../services/movements/getMovements";

export default function useMovements() {
  const [movements, setMovements] = React.useState<MovementsProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Listar movimentos...
  React.useEffect(() => {
    async function allMovements() {
      try {
        setLoading(true);
        const movementList = await GetMovements.execute();
        setMovements(movementList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    allMovements();
  }, []);

  return { movements, loading };
}
