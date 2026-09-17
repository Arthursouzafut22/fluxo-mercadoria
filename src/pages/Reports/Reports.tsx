import { useForm } from "react-hook-form";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as S from "./style";
import { LuFileDown } from "react-icons/lu";
import { formatDateThow } from "../../utils/formatDate";
import { Reports as R } from "../../services/reports/reports";

interface PeriodoValue {
  inicio: string;
  fim: string;
}

export default function Reports() {
  const { register, reset, watch } = useForm<PeriodoValue>({
    defaultValues: { inicio: "", fim: "" },
  });

  const values = watch();

  const handleLimpar = () => {
    reset({ inicio: "", fim: "" });
  };

  return (
    <S.Main>
      <S.Wrapper>
        <S.Div>
          <PageHeader title={"Relatórios"} subtitle={"Análise"} />
          <S.Button
            onClick={async () => {
              const blob = await R.DownloadReportPdf(
                formatDateThow(values.inicio),
                formatDateThow(values.fim)
              );
              const url = URL.createObjectURL(blob);

              const link = document.createElement("a");
              link.href = url;
              link.download = "relatorio.pdf";
              link.click();

              URL.revokeObjectURL(url);
            }}
          >
            <LuFileDown /> Baixar PDF
          </S.Button>
        </S.Div>
        <S.Card>
          <S.Title>Período</S.Title>
          <S.FieldsRow>
            <S.Field>
              <S.Label htmlFor="periodo-inicio">Início</S.Label>
              <S.DateInput
                id="periodo-inicio"
                type="date"
                placeholder="dd/mm/aaaa"
                {...register("inicio")}
              />
            </S.Field>

            <S.Field>
              <S.Label htmlFor="periodo-fim">Fim</S.Label>
              <S.DateInput
                id="periodo-fim"
                type="date"
                placeholder="dd/mm/aaaa"
                {...register("fim")}
              />
            </S.Field>

            <S.ClearButton type="button" onClick={handleLimpar}>
              Limpar período
            </S.ClearButton>
          </S.FieldsRow>

          <S.HelperText>
            Deixe em branco para considerar todas as movimentações.
          </S.HelperText>
        </S.Card>

        <S.CardPre>
          <S.Title>Pré-visualização</S.Title>
          <S.Summary>
            1 movimentação(ões) no período · 1 produto(s) no estoque
          </S.Summary>
          <S.Instruction>
            Clique em <S.Highlight>Baixar PDF</S.Highlight> para gerar o
            relatório completo com resumo financeiro, estoque por produto e
            lista de movimentações.
          </S.Instruction>
        </S.CardPre>
      </S.Wrapper>
    </S.Main>
  );
}
