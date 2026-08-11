import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const Main = styled.main`
  h1 {
    color: white;
  }
`;

export const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;
export const Div = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);
`;

export const Button = styled.button<{
  $cor: string;
  $border?: string;
  $fontColor?: string;
  $hover?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  font-weight: 500;
  border: 1px solid ${({ $border }) => $border};
  color: ${({ $fontColor }) => $fontColor};
  background-color: ${({ $cor }) => $cor};
  padding-block: calc(0.25rem * 2.5);
  padding-inline: calc(0.25rem * 4);
  border-radius: calc(0.5rem - 2px);
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    opacity: ${({ $hover }) => ($hover ? 1 : 0.9)};
    background-color: ${({ $hover }) => $hover};
  }
`;

export const TransactionFilterTabs = styled.div`
  display: flex;
  gap: calc(0.25rem * 1);
  padding: calc(0.25rem * 1);
  border-radius: calc(0.5rem - 2px);
  background-color: #24211e;
  width: fit-content;
  margin-top: 20px;

  button {
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    padding-block: calc(0.25rem * 1);
    padding-inline: calc(0.25rem * 4);
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;
