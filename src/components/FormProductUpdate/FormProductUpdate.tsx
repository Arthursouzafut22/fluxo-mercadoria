import { useForm, type Resolver } from "react-hook-form";
import { SchemaProduct } from "../../schemas/productSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import type { FormProductType } from "../FormProduct/type";
import Loading from "../Loading/Loading";
import * as S from "./style";
import { Input } from "../Input/Input";
import type { FormProductUpdateProps, FormProductUpdateType } from "./type";
import { COLORS } from "../../styles/Colors";

export default function FormProductUpdate({
  closeModalUpdate,
  onsubmit,
  title,
  product,
}: FormProductUpdateProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormProductType>({
    resolver: yupResolver(SchemaProduct) as Resolver<FormProductUpdateType>,

    defaultValues: {
      nome: product?.nome || "",
      descricao: product?.descricao || "",
      preco_custo: product?.preco_custo || 1,
      preco_venda: product?.preco_venda || 1,
      quantidade_estoque: product?.quantidade_estoque || 1,
    },
  });

  async function handleFormSubmit(data: FormProductUpdateType) {
    if (!product) return;

    const success = await onsubmit(data, product.id);
    if (success) {
      reset();
      closeModalUpdate();
    }
  }

  function handleCancel() {
    reset();
    closeModalUpdate();
  }

  return (
    <S.WrapperForm onClick={(e) => e.stopPropagation()}>
      <h2>{title}</h2>
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
