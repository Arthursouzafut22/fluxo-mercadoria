import { useForm, type Resolver } from "react-hook-form";
import { Input } from "../Input/Input";
import * as S from "./style";
import type { FormProductProps, FormProductType } from "./type";
import { SchemaProduct } from "../../schemas/productSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import useProduct from "../../hooks/useProduct/useProduct";
import Loading from "../Loading/Loading";

export default function FormProduct({ closeModal }: FormProductProps) {
  const { onsubmit } = useProduct();
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormProductType>({
    resolver: yupResolver(SchemaProduct) as Resolver<FormProductType>,

    defaultValues: {
      quantidade_estoque: 1,
    },
  });

  async function handleFormSubmit(data: FormProductType) {
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
      <h2>Novo produto</h2>
      <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          label="NOME"
          id="name"
          required
          {...register("nome", { required: true })}
        />
        <Input label="Descrição" id="description" {...register("descricao")} />

        <S.BoxInputsFlex>
          <Input
            type="number"
            label="Preço custo"
            id="costprice"
            required
            min={1}
            {...register("preco_custo", { valueAsNumber: true })}
          />
          <Input
            type="number"
            label="Preço venda"
            id="sellingprice"
            required
            min={1}
            {...register("preco_venda", { valueAsNumber: true })}
          />
        </S.BoxInputsFlex>
        <S.BoxInputStock>
          <Input
            type="number"
            label="Estoque inicial"
            id="stock"
            required
            min={1}
            {...register("quantidade_estoque", { valueAsNumber: true })}
          />
          <p>Registrado como entrada inicial no histórico.</p>
        </S.BoxInputStock>

        <S.BoxButton>
          <S.Button type="button" $color onClick={handleCancel}>
            Cancelar
          </S.Button>
          <S.Button type="submit">
            {isSubmitting ? <Loading /> : "Salvar"}
          </S.Button>
        </S.BoxButton>
      </S.Form>
    </S.WrapperForm>
  );
}
