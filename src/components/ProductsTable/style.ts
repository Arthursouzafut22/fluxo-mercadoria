import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #2b2b2b;
  border-radius: 16px;
  background: #171412;
  margin-top: calc(0.25rem * 8);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
  table-layout: fixed;

  thead th {
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${COLORS.primary_font_color};
    border-bottom: 1px solid #2b2b2b;
  }

  thead th:last-child,
  tbody td:last-child {
    width: 45px;
  }

  tbody td {
    padding-block: 1rem;
    padding-inline: 1.5rem;
    vertical-align: middle;
    border-bottom: 1px solid #2b2b2b;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr {
    transition: background 0.2s;
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.02);
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ProductName = styled.strong`
  color: ${COLORS.primary_font_foreground};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: calc(1.25 / 0.875);
`;

export const ProductDescription = styled.span`
  font-size: 0.75rem !important;
  color: ${COLORS.primary_font_color};
  font-size: 0.875rem;
  line-height: calc(1 / 0.75);
`;

export const Cost = styled.span`
  color: ${COLORS.primary_font_color};
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
`;

export const SellingPrice = styled.span`
  color: ${COLORS.primary_font_foreground};
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
`;

export const Stock = styled.span`
  color: ${COLORS.primary_yellow};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: calc(1.25 / 0.875);
`;

export const Profit = styled.span`
  color: ${COLORS.primary_success};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: calc(1.25 / 0.875);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.95rem;
`;

export const IconButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  background: transparent;
  color: #b9aca0;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const DeleteButton = styled(IconButton)`
  color: #ff4d4f;

  &:hover {
    background: rgba(255, 77, 79, 0.12);
    color: #ff4d4f;
  }
`;
