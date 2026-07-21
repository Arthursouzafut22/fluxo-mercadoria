import * as S from "./style";
import type { LayoutModalProps } from "./type";

export default function LayoutModal({
  children,
  closeModal,
}: LayoutModalProps) {
  return <S.Layout onClick={closeModal}>{children}</S.Layout>;
}
