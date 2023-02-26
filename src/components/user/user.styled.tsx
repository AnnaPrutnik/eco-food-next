import styled, { css } from "styled-components";

const Responsive = css`
  display: none;

  ${(p) => p.theme.media.lgMin} {
    display: block;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 0;

  border: none;

  color: ${(p) => p.theme.colors.text};
  background-color: transparent;
`;

export const Name = styled.p`
  ${Responsive}
  font-family: ${(p) => p.theme.fonts.lato};
  font-size: ${(p) => p.theme.fontSizes.f16};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.heading};
`;

export const Arrow = styled.span`
  ${Responsive}
  font-size: 20px;
  transform: rotate(-90deg);
`;
