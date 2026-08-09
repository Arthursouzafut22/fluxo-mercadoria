import { Activity, useState } from "react";
import FormProduct from "../../components/FormProduct/FormProduct";
import LayoutModal from "../../components/LayoutModal/LayoutModal";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as S from "./style";
import { FiPlus } from "react-icons/fi";
import Toast from "../../components/toast/Toast";
import { ProductsTable } from "../../components/ProductsTable/ProductsTable";
import useProduct from "../../hooks/useProduct/useProduct";
import FormProductUpdate from "../../components/FormProductUpdate/FormProductUpdate";
import type { ProductProps } from "../../services/product/type";
import Loading from "../../components/Loading/Loading";
import { COLORS } from "../../styles/Colors";
import ConfirmModal from "../../components/ConfirmDelete/ConfirmDelete";

export default function Products() {
  const [active, setActive] = useState(false);
  const [activeDelete, setActiveDelete] = useState(false);
  const [activeUpdate, setActiveUpdate] = useState(false);
  const [productToDelete, setProductToDelete] = useState<ProductProps | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );
  const { products, onsubmit, deleteProduct, onSubmitUpdate, loading } = useProduct();

  const openModal = () => setActive(true);
  const closeModal = () => setActive(false);

  const openModalUpdate = (product: ProductProps) => {
    setSelectedProduct(product);
    setActiveUpdate(true);
  };

  const closeModalUpdate = () => {
    setSelectedProduct(null);
    setActiveUpdate(false);
  };

  const openModalDelete = (product: ProductProps) => {
    setProductToDelete(product);
    setActiveDelete(true);
  };

  const closeModalDelete = () => {
    setProductToDelete(null);
    setActiveDelete(false);
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      await deleteProduct(productToDelete.id);
      closeModalDelete();
    }
  };

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

        {products.length === 0 && !loading && (
          <S.EmptyState>
            <p>Nenhum produto cadastrado.</p>
            <button onClick={openModal}>Cadastrar o primeiro</button>
          </S.EmptyState>
        )}

        {loading ? (
          <div className="wrapper-loading">
            <Loading size={22} color={COLORS.primary_yellow} />
          </div>
        ) : products.length > 0 ? (
          <ProductsTable
            products={products}
            openModalDelete={openModalDelete}
            openModal={openModalUpdate}
          />
        ) : null}
      </S.Wrapper>
      <Activity mode={active ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModal}>
          <FormProduct
            closeModal={closeModal}
            onsubmit={onsubmit}
            title="Novo produto"
          />
        </LayoutModal>
      </Activity>
      <Activity mode={activeUpdate ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModalUpdate}>
          <FormProductUpdate
            key={selectedProduct?.id ?? "empty"}
            closeModalUpdate={closeModalUpdate}
            onsubmit={onSubmitUpdate}
            title="Editar produto"
            product={selectedProduct}
          />
        </LayoutModal>
      </Activity>
      <Activity mode={activeDelete ? "visible" : "hidden"}>
        <LayoutModal closeModal={closeModalDelete}>
          <ConfirmModal
            isOpen={activeDelete}
            title="Excluir produto"
            message={`Tem certeza que deseja remover esse produto? Esta ação não poderá ser desfeita.`}
            onClose={closeModalDelete}
            onConfirm={handleConfirmDelete}
            loading={loading}
          />
        </LayoutModal>
      </Activity>
      <Toast />
    </S.Main>
  );
}
