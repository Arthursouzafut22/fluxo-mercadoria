export const TypeMovements = {
  Entrada: 1,
  Saida: 2,
} as const;

export type TypeMovements = (typeof TypeMovements)[keyof typeof TypeMovements];

export type MovementsProps = {
  id: number;
  produto_id: number;
  produto_nome: string;
  usuario_id: number;
  tipo_movimentacao: TypeMovements;
  quantidade: number;
  valor_unitario: number;
  valor_total: number;
  observacao: string | null;
  data_registro: Date;
};
