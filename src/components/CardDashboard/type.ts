import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type CardProps = {
  Icon: IconType;
  title: ReactNode;
  value: number;
  description: string;
  defaultColor?: string;
};
