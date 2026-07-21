import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const Main = styled.main``;

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

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  font-weight: 500;
  /* color: ${"#0a0704"}; */
  background-color: ${COLORS.primary_yellow};
  padding-block: calc(0.25rem * 2.5);
  padding-inline: calc(0.25rem * 4);
  border-radius: calc(0.5rem - 2px);
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    opacity: 0.9;
  }
`;

export const EmptyState = styled.div`
  padding: calc(0.25rem * 12);
  border-radius: calc(0.5rem + 4px);
  background-color: ${COLORS.primary_card};
  border: 1px solid #312d28;
  text-align: center;
  margin-top: calc(0.25rem * 8);

  p {
    color: ${COLORS.primary_font_color};
  }

  button {
    font-size: 0.875rem;
    margin-top: calc(0.25rem * 4);
    line-height: calc(1.25 / 0.875);
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${COLORS.primary_yellow};

    &:hover {
      text-decoration: underline;
    }
  }
`;
