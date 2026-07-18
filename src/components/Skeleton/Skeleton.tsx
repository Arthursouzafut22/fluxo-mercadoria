import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }

  100% {
    background-position: 400px 0;
  }
`;

export const Skeleton = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "20px"};

  border-radius: 8px;
  margin-top: calc(0.25rem * 3);

  background: linear-gradient(90deg, #252525 25%, #3b3b3b 50%, #252525 75%);

  background-size: 800px 100%;
  animation: ${shimmer} 1.3s infinite linear;
`;
