import type { InferType } from "yup";
import type { MovementsEntryShema } from "../../schemas/movementsEntryShema";

export type FormMovementsType = InferType<typeof MovementsEntryShema>;

export type FormType = {
  title: string;
  description: string;
  type: string;
  closeModal: () => void;
  onsubmit: (
    data: FormMovementsType,
    type: string
  ) => Promise<boolean | undefined>;
};

export type FormTypeUpdate = {
  id: number;
  title: string;
  description: string;
  closeModal: () => void;
  onsubmit: (data: FormMovementsType, id: number, productId: number) => Promise<boolean | undefined>;
};
