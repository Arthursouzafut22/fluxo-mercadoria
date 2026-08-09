import type { ProductProps } from "../../services/product/type";

export type ProductsTableProps = {
  products: ProductProps[];
  deleteProduct: (id: number) => Promise<void>;
  openModal: (product: ProductProps) => void;
};
