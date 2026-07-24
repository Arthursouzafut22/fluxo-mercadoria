import * as yup from "yup";

export const SchemaProduct = yup.object({
  nome: yup.string().required("O nome é obrigatório."),
  descricao: yup.string().optional().default(undefined),

  preco_custo: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("O preço de custo deve ser um número.")
    .required("O preço de custo é obrigatório.")
    .min(1, "O preço de custo deve ser maior ou igual a 1."),

  preco_venda: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("O preço de venda deve ser um número.")
    .required("O preço de venda é obrigatório.")
    .min(1, "O preço de venda deve ser maior ou igual a 1."),

  quantidade_estoque: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("A quantidade em estoque deve ser um número.")
    .required("A quantidade em estoque é obrigatória.")
    .default(1)
    .integer("A quantidade em estoque deve ser um número inteiro.")
    .min(0, "A quantidade em estoque deve ser maior ou igual a 0."),
});
