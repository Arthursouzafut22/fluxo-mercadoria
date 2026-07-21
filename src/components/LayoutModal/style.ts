import styled from "styled-components";

export const Layout = styled.div`
  position: fixed;
  background-color: red;
  inset: calc(0.25rem * 0);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: calc(0.25rem * 4);
  background-color: rgba(10, 10, 9, 0.75);
  backdrop-filter: blur(16px);
`;
