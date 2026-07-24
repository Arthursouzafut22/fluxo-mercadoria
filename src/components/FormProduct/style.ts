import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const WrapperForm = styled.div`
  border-radius: calc(0.5rem + 4px);
  background-color: ${COLORS.primary_card};
  border: 1px solid #312d28;
  max-width: 28rem;
  width: 100%;
  padding: calc(0.25rem * 6);

  h2 {
    font-size: 1.5rem;
    line-height: calc(2 / 1.5);
    margin-bottom: calc(0.25rem * 5);
    letter-spacing: -0.01em;
    color: ${COLORS.primary_font_foreground};
  }
`;

export const Form = styled.form`
  input {
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
    padding-block: calc(0.25rem * 2);
    padding-inline: calc(0.25rem * 3);
    border: 1px solid #312d28;
    color: ${COLORS.primary_font_foreground};
  }
`;

export const BoxInputsFlex = styled.div`
  display: flex;
  align-items: center;
  gap: calc(0.25rem * 3);
`;

export const BoxInputStock = styled.div`
  margin-bottom: 17px;

  div {
    margin-bottom: 0px;
  }
  p {
    font-size: 10px;
    color: ${COLORS.primary_font_color};
    margin-top: calc(0.25rem * 1);
  }
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(0.25rem * 2);
  padding-top: calc(0.25rem * 2);
`;

export const Button = styled.button<{ $color?: boolean }>`
  font-weight: 500;
  width: 100%;
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
  cursor: pointer;
  border: none;
  background-color: ${({ $color }) =>
    $color ? "#00000000" : COLORS.primary_yellow};
  padding-block: calc(0.25rem * 2);
  border: 1px solid ${({ $color }) => $color && "#312d28"};
  padding-block: calc(0.25rem * 2.5);
  border-radius: calc(0.5rem - 2px);
  color: ${({ $color }) => $color && COLORS.primary_font_foreground};
  transition: 0.2s;

  &:hover {
    background-color: ${({ $color }) => $color && COLORS.primary_input};
  }
`;
