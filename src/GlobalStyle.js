import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: initial;
    padding: 0;
    }

    body{
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.whisper};
    }
`;