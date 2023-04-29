import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*, ::before, ::after {
    margin: 0;
    paddings: 0;
    box-sizing: border-box
}
body {
  font-family: Arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    text-align: center
}
`;