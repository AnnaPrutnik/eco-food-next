import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.mainBackground};
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.lato};
    min-height: 100vh;
  }

  h1, h2,h3,h4,h5,h6, p {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
