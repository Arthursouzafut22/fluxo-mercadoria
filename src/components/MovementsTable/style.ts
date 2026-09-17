import styled from "styled-components";
import { COLORS } from "../../styles/Colors";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid #2b2b2b;
  border-radius: 16px;
  background: #171412;
  margin-top: calc(0.25rem * 8);

  @media (max-width: 640px) {
    overflow-x: hidden;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  @media (max-width: 1024px) and (min-width: 641px) {
    min-width: 900px;
  }

  thead th {
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${COLORS.primary_font_color};
    border-bottom: 1px solid #2b2b2b;
    white-space: nowrap;
  }

  thead th:last-child,
  tbody td:last-child {
    width: 90px;
    text-align: right;
  }

  tbody td {
    padding-block: 1rem;
    padding-inline: 1.5rem;
    vertical-align: middle;
    border-bottom: 1px solid #2b2b2b;
    overflow-wrap: break-word;
  }

  tbody td:last-child {
    padding-inline: 0.75rem 1.5rem;
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

  @media (max-width: 998px) {
    min-width: 0;
    display: block;

    thead {
      display: none;
    }

    tbody {
      display: block;
    }

    tbody tr {
      display: block;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid #2b2b2b;
    }

    tbody tr:last-child {
      border-bottom: none;
    }

    tbody td {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      width: 100%;
      padding: 0.5rem 0;
      border-bottom: none;
      text-align: right;
    }

    tbody td:last-child {
      width: 100%;
      padding-inline: 0;
      justify-content: flex-end;
    }

    tbody td::before {
      content: attr(data-label);
      flex-shrink: 0;
      text-align: left;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      color: ${COLORS.primary_font_color};
    }

    tbody td:last-child::before {
      content: none;
    }
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
  color: ${COLORS.primary_font_color};
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
`;

export const DateText = styled.span`
  color: ${COLORS.primary_font_color};
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
`;

export const Quantity = styled.span`
  color: ${COLORS.primary_font_foreground};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: calc(1.25 / 0.875);
`;

export const Cost = styled.span`
  color: ${COLORS.primary_font_color};
  font-size: 0.875rem;
  line-height: calc(1.25 / 0.875);
`;

export const Total = styled.span`
  color: ${COLORS.primary_font_foreground};
  font-size: 0.875rem;
  font-weight: 600;
  line-height: calc(1.25 / 0.875);
`;

export const TypeBadge = styled.span<{ $type: number }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.02em;

  background: ${({ $type }) =>
    $type === 1 ? "#2b2b2b" : "rgba(255, 77, 79, 0.12)"};
  color: ${({ $type }) => ($type === 1 ? "#e6dfd8" : "#ff4d4f")};
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
