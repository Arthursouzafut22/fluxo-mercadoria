import { createGlobalStyle } from "styled-components";
import { COLORS } from "./Colors";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${COLORS.primary_background};
}

body * {
     font-family: "Inter", sans-serif;
}
`;
