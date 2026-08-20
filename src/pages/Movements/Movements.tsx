import { Activity, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { COLORS } from "../../styles/Colors";
import * as S from "./style";
import { LuDownload, LuUpload } from "react-icons/lu";
import useMovements from "../../hooks/useMovements/useMovements";
import MovementsTable from "../../components/MovementsTable/MovementsTable";
import Loading from "../../components/Loading/Loading";
import LayoutModal from "../../components/LayoutModal/LayoutModal";
import FormMovementsEntry from "../../components/FormMovementsEntry/FormMovementsEntry";

const textButtons = ["TODAS", "ENTRADA", "SAIDA"];

export default function Movements() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const { movements, loading } = useMovements();

  function teste(index: number) {
    setIndex(index);
  }

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  return (
    <S.Main>
      <S.Wrapper>
        <S.Div>
          <PageHeader title={"Movimentações"} subtitle={"Fluxo"} />

          <S.BoxButtons>
            <S.Button
              onClick={openModal}
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
          {textButtons.map((item, i) => (
            <button
              key={i}
              onClick={() => teste(i)}
              style={{
                background: i === index ? COLORS.primary_yellow : "",
                color:
                  i === index ? COLORS.primary_card : COLORS.primary_font_color,
              }}
            >
              {item}
            </button>
          ))}
        </S.TransactionFilterTabs>

        {movements.length === 0 && !loading && (
          <S.EmptyState>
            <p>Nenhuma movimentação.</p>
          </S.EmptyState>
        )}

        {loading ? (
          <div className="wrapper-loading">
            <Loading size={22} color={COLORS.primary_yellow} />
          </div>
        ) : movements.length > 0 ? (
          <MovementsTable movements={movements} onEdit={() => {}} />
        ) : null}
      </S.Wrapper>
      <Activity mode={active ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModal}>
        <FormMovementsEntry/>
        </LayoutModal>
      </Activity>
    </S.Main>
  );
}
