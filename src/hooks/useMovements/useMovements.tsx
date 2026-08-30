import React from "react";
import type { MovementsProps } from "../../services/movements/type";
import { GetMovements } from "../../services/movements/getMovements";
import type { FormMovementsEntryType } from "../../components/FormMovementsEntry/type";
import { toast } from "react-toastify";
import { CreateMovementsEntry } from "../../services/movements/createMovementsEntry";
import { GetMovementsType } from "../../services/movements/getMovementsType";

export default function useMovements() {
  const [movements, setMovements] = React.useState<MovementsProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [index, setIndex] = React.useState(0);

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

  // Filtra os movimentos por tipo (Entrada/Saída).
  async function getMovementsType(index: number, type: string) {
    try {
      setIndex(index);
      setLoading(true);
      if (type === "todas") {
        const movementList = await GetMovements.execute();
        setMovements(movementList);
        return;
      }
      const movementListType = await GetMovementsType.execute(type);
      setMovements(movementListType);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    handleCreateEntryMovementSubmit,
    movements,
    loading,
    getMovementsType,
    index,
  };
}
