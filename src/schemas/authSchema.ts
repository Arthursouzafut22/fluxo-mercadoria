import * as yup from "yup";

export const SchemaAuth = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Digite um e-mail válido"
    ),
  password: yup
    .string()
    .required("A senha é obrigatório")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
});