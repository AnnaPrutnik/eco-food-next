import styled, { css } from "styled-components";

const main = css`
  font-family: ${(p) => p.theme.fonts.body};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.primary};
`;

export const StarsWrap = styled.div`
  width: 22px;
  height: 21px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    width: 110px;
  }
`;

export const ShortRating = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30px;
  height: 32px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    width: 56px;
    height: 20px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SmallStarsWrap = styled.div`
  display: flex;
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    width: 16px;
    height: 16px;
  }
`;

export const Score = styled.span`
  ${main}
  margin-left: ${(p) => p.theme.space[3]}px; //8
  font-size: ${(p) => p.theme.fontSizes[1]}px; //14
`;

export const SmallScore = styled.span`
  ${main}
  font-size: ${(p) => p.theme.fontSizes[0]}px; //12

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    font-size: ${(p) => p.theme.fontSizes[1]}px; //14
  }
`;
