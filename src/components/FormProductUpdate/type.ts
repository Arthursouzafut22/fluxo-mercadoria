import type { ProductProps } from "../../services/product/type";
import type { FormProductType } from "../FormProduct/type";

export type FormProductUpdateProps = {
  closeModalUpdate: () => void;
  onsubmit: (data: FormProductType, id:number) => Promise<boolean | undefined>;
  title: string;
  product: ProductProps | null
};