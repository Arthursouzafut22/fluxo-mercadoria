import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const Card = styled.div`
  padding: calc(0.25rem * 5);
  border-radius: calc(0.5rem + 4px);
  background-color: ${COLORS.primary_card};
  border: 1px solid #312d28;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 2);

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${COLORS.primary_font_color};
    line-height: calc(1 / 0.75);
    white-space: nowrap;
  }
`;

export const Value = styled.p<{ defaultColor?: string }>`
  font-size: 1.875rem;
  color: ${({ defaultColor }) => defaultColor};
  margin-top: calc(0.25rem * 3);
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 1.35rem;
  }
`;

export const Description = styled.p`
  font-size: 0.75rem;
  color: ${COLORS.primary_font_color};
  margin-top: calc(0.25rem * 1);
`;
