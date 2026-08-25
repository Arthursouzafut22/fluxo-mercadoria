import type { InferType } from "yup";
import type { MovementsEntryShema } from "../../schemas/movementsEntryShema";

export type FormMovementsEntryType = InferType<typeof MovementsEntryShema>;

export type FormType = {
  closeModal: () => void;
  onsubmit: (data: FormMovementsEntryType) => Promise<boolean | undefined>;
};
