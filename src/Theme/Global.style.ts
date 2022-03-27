import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

*{
    box-sizing: border-box;
    padding:0;
    margin:0
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
}
`;

export default GlobalStyle;
