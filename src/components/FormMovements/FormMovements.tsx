import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import * as S from "./style";
import type { FormMovementsType, FormType } from "./type";
import Loading from "../Loading/Loading";
import { COLORS } from "../../styles/Colors";
import useProduct from "../../hooks/useProduct/useProduct";
import { formatCurrencyBRL } from "../../utils/formatCurrencyBRL";

export default function FormMovements({
  closeModal,
  type,
  description,
  title,
  onsubmit,
}: FormType) {
  const { products } = useProduct();
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormMovementsType>({
    defaultValues: {
      quantidade: 1,
    },
  });

  const quantidade = watch("quantidade");
  const valor_unitario = watch("valor_unitario");
  const total = Number(quantidade || 0) * Number(valor_unitario || 0);

  async function handleFormSubmit(data: FormMovementsType) {
    const success = await onsubmit(data, type);
    if (success) {
      reset();
      closeModal();
    }
  }

  function handleCancel() {
    reset();
    closeModal();
  }

  return (
    <S.WrapperForm onClick={(e) => e.stopPropagation()}>
      <h2>{title}</h2>
      <p>{description}</p>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <select
          {...register("produto_id", { required: true, valueAsNumber: true })}
        >
          <option value="">Selecione um produto</option>
          {products.map((i) => (
            <option key={i.id} value={Number(i.id)}>
              {i.nome} (estoque: {i.quantidade_estoque})
            </option>
          ))}
        </select>

        <S.BoxInputsFlex>
          <Input
            type="number"
            label="Quantidade"
            id="Quantidade"
            required
            min={1}
            {...register("quantidade", { valueAsNumber: true })}
          />
          <Input
            type="number"
            label="Valor unitário"
            id="Valor unitário"
            required
            min={1}
            {...register("valor_unitario", { valueAsNumber: true })}
          />
        </S.BoxInputsFlex>

        <S.Teste>
          <div className="tt">
            <p>Total:</p>
            <p className="price">{formatCurrencyBRL(total)}</p>
          </div>
        </S.Teste>

        <Input label="Observação" id="Observação" {...register("observacao")} />

        <S.BoxButton>
          <S.Button type="button" $color onClick={handleCancel}>
            Cancelar
          </S.Button>
          <S.Button type="submit">
            {isSubmitting ? (
              <Loading size={10} color={COLORS.primary_card} />
            ) : (
              "Salvar"
            )}
          </S.Button>
        </S.BoxButton>
      </S.Form>
    </S.WrapperForm>
  );
}
