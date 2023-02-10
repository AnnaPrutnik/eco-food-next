import styled, { css } from 'styled-components';

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
  border: none;
  gap: 16px;
`;

export const CartButton = styled.button`
  ${btnBaseMobile};
  ${mobileSettingWithIcons};
  border: none;

  ${({ theme }) => theme.media.mdMin} {
    ${tabletSettingsWithIcons};
    ${btnBaseTablet};
    min-width: 133px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

interface ErrorButtonProps {
  color: 'red' | 'transparent';
}

export const ErrorButton = styled.button<ErrorButtonProps>`
  ${btnBaseMobile};
  ${btnBaseTablet};
  display: block;
  background-color: ${({ color, theme }) =>
    color === 'red' ? theme.colors.secondary : 'transparent'};
  width: 150px;
  font-size: ${({ theme }) => theme.fontSizes.f14};
  color: ${({ color, theme }) =>
    color === 'red' ? theme.colors.white : theme.colors.secondary};
  border-color: ${({ color, theme }) =>
    color === 'red' ? 'transparent' : theme.colors.secondary};

  &:hover,
  &:focus {
    color: ${({ color, theme }) =>
      color === 'red' ? theme.colors.secondary : theme.colors.white};
    background-color: ${({ color, theme }) =>
      color === 'red' ? 'transparent' : theme.colors.secondary};
    border-color: ${({ color, theme }) =>
      color === 'transparent' ? 'transparent' : theme.colors.secondary};
  }
`;
