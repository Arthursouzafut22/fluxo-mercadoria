import { yupResolver } from "@hookform/resolvers/yup";
import AuthHeader from "../../components/authHeader/AuthHeader";
import Button from "../../components/button/Button";
import { Input } from "../../components/Input/Input";
import { SchemaAuth } from "../../schemas/authSchema";
import * as S from "./style";
import { useForm } from "react-hook-form";
import type { LoginForm } from "./types/type";
import { Loading } from "../../components/loading/Loading";
import Toast from "../../components/toast/Toast";
import { useLoginForm } from "../../hooks/useLoginForm/useLoginForm ";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginForm>({
    resolver: yupResolver(SchemaAuth),
  });

  const { onsubmit } = useLoginForm();

  return (
    <S.Section>
      <div>
        <AuthHeader />
        <S.WrapperForm>
          <h2>Bem-vindo de volta</h2>
          <S.Form onSubmit={handleSubmit(onsubmit)}>
            <Input
              label="Email"
              id="email"
              required
              {...register("email", { required: true })}
            />
            <Input
              label="Senha"
              id="password"
              {...register("password", { required: true })}
            />
            <Button>{isSubmitting ? <Loading /> : "Entrar"}</Button>

            <p>
              Ainda não tem uma conta?{" "}
              <S.NavLink to={"/register"}>Criar conta</S.NavLink>
            </p>
          </S.Form>
          <Toast />
        </S.WrapperForm>
      </div>
    </S.Section>
  );
}
