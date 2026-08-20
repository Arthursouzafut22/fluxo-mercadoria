import type { InferType } from "yup";
import type { MovementsEntryShema } from "../../schemas/movementsEntryShema";

export type FormMovementsEntryType = InferType<typeof MovementsEntryShema>;
