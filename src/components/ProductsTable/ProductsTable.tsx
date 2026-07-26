import { BiPencil } from "react-icons/bi";
import * as S from "./style";
import { FiTrash2 } from "react-icons/fi";
import useProduct from "../../hooks/useProduct/useProduct";
import { formatCurrencyBRL } from "../../utils/formatCurrencyBRL";

export function ProductsTable() {
  const { products } = useProduct();
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
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <S.ProductInfo>
                    <S.ProductName>{product.nome}</S.ProductName>
                    <S.ProductDescription>
                      {product.descricao}
                    </S.ProductDescription>
                  </S.ProductInfo>
                </td>

                <td>
                  <S.Cost>{formatCurrencyBRL(product.preco_custo)}</S.Cost>
                </td>

                <td>
                  <S.SellingPrice>
                    {formatCurrencyBRL(product.preco_venda)}
                  </S.SellingPrice>
                </td>

                <td>
                  <S.Stock>{product.quantidade_estoque}</S.Stock>
                </td>

                <td>
                  <S.Profit>
                    {formatCurrencyBRL(Math.abs(product.lucro))}
                  </S.Profit>
                </td>

                <td className="td-buttoes">
                  <S.Actions>
                    <S.IconButton title="Editar">
                      <BiPencil size={19} />
                    </S.IconButton>

                    <S.DeleteButton title="Excluir">
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
