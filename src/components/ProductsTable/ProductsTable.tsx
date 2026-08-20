import { BiPencil } from "react-icons/bi";
import * as S from "./style";
import { FiTrash2 } from "react-icons/fi";
import { formatCurrencyBRL } from "../../utils/formatCurrencyBRL";
import type { ProductsTableProps } from "./type";

export function ProductsTable({
  products,
  openModalDelete,
  openModal,
}: ProductsTableProps) {
  const sortedProducts = products.sort((a, b) => a.id - b.id);

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Custo</th>
            <th>Venda</th>
            <th>Estoque</th>
            <th>Lucro Un.</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {sortedProducts &&
            sortedProducts.map((product) => (
              <tr key={product.id}>
                <td data-label="Nome">
                  <S.ProductInfo>
                    <S.ProductName>{product.nome}</S.ProductName>
                    <S.ProductDescription>
                      {product.descricao}
                    </S.ProductDescription>
                  </S.ProductInfo>
                </td>

                <td data-label="Custo">
                  <S.Cost>{formatCurrencyBRL(product.preco_custo)}</S.Cost>
                </td>

                <td data-label="Venda">
                  <S.SellingPrice>
                    {formatCurrencyBRL(product.preco_venda)}
                  </S.SellingPrice>
                </td>

                <td data-label="Estoque">
                  <S.Stock>{product.quantidade_estoque}</S.Stock>
                </td>

                <td data-label="Lucro Un.">
                  <S.Profit>
                    {formatCurrencyBRL(Math.abs(product.lucro))}
                  </S.Profit>
                </td>

                <td data-label="Ações" className="td-buttoes">
                  <S.Actions>
                    <S.IconButton
                      title="Editar"
                      onClick={() => openModal(product)}
                    >
                      <BiPencil size={19} />
                    </S.IconButton>

                    <S.DeleteButton
                      title="Excluir"
                      onClick={() => {
                        openModalDelete(product);
                      }}
                    >
                      <FiTrash2 />
                    </S.DeleteButton>
                  </S.Actions>
                </td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
}
