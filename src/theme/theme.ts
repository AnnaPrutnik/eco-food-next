import { lato, gilroy, rubik } from 'src/fonts/fonts';

export const theme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: `${lato.style.fontFamily}, sans-serif`,
    heading: `${gilroy.style.fontFamily}, sans-serif`,
    banner: `${rubik.style.fontFamily}, sans-serif`,
  },
  fontSizes: [12, 14, 16, 18, 24, 40, 68],
  fontWeights: {
    body: 400,
    heading: 700,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.555,
    heading: 1.2,
  },
  colors: {
    primary: '#4C7C7D',
    secondary: '#E45959',
    text: '#383634',
    white: '#fff',
    black: '#000',
    mainBackground:
      'linear-gradient(325.65deg, rgba(237, 234, 231, 0.5) 0%, rgba(252, 250, 249, 0.5) 100%), #F5F3F1;',
    lightBackground: '#F5F3F1',
    darkBackground: '#EDEAE7',
    darkBorder: 'rgba(56, 54, 52, 0.3)',
    lightBorder: '#EDEAE7',
    lightestBorder: 'rgba(56, 54, 52, 0.1)',
  },
  radii: [10, 20, 24],
};
