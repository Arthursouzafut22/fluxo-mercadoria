import { styled } from "styled-components";
import { COLORS } from "../../styles/Colors";

export const Button = styled.button`
  font-size: 0.88rem;
  font-weight: 500;
  background-color: ${COLORS.primary_yellow};
  color: ${COLORS.primary_card};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 40px;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
`;
