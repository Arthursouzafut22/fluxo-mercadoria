import React from "react";
import type { MovementsProps } from "../../services/movements/type";
import { GetMovements } from "../../services/movements/getMovements";
import type { FormMovementsEntryType } from "../../components/FormMovementsEntry/type";
import { CreateMovementsEntry } from "../../services/movements/CreateMovementsEntry";
import { toast } from "react-toastify";

export default function useMovements() {
  const [movements, setMovements] = React.useState<MovementsProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Criar movimentação de entrada...
  async function handleCreateEntryMovementSubmit(data: FormMovementsEntryType) {
    try {
      const payload = await CreateMovementsEntry.execute(data);

      if (payload) {
        setMovements((prevMovements) => [...prevMovements, payload.data]);
        toast.success(
          payload.message || "Movimento de entrada criado com sucesso!"
        );
        return true;
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Erro ao cadastrar movimento de entrada.");
      return false;
    }
  }

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

  return { handleCreateEntryMovementSubmit, movements, loading };
}
