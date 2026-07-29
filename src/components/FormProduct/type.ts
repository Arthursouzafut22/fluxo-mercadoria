import type { InferType } from "yup";
import type { SchemaProduct } from "../../schemas/productSchema";

export type FormProductProps = {
  closeModal: () => void;
  onsubmit: (data: FormProductType) => Promise<boolean | undefined>;
};

export type FormProductType = InferType<typeof SchemaProduct>;
