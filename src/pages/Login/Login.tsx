import AuthHeader from "../../components/AuthHeader/AuthHeader";
import Button from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import * as S from "./style";

export default function Login() {
  return (
    <S.Section>
      <AuthHeader />
      <S.WrapperForm>
        <h2>Bem-vindo de volta</h2>
        <S.Form>
          <Input label="Email" id="Email" />
          <Input label="Senha" id="Senha" />
          <Button>Entrar</Button>

          <p>
            Ainda não tem uma conta?{" "}
            <S.NavLink to={"/register"}>Criar conta</S.NavLink>
          </p>
        </S.Form>
      </S.WrapperForm>
    </S.Section>
  );
}
