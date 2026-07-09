import { styled } from "styled-components";
import { COLORS } from "../../styles/Colors";

export const WrapperInput = styled.div`
  margin-bottom: 17px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 14px;
  color: ${COLORS.primary_font_color};
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: ${COLORS.primary_input};
  border-radius: 6px;
  display: block;
  font-size: 1rem;
  outline: 3px solid transparent;
  color: ${COLORS.primary_font_color};

  &:focus {
    outline: 2px solid ${COLORS.primary_yellow};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #2a2520 inset;
    -webkit-text-fill-color: #fff;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
