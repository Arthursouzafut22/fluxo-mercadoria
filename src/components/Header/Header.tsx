import * as S from "./style";
import { LuLayoutGrid } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuArrowLeftRight } from "react-icons/lu";
import { LuFileText } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "../../context/Auth/useAuth";
import { useMedia } from "../../hooks/useMedia/useMedia";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { logout } = useAuth();
  const { mobile } = useMedia("(max-width:767px)");

  return (
    <S.Header>
      <S.WrapperHeader>
        <S.Logo>
          <p>Paris Imports</p>
          <span>Controle de Estoque</span>
        </S.Logo>
        {!mobile && (
          <S.Nav>
            <S.Link
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LuLayoutGrid size={16} /> Painel
            </S.Link>
            <S.Link
              to={"/produtos"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LuPackage size={16} /> Produtos
            </S.Link>
            <S.Link
              to={"/movimentacoes"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LuArrowLeftRight size={16} /> Movimentações
            </S.Link>
            <S.Link
              to={"/relatorios"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <LuFileText size={16} /> Relatórios
            </S.Link>
          </S.Nav>
        )}
        <button onClick={() => logout()}>
          <LuLogOut /> Sair
        </button>
      </S.WrapperHeader>
      {mobile && <MobileMenu />}
    </S.Header>
  );
}
