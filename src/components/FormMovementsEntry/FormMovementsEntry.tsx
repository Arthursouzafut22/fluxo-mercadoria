import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import * as S from "./style";
import type { FormMovementsEntryType, FormType } from "./type";
import Loading from "../Loading/Loading";
import { COLORS } from "../../styles/Colors";
import useProduct from "../../hooks/useProduct/useProduct";

export default function FormMovementsEntry({ closeModal, onsubmit }: FormType) {
  const { products } = useProduct();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormMovementsEntryType>();

  async function handleFormSubmit(data: FormMovementsEntryType) {
    console.log(data);
    const success = await onsubmit(data);
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
      <h2>Registrar entrada</h2>
      <p>Compra no atacado</p>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <select
          {...register("produto_id", { required: true, valueAsNumber: true })}
        >
          <option value="">Selecione um produto</option>
          {products.map((i) => (
            <option key={i.id} value={Number(i.id)}>
              {i.nome}
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
        {/* <S.BoxInputStock>
        
        </S.BoxInputStock> */}

        <S.Teste>
          <div className="tt">
            <span>Total</span>
            <span>100</span>
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
