import type { ProductProps } from "../../services/product/type";

export type ProductsTableProps = {
  products: ProductProps[];
  openModalDelete: (product: ProductProps) => void;
  openModal: (product: ProductProps) => void;
};
