import type { InferType } from "yup";
import type { ProductProps } from "../../services/product/type";
import type { SchemaProductUpdate } from "../../schemas/SchemaProductUpdate";

export type FormProductUpdateProps = {
  closeModalUpdate: () => void;
  onsubmit: (
    data: FormProductUpdateType,
    id: number
  ) => Promise<boolean | undefined>;
  title: string;
  product: ProductProps | null;
};

export type FormProductUpdateType = InferType<typeof SchemaProductUpdate>;
