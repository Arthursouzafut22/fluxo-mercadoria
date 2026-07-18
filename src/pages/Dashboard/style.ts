import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const Main = styled.main``;

export const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 296px));
  gap: calc(0.24rem * 4);
  margin-top: calc(0.25rem * 8);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const DashboardCardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(0.25rem * 6);
  margin-top: calc(0.25rem * 8);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CardDefaultDashboard = styled.div`
  padding: calc(0.25rem * 5);
  border-radius: calc(0.5rem + 4px);
  background-color: ${COLORS.primary_card};
  border: 1px solid #312d28;

  h2 {
    font-size: 1.25rem;
    font-weight: inherit;
    color: ${COLORS.primary_font_foreground};
    line-height: calc(1.75 / 1.25);
    margin-bottom: calc(0.25rem * 4);
    letter-spacing: -0.01em;

    @media (max-width: 767px) {
      font-size: 1.15rem;
    }
  }

  p {
    font-size: 0.875rem;
    line-height: calc(1.25 / 0.875);
    color: ${COLORS.primary_font_color};

    @media (max-width: 767px) {
      font-size: 0.870rem;
    }
  }
`;

