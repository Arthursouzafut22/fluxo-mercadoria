import * as yup from "yup";

export const MovementsEntryShema = yup.object({
  produto_id: yup
    .number()
    .required("O produto é obrigatório."),

  quantidade: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("A quantidade deve ser um número.")
    .required("A quantidade é obrigatória.")
    .default(1)
    .integer("A quantidade deve ser um número inteiro.")
    .min(1),

  valor_unitario: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("O valor unitário deve ser um número.")
    .required("O valor unitário é obrigatório.")
    .min(1, "O valor unitário deve ser maior ou igual a 1."),

  observacao: yup.string().optional().default(undefined),
});
