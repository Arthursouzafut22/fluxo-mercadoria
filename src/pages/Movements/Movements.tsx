import PageHeader from "../../components/PageHeader/PageHeader";
import { COLORS } from "../../styles/Colors";
import * as S from "./style";
import { LuDownload, LuUpload } from "react-icons/lu";

export default function Movements() {
  return (
    <S.Main>
      <S.Wrapper>
        <S.Div>
          <PageHeader title={"Movimentações"} subtitle={"Fluxo"} />

          <S.BoxButtons>
            <S.Button
              onClick={() => 1 * 1}
              $cor="transparent"
              $border="#312d28"
              $fontColor={COLORS.primary_font_foreground}
              $hover={COLORS.primary_card}
            >
              <LuDownload />
              Entrada
            </S.Button>
            <S.Button onClick={() => 1 * 1} $cor={COLORS.primary_yellow}>
              <LuUpload />
              Saida
            </S.Button>
          </S.BoxButtons>
        </S.Div>
        <S.TransactionFilterTabs>
          <button>TODAS</button>
          <button>ENTRADA</button>
          <button>SAIDA</button>
        </S.TransactionFilterTabs>
      </S.Wrapper>
    </S.Main>
  );
}
