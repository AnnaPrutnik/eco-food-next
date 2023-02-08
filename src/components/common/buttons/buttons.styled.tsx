import styled, { css } from 'styled-components';

const btnWithIconStroke = css`
  & svg {
    stroke: ${({ theme }) => theme.colors.text};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

const btnWithIconFill = css`
  & svg {
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover svg,
  &:focus svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const btnBaseMobile = css`
  outline: none;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.radii.r10};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: ${({ theme }) => theme.fontSizes.f16};
  line-height: ${({ theme }) => theme.lineHeights.buttons};
  letter-spacing: ${({ theme }) => theme.letterSpacings.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: ${({ theme }) => theme.transition.default};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    transition: ${({ theme }) => theme.transition.default};
  }
`;

const btnBaseTablet = css`
  height: 44px;
  padding: 0 ${({ theme }) => theme.space.sp16};
`;

const mobileSettingWithIcons = css`
  span {
    display: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const tabletSettingsWithIcons = css`
  span {
    display: inline;
  }
`;

export const CategoryButton = styled.button`
  ${btnBaseMobile};
  ${mobileSettingWithIcons};
  ${btnWithIconFill};
  border: none;
  gap: 16px;

  span {
    display: inline;
  }
`;

export const CartButton = styled.button`
  ${btnBaseMobile};
  ${mobileSettingWithIcons};
  ${btnWithIconStroke};
  border: none;

  ${({ theme }) => theme.media.mdMin} {
    ${tabletSettingsWithIcons};
    ${btnBaseTablet};
    min-width: 133px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
