import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.mainBackground};
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0;
  } 

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
