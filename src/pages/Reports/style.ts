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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(0.25rem * 2);
  font-weight: 500;
  font-size: 1rem;
  background-color: ${COLORS.primary_yellow};
  padding-block: calc(0.25rem * 2.5);
  padding-inline: calc(0.25rem * 4);
  border-radius: calc(0.5rem - 2px);
  border: none;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Card = styled.section`
  background: ${COLORS.primary_card};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: calc(0.25rem * 5);
  width: 100%;
  max-width: 1580px;
  box-sizing: border-box;
  margin-top: calc(0.25rem * 8);
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 600;
  font-size: 1.125rem;
  font-weight: inherit;
  color: ${COLORS.primary_font_foreground};
`;

export const FieldsRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 260px;
  min-width: 200px;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${COLORS.primary_font_color};
  margin-bottom: 8px;
`;

export const DateInput = styled.input`
  background-color: lab(13.0017% 0.968114 2.91783);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.75rem;
  font-size: 15px;
  color: #f2ede6;
  outline: none;
  transition: border-color 0.15s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #6f6b6c;
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.28);
  }

  /* Calendar picker icon (Chromium) */
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.85;
    cursor: pointer;
  }
`;

export const ClearButton = styled.button`
  flex: 1 1 260px;
  min-width: 200px;
  background-color: #1c1a1b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 13px 14px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #f2ede6;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background-color: #242121;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background-color: #171515;
  }
`;

export const HelperText = styled.p`
  margin: 12px 0 0;
  font-size: 0.75rem;
  color: ${COLORS.primary_font_color};
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 296px));
  gap: calc(0.24rem * 4);
  margin-top: calc(0.25rem * 7);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const CardPre = styled.section`
  background: ${COLORS.primary_card};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: calc(0.25rem * 5);
  width: 100%;
  max-width: 1580px;
  box-sizing: border-box;
  margin-top: calc(0.25rem * 7);
`;

export const Summary = styled.p`
  margin: 0 0 20px;
  font-size: 0.75rem;
  color: ${COLORS.primary_font_color};
`;

export const Instruction = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${COLORS.primary_font_color};
  line-height: calc(1.25 / 0.875);
`;

export const Highlight = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  color: #d9a441;
`;
