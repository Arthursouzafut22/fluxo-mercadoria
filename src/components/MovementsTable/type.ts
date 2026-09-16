import {
  TypeMovements,
  type MovementsProps,
} from "../../services/movements/type";

export const typeLabels: Record<TypeMovements, string> = {
  [TypeMovements.Entrada]: "Entrada",
  [TypeMovements.Saida]: "Saída",
};

export type MovementsTableProps = {
  movements: MovementsProps[];
  onEdit: (movement: MovementsProps) => void;
};
