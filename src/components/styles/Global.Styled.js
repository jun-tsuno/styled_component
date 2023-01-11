import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.header};
        color: black;
        font-family: "Poppins", sans-serif;
        font-size: 1.1rem
    }
`;

export default GlobalStyles;
