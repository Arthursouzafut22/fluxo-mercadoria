import * as S from "./style";
import { COLORS } from "../../styles/Colors";
import type { CardProps } from "./type";
import { formatCurrencyBRL } from "../../utils/formatCurrencyBRL";
import { Skeleton } from "../Skeleton/Skeleton";

export default function CardDashboard({
  Icon,
  title,
  description,
  value,
  defaultColor,
}: CardProps) {
  const isLoading = value === undefined;

  return (
    <S.Card>
      <S.Div>
        <Icon color={COLORS.primary_font_color} size={14} />
        <span>{title}</span>
      </S.Div>
      {isLoading ? (
        <Skeleton height="37px" />
      ) : (
        <S.Value defaultColor={defaultColor}>
          {formatCurrencyBRL(value)}
        </S.Value>
      )}

      <S.Description>{description}</S.Description>
    </S.Card>
  );
}
