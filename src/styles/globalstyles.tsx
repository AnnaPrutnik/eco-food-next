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

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
