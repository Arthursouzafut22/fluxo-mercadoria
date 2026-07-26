export type ProductProps = {
  id: number;
  nome: string;
  categoria: string | null;
  descricao: string | null;
  preco_custo: number;
  preco_venda: number;
  quantidade_estoque: number;
  lucro: number;
  usuario_id: number;
};
