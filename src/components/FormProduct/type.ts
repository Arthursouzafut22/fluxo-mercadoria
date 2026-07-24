import type { InferType } from "yup";
import type { SchemaProduct } from "../../schemas/productSchema";

export type FormProductProps = {
  closeModal: () => void;
};

export type FormProductType = InferType<typeof SchemaProduct>;
