import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: initial;
    }

    body{
    font-family: 'Poppins', sans-serif;
    }
`;