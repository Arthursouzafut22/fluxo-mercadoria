import { useForm } from "react-hook-form";
import AuthHeader from "../../components/authHeader/AuthHeader";
import Button from "../../components/button/Button";
import { Input } from "../../components/Input/Input";
import { useRegister } from "../../hooks/useRegister/useRegister";
import * as S from "./style";
import type { FormRegister } from "./types/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaRegister } from "../../schemas/registerSchema";
import Toast from "../../components/toast/Toast";
import { Loading } from "../../components/loading/Loading";

export default function Register() {
  const { onsubmit } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormRegister>({
    resolver: yupResolver(SchemaRegister),
  });

  return (
    <S.Section>
      <div>
        <AuthHeader />
        <S.WrapperForm>
          <h2>Criar conta</h2>
          <S.Form onSubmit={handleSubmit(onsubmit)}>
            <Input
              type="text"
              label="Nome"
              id="name"
              placeholder="Seu nome"
              required
              {...register("name", { required: true })}
            />
            <Input
              type="email"
              label="Email"
              placeholder="Seu e-mail"
              id="email"
              required
              {...register("email", { required: true })}
            />
            <Input
              type="password"
              label="Senha"
              id="password"
              placeholder="Mínino 6 caracteres"
              required
              {...register("password", { required: true })}
            />
            <Button disabled={isSubmitting}>
              {isSubmitting ? <Loading /> : "Criar conta"}
            </Button>

            <p>
              Já tem uma conta? <S.NavLink to={"/login"}>Entrar</S.NavLink>
            </p>
          </S.Form>
          <Toast />
        </S.WrapperForm>
      </div>
    </S.Section>
  );
}
