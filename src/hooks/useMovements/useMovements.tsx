import React from "react";
import type {
  MovementsProps,
  TypeMovements,
} from "../../services/movements/type";
import { GetMovements } from "../../services/movements/getMovements";
import { toast } from "react-toastify";
import { GetMovementsType } from "../../services/movements/getMovementsType";
import { CreateMovements } from "../../services/movements/createMovements";
import type { FormMovementsType } from "../../components/FormMovements/type";
import { UpdateMovements } from "../../services/movements/updateMovements";

export default function useMovements() {
  const [movements, setMovements] = React.useState<MovementsProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [index, setIndex] = React.useState(0);

  // Criar movimentação de entrada...
  async function handleCreateEntryMovementSubmit(
    data: FormMovementsType,
    type: string
  ) {
    try {
      const payload = await CreateMovements.execute(data, type);

      if (payload) {
        setMovements((prevMovements) => [...prevMovements, payload.data]);
        toast.success(
          payload.message || "Movimento de entrada criado com sucesso!"
        );
        return true;
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error("Erro ao cadastrar movimento de entrada.");
      return false;
    }
  }

  // Listar movimentos...
  const fetchAllMovements = React.useCallback(async () => {
    const movementList = await GetMovements.execute();
    setMovements(movementList);
  }, []);

  React.useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        await fetchAllMovements();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [fetchAllMovements]);

  // Filtra os movimentos por tipo (Entrada/Saída).
  async function getMovementsType(
    index: number,
    type: TypeMovements | "todas"
  ) {
    try {
      setIndex(index);
      setLoading(true);
      if (type === "todas") {
        fetchAllMovements();
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

  // Atualizar movimentação..
  async function updateMovements(
    data: FormMovementsType,
    id: number,
    productId: number
  ) {
    try {
      const response = await UpdateMovements.execute(data, id, productId);

      if (response && response.success && response.data) {
        const item = response.data;

        setMovements((prevMovements) =>
          prevMovements.map((movement) =>
            movement.id === id
              ? {
                  ...movement,
                  quantidade: item.quantidade,
                  valor_unitario: item.valor_unitario,
                  valor_total: item.valor_total,
                  observacao: item.observacao,
                }
              : movement
          )
        );

        toast.success(response.message || "Movimento atualizado com sucesso!");
        return true;
      }
    } catch (error: unknown) {
      console.error(error);
      return false;
    }
  }

  return {
    handleCreateEntryMovementSubmit,
    updateMovements,
    movements,
    loading,
    getMovementsType,
    index,
  };
}
