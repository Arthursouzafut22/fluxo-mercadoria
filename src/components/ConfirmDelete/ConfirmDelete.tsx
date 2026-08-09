import styled from "styled-components";
import { COLORS } from "../../styles/Colors";
import Loading from "../Loading/Loading";
import type { ConfirmModalProps } from "./types";

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onClose,
  loading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <h3>{title}</h3>
      <p>{message}</p>

      <S.ButtonGroup>
        <S.ButtonCancel onClick={onClose} disabled={loading}>
          Cancelar
        </S.ButtonCancel>
        <S.ButtonConfirm onClick={onConfirm} disabled={loading}>
          {loading ? <Loading size={8} color={"#fff"} /> : "Sim, excluir"}
        </S.ButtonConfirm>
      </S.ButtonGroup>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem;
    max-width: 400px;
    background-color: ${COLORS.primary_card};
    border-radius: 16px;

    h3 {
      color: ${COLORS.primary_font_color};
      font-size: 1.25rem;
      font-weight: 600;
    }

    p {
      color: #a8a29e;
      font-size: 0.95rem;
      line-height: 1.4;
    }
  `,

  ButtonGroup: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-top: 1rem;
  `,

  ButtonCancel: styled.button`
    background-color: transparent;
    border: 1px solid #312d28;
    color: ${COLORS.primary_font_color};
    padding: 0.5rem 1rem;
    border-radius: calc(0.5rem - 2px);
    cursor: pointer;
    font-weight: 500;
    transition: 0.1s;

    &:hover:not(:disabled) {
      background-color: #26221d;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,

  ButtonConfirm: styled.button`
    background-color: #dc2626;
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: calc(0.5rem - 2px);
    cursor: pointer;
    font-weight: 500;
    transition: 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
};
