import CardDashboard from "../../components/CardDashboard/CardDashboard";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useSummary } from "../../hooks/useSummary/useSummary";
import * as S from "./style";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { LuDollarSign, LuPackage } from "react-icons/lu";
import { COLORS } from "../../styles/Colors";

export default function Dashboard() {
  const { summary, inventory } = useSummary();

  return (
    <S.Main>
      <S.Wrapper>
        <PageHeader title={"Painel"} subtitle={"Visão Geral"} />

        <S.WrapperCards>
          <CardDashboard
            Icon={FiTrendingDown}
            title={"Total gasto"}
            value={summary.total_gasto}
            description={"Compras (atacado)"}
            defaultColor={COLORS.primary_font_foreground}
          />
          <CardDashboard
            Icon={FiTrendingUp}
            title={"Total vendido"}
            value={summary.total_vendido}
            description={"Saídas"}
            defaultColor={COLORS.primary_font_foreground}
          />
          <CardDashboard
            Icon={LuDollarSign}
            title={"Lucro"}
            value={summary.lucro}
            description={"Vendido − Gasto"}
            defaultColor={
              summary.possui_lucro ? COLORS.primary_success : COLORS.primary_red
            }
          />
          <CardDashboard
            Icon={LuPackage}
            title={"Estoque"}
            value={inventory.valor_total_estoque}
            description={"0 unidades"}
            defaultColor={COLORS.primary_font_foreground}
          />
        </S.WrapperCards>

        <S.DashboardCardGroup>
          <S.CardDefaultDashboard>
            <h2>Movimentações recentes</h2>
            <p>Sem movimentações ainda.</p>
          </S.CardDefaultDashboard>
          <S.CardDefaultDashboard>
            <h2>Top produtos por estoque</h2>
            <p>Cadastre seu primeiro produto.</p>
          </S.CardDefaultDashboard>
        </S.DashboardCardGroup>
      </S.Wrapper>
    </S.Main>
  );
}
