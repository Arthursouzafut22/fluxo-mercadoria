import { BeatLoader } from "react-spinners";

type LoadingProps = {
  size: number;
  color: string;
};

export default function Loading({ color, size }: LoadingProps) {
  return <BeatLoader color={color} size={size} />;
}
