import { forwardRef, type ComponentPropsWithoutRef } from "react";
import * as S from "./style";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <S.WrapperInput>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input {...rest} id={id} ref={ref} />
      </S.WrapperInput>
    );
  }
);
