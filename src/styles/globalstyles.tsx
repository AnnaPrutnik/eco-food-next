import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.mainBackground};
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    min-height: 100vh;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  p {
    padding: 0;
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }


  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
