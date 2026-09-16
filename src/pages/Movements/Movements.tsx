import { Activity, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { COLORS } from "../../styles/Colors";
import * as S from "./style";
import { LuDownload, LuUpload } from "react-icons/lu";
import useMovements from "../../hooks/useMovements/useMovements";
import MovementsTable from "../../components/MovementsTable/MovementsTable";
import Loading from "../../components/Loading/Loading";
import LayoutModal from "../../components/LayoutModal/LayoutModal";
import Toast from "../../components/toast/Toast";
import { textButtons } from "../../utils/textButtons";
import type {
  MovementsProps,
  TypeMovements,
} from "../../services/movements/type";
import FormMovements from "../../components/FormMovements/FormMovements";
import { typeLabels } from "../../components/MovementsTable/type";
import FormMovementsUpdate from "../../components/FormMovements/FormMovementsUpdate";

export default function Movements() {
  const [activeEntry, setActiveEntry] = useState(false);
  const [activeExit, setActiveExit] = useState(false);
  const [activeUpdate, setActiveUpdate] = useState(false);
  const [selectMovements, setSelectMovements] = useState<MovementsProps | null>(
    null
  );
  const {
    movements,
    loading,
    handleCreateEntryMovementSubmit,
    getMovementsType,
    updateMovements,
    index,
  } = useMovements();

  const openModalEntry = () => setActiveEntry(true);
  const closeModalEntry = () => setActiveEntry(false);

  const openModalExit = () => setActiveExit(true);
  const closeModalExit = () => setActiveExit(false);

  const openModalUpdate = (data: MovementsProps) => {
    setSelectMovements(data);
    setActiveUpdate(true);
  };
  const closeModalUpdate = () => {
    setSelectMovements(null);
    setActiveUpdate(false);
  };

  return (
    <S.Main>
      <S.Wrapper>
        <S.Div>
          <PageHeader title={"Movimentações"} subtitle={"Fluxo"} />

          <S.BoxButtons>
            <S.Button
              onClick={openModalEntry}
              $cor="transparent"
              $border="#312d28"
              $fontColor={COLORS.primary_font_foreground}
              $hover={COLORS.primary_card}
            >
              <LuDownload />
              Entrada
            </S.Button>
            <S.Button onClick={openModalExit} $cor={COLORS.primary_yellow}>
              <LuUpload />
              Saida
            </S.Button>
          </S.BoxButtons>
        </S.Div>
        <S.TransactionFilterTabs>
          {textButtons.map((item, i) => (
            <button
              key={i}
              onClick={() =>
                getMovementsType(
                  i,
                  item.toLocaleLowerCase() as TypeMovements | "todas"
                )
              }
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
          <MovementsTable movements={movements} onEdit={openModalUpdate} />
        ) : null}
      </S.Wrapper>
      <Activity mode={activeEntry ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModalEntry}>
          <FormMovements
            title="Registrar entrada"
            description="Compra no atacado"
            type="entradas"
            onsubmit={handleCreateEntryMovementSubmit}
            closeModal={closeModalEntry}
          />
        </LayoutModal>
      </Activity>
      <Activity mode={activeExit ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModalExit}>
          <FormMovements
            title="Registrar saída"
            description="Venda"
            type="saidas"
            onsubmit={handleCreateEntryMovementSubmit}
            closeModal={closeModalExit}
          />
        </LayoutModal>
      </Activity>
      <Activity mode={activeUpdate ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModalUpdate}>
          <FormMovementsUpdate
            id={selectMovements?.id ?? 0}
            title="Editar movimentação"
            description={
              selectMovements
                ? typeLabels[selectMovements.tipo_movimentacao]
                : ""
            }
            onsubmit={updateMovements}
            closeModal={closeModalUpdate}
          />
        </LayoutModal>
      </Activity>
      <Toast />
    </S.Main>
  );
}
