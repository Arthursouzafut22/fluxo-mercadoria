import type { ReactNode } from "react";
import * as S from "./style";

type PageProps = { subtitle: ReactNode; title: ReactNode };

export default function PageHeader({ subtitle, title }: PageProps) {
  return (
    <S.Wrapper>
      <span>{subtitle}</span>
      <h1>{title}</h1>
    </S.Wrapper>
  );
}
