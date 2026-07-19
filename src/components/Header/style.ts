import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../styles/Colors";

export const Header = styled.header`
  border-bottom: 1px solid #312d28;
`;

export const WrapperHeader = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.63rem;
  padding: 1rem 1.5rem;

  button {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-block: 0.5rem;
    padding-inline: 0.75rem;
    border-radius: 0.38rem;
    color: ${COLORS.primary_font_foreground};
    border: 1px solid #312d28;
    background-color: ${COLORS.primary_background};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${COLORS.primary_font_foreground};
      background-color: #24211e;
    }
  }
`;

export const Logo = styled.div`
  span {
    display: block;
  }

  & :first-child {
    font-size: 0.63rem;
    text-transform: uppercase;
    color: ${COLORS.primary_yellow};
    letter-spacing: 4px;
    line-height: 15px;
  }

  & :last-child {
    font-size: 1.15rem;
    color: ${COLORS.primary_font_foreground};
    letter-spacing: -0.01em;
    line-height: calc(1.75 / 1.25);
    white-space: nowrap;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.31rem;

  @media (max-width: 767px) {
    border-top: 1px solid #312d28;
    gap: 0px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.5rem;
  color: ${COLORS.primary_font_color};
  border-radius: 0.38rem;
  transition: 0.3s;

  &:hover {
    color: ${COLORS.primary_font_foreground};
    background-color: #24211e;
  }

  &.active {
    background-color: #24211e;
    color: ${COLORS.primary_yellow};
  }
`;

export const LinkMobile = styled(NavLink)`
  text-decoration: none;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${COLORS.primary_font_color};
  flex: 1;
  padding-block: calc(0.25rem * 3);
  gap: calc(0.25rem * 1);

  &.active {
    background-color: #24211e;
    color: ${COLORS.primary_yellow};
  }
`;
