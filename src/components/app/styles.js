import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        margin-left: calc(100vw - 100%);
    }

    body {
        position: relative;
        margin: 0;
        min-width: ${(props) => props.theme.pageWidth};
        min-height: 100%;
        font-family: ${(props) => props.theme.fontFamily};
        font-size: ${(props) => props.theme.fontSize};
        line-height: ${(props) => props.theme.lineHeight};
        font-weight: 400;
        color: ${(props) => props.theme.colorTextBase};
    }

    #root {
        display: flex;
        min-height: 100vh;
    }
`;
