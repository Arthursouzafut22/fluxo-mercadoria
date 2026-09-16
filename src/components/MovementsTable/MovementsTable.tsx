import { BiPencil } from "react-icons/bi";
import { formatCurrencyBRL } from "../../utils/formatCurrencyBRL";
import * as S from "./style";
import { formatDate } from "../../utils/formatDate";
import { typeLabels, type MovementsTableProps } from "./type";

export default function MovementsTable({
  movements,
  onEdit,
}: MovementsTableProps) {
  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Produto</th>
            <th>Tipo</th>
            <th>Qtd</th>
            <th>Valor un.</th>
            <th>Total</th>
            <th>Obs.</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {movements?.map((movement) => (
            <tr key={movement.id}>
              <td data-label="Data">
                <S.DateText>{formatDate(movement.data_registro)}</S.DateText>
              </td>

              <td data-label="Produto">
                <S.ProductName>{movement.produto_nome}</S.ProductName>
              </td>

              <td data-label="Tipo">
                <S.TypeBadge $type={movement.tipo_movimentacao}>
                  {typeLabels[movement.tipo_movimentacao]}
                </S.TypeBadge>
              </td>

              <td data-label="Qtd">
                <S.Quantity>{movement.quantidade}</S.Quantity>
              </td>

              <td data-label="Valor un.">
                <S.Cost>{formatCurrencyBRL(movement.valor_unitario)}</S.Cost>
              </td>

              <td data-label="Total">
                <S.Total>{formatCurrencyBRL(movement.valor_total)}</S.Total>
              </td>

              <td data-label="Obs.">
                <S.ProductDescription>
                  {movement.observacao ?? "-"}
                </S.ProductDescription>
              </td>

              <td data-label="Ações" className="td-buttoes">
                <S.Actions>
                  <S.IconButton title="Editar" onClick={() => onEdit(movement)}>
                    <BiPencil size={19} />
                  </S.IconButton>
                </S.Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
}
