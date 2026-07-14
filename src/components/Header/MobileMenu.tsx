import {
  LuArrowLeftRight,
  LuFileText,
  LuLayoutGrid,
  LuPackage,
} from "react-icons/lu";
import * as S from "./style";

export default function MobileMenu() {
  return (
    <S.Nav>
      <S.LinkMobile
        to={"/dashboard"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LuLayoutGrid size={16} /> Painel
      </S.LinkMobile>
      <S.LinkMobile
        to={"/produtos"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LuPackage size={16} /> Produtos
      </S.LinkMobile>
      <S.LinkMobile
        to={"/movimentacoes"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LuArrowLeftRight size={16} /> Movimentações
      </S.LinkMobile>
      <S.LinkMobile
        to={"/relatorios"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <LuFileText size={16} /> Relatórios
      </S.LinkMobile>
    </S.Nav>
  );
}
