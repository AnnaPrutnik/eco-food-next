import 'styled-components';
import { lato, gilroy, rubik } from 'fonts';
interface BreakpointsType {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

class Breakpoints {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;

  constructor(breakpoints: BreakpointsType) {
    Object.assign(this, breakpoints);
  }

  map(fn: (value: any) => any) {
    return Object.values(this).map(fn);
  }
}

export const theme = {
  space: {
    sp0: '0px',
    sp4: '4px',
    sp8: '8px',
    sp12: '12px',
    sp16: '16px',
    sp20: '20px',
    sp24: '24px',
    sp28: '28px',
    sp32: '32px',
    sp36: '36px',
    sp40: '40px',
    sp44: '44px',
    sp48: '48px',
    sp64: '64px',
    sp128: '128px',
    sp256: '256px',
  },
  fonts: {
    lato: `${lato.style.fontFamily}, sans-serif`,
    gilroy: `${gilroy.style.fontFamily}, sans-serif`,
    rubik: `${rubik.style.fontFamily}, sans-serif`,
  },
  fontSizes: {
    f12: '12px',
    f14: '14px',
    f16: '16px',
    f18: '18px',
    f24: '24px',
    f32: '32px',
    f40: '40px',
    f56: '56px',
  },
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
    input: 1.25,
    buttons: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    heading: '0.02em',
  },
  colors: {
    primary: '#4C7C7D',
    secondary: '#E45959',
    text: '#383634',
    heading: '#383634',
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
  radii: { r10: '10px', r20: '20px', r24: '24px', rounded: '50%' },

  transition: { default: '0.5s ease-out' },
  breakpoints: new Breakpoints({
    sm: '375px',
    md: '768px',
    lg: '1200px',
    xl: '1440px',
  }),
  media: {
    smMin: '@media screen and (min-width: 375px)',
    mdMin: '@media screen and (min-width: 768px)',
    lgMin: '@media screen and (min-width: 1200px)',
    xlMin: '@media screen and (min-width: 1440px)',
    smMax: '@media screen and (max-width: 374.8px)',
    mdMax: '@media screen and (max-width: 767.8px)',
    lgMax: '@media screen and (max-width: 1199.8px)',
    xlMax: '@media screen and (max-width: 1439.8px)',
  },
};
