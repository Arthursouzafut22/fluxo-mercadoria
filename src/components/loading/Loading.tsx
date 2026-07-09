import { BeatLoader } from "react-spinners";
import { COLORS } from "../../styles/Colors";

export function Loading() {
  return <BeatLoader color={COLORS.primary_card} size={10} />;
}
