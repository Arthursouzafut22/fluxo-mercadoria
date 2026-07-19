import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../styles/Colors";

export const Section = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
`;

export const WrapperForm = styled.div`
  background-color: ${COLORS.primary_card};
  padding: 2rem;
  max-width: 24rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 0.38rem;
  border-width: 1px;
  border-width: 1px;
  border-style: solid;
  border-color: #312d28;

  h2 {
    font-size: 1.5rem;
    line-height: calc(2 / 1.5);
    color: ${COLORS.primary_font_foreground};
    text-align: center;
    font-weight: 500;
    margin-bottom: calc(0.25rem * 6);
  }
`;

export const Form = styled.form`
  p {
    text-align: center;
    color: ${COLORS.primary_font_color};
    font-size: 0.875rem;
    margin-top: 25px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.primary_yellow};

  &:hover {
    text-decoration: underline;
  }
`;
