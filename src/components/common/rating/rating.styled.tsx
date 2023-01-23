import styled from "styled-components";

export const StarsWrap = styled.div`
  width: 22px;
  height: 21px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    width: 110px;
  }
`;

export const Score = styled.span`
 margin-left: ${p => p.theme.space[3]}px; //8
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes[1]}px; //14
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
`;
