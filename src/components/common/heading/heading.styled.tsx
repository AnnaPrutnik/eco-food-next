import styled, { css } from "styled-components";

const main = css`
  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.heading};
  line-height: ${(p) => p.theme.lineHeights.heading};
  color: ${(p) => p.theme.colors.heading};
  text-transform: lowercase;

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const Categorie = styled.h1`
  ${main};
  font-size: ${(p) => p.theme.fontSizes[4]}px; //24
  letter-spacing: ${(p) => p.theme.letterSpacings.heading};

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.fontSizes[6]}px; //56
  }
`;

export const Product = styled.h1`
  ${main};
  font-size: ${(p) => p.theme.fontSizes[4]}px; //24

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.fontSizes[5]}px; //40
  }
`;

export const Section = styled.h2`
  ${main}
  font-size: ${(p) => p.theme.fontSizes[2]}px; //16

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.fontSizes[4]}px; //24
  }
`;

export const Card = styled.h3`
  ${main}
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes[2]}px; //16
  font-weight: ${(p) => p.theme.fontWeights.medium};
`;

export const Filter = styled.h4`
  ${main}
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.fontSizes[3]}px; //18
  line-height: ${(p) => p.theme.lineHeights.heading};
`;
