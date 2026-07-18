import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const Wrapper = styled.div`
  margin-top: 15px;

  span {
    display: block;
    font-size: 0.63rem;
    text-transform: uppercase;
    color: ${COLORS.primary_yellow};
    letter-spacing: 4px;
    line-height: 15px;
    margin-bottom: calc(0.25rem * 2);
  }

  h1 {
    font-size: 2.25rem;
    font-weight: inherit;
    color: ${COLORS.primary_font_foreground};
    letter-spacing: -0.01em;
    line-height: calc(2.5 / 2.25);
    white-space: nowrap;
  }
`;
