import { styled } from "styled-components";
import { COLORS } from "../../styles/Colors";

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.88rem;
    padding: 0.38rem;

    @media (max-width: 767px) {
      gap: 0.63rem;
      padding: 0.38rem;
    }

    span {
      font-size: 0.63rem;
      display: block;
      color: ${COLORS.primary_yellow};
      letter-spacing: 0.35rem;
      text-transform: uppercase;
      text-align: center;
    }

    h1 {
      font-size: 2.25rem;
      color: ${COLORS.primary_font_foreground};
      letter-spacing: -0.01em -0.36px;
      text-align: center;
      font-weight: 500;

      @media (max-width: 767px) {
        font-size: 1.9rem;
      }
    }

    p {
      text-align: center;
      color: ${COLORS.primary_font_color};
      font-size: 0.875rem;

      @media (max-width: 767px) {
        font-size: 0.825rem;
      }
    }
  }
`;
