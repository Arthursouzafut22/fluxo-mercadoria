import { Activity, useState } from "react";
import FormProduct from "../../components/FormProduct/FormProduct";
import LayoutModal from "../../components/LayoutModal/LayoutModal";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as S from "./style";
import { FiPlus } from "react-icons/fi";
import Toast from "../../components/toast/Toast";

export default function Products() {
  const [active, setActive] = useState(false);

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  return (
    <S.Main>
      <S.Wrapper>
        <S.Div>
          <PageHeader title={"Produtos"} subtitle={"Catálogo"} />
          <S.Button onClick={openModal}>
            <FiPlus />
            Novo produto
          </S.Button>
        </S.Div>

        <S.EmptyState>
          <p>Nenhum produto cadastrado.</p>
          <button onClick={openModal}>Cadastrar o primeiro</button>
        </S.EmptyState>
      </S.Wrapper>
      <Activity mode={active ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModal}>
          <FormProduct closeModal={closeModal} />
        </LayoutModal>
      </Activity>
      <Toast />
    </S.Main>
  );
}
