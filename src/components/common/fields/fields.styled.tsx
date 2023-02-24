import styled, { css } from 'styled-components';
import Select from 'react-select';
import { space, SpaceProps } from 'styled-system';

interface InputProps {
  bg: 'transparent' | 'light';
  border: 'none' | 'light' | 'dark';
  icon?: boolean | undefined;
}

export const base = css<InputProps>`
  position: relative;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.f14};
  line-height: ${({ theme }) => theme.lineHeights.input};
  padding-right: ${({ theme, icon }) =>
    icon ? theme.space[11] : theme.space.sp16};
  padding-left: ${({ theme }) => theme.space.sp16};
  border-radius: ${({ theme }) => theme.radii.r10};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ bg, theme }) =>
    bg === 'light' ? theme.colors.white : 'transparent'};
  outline: none;
  border: ${({ border, theme }) => {
    switch (border) {
      case 'dark':
        return `1px solid ${theme.colors.darkBorder}`;
      case 'light':
        return `1px solid ${theme.colors.lightBorder}`;
      default:
        return '1px solid transparent';
    }
  }};
  transition: ${({ theme }) => `all ${theme.transition.default}`};

  &::placeholder {
    opacity: 0.5;
  }

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};

    & ~ button {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &: focus {
    box-shadow: ${({ theme }) => `0px 4px 6px -5px ${theme.colors.primary}`};
  }
`;

export const StyledInput = styled.input`
  ${base};
  min-height: 40px;
`;

export const Price = styled.input`
  ${base};
  padding-left: 25px;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Search = styled.input`
  ${base};
  font-size: ${({ theme }) => theme.fontSizes.f16};
`;

export const baseLabel = css<SpaceProps>`
  ${space}
  display: block;
  opacity: 0.8;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const InputLabel = styled.label`
  ${baseLabel}
  font-size: ${({ theme }) => theme.fontSizes.f12};
  line-height: ${({ theme }) => theme.lineHeights.input};
`;

export const SelectLabel = styled.label`
  ${baseLabel}
  font-size: ${({ theme }) => theme.fontSizes.f16};
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

const selectBase = css`
  .custom-select {
    &__indicator-separator {
      display: none;
    }
    &__control {
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.lightBorder};
      border-radius: ${({ theme }) => theme.radii.r10};
      box-shadow: none;
      font-size: ${({ theme }) => theme.fontSizes.f14} !important;
      line-height: ${({ theme }) => theme.lineHeights.heading} !important;
      transition: ${({ theme }) => `all ${theme.transition.default}`};
      &:hover {
        border-color: ${({ theme }) => theme.colors.primary} !important;
        & .custom-select__indicator {
          color: ${({ theme }) => theme.colors.primary} !important;
        }
      }
      &--menu-is-open {
        border-color: ${({ theme }) => theme.colors.primary} !important;
        box-shadow: ${({ theme }) =>
          `0px 4px 6px -5px ${theme.colors.primary}`};
        & .custom-select__indicator {
          transform: rotate(180deg);
          color: ${({ theme }) => theme.colors.primary} !important;
        }
      }
    }
    &__input-container {
      color: ${({ theme }) => theme.colors.text} !important;
    }
    &__indicator {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text} !important;
    }
    &__menu {
      border-radius: ${({ theme }) => theme.radii.r10};
    }
    &__option {
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSizes.f14} !important;
      line-height: ${({ theme }) => theme.lineHeights.heading} !important;
      &:hover {
        background-color: ${({ theme }) => theme.colors.darkBackground};
      }
      &--is-selected,
      &--is-selected:hover {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const FilterSelect = styled(Select)`
  ${selectBase};

  .custom-select {
    &__control {
      min-height: 40px;
      background-color: transparent;
      border-color: ${({ theme }) => theme.colors.darkBorder};
    }
  }
`;

export const CheckoutSelect = styled(Select)`
  ${selectBase};
  .custom-select__control {
    min-height: 44px;
  }
`;

export const btnBase = css`
  position: absolute;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  ${btnBase};
  right: 16px;
  top: 50%;
  background-color: transparent;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SendButton = styled.button`
  ${btnBase};
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.text};
  border-top-right-radius: ${({ theme }) => theme.radii.r10};
  border-bottom-right-radius: ${({ theme }) => theme.radii.r10};
  color: ${({ theme }) => theme.colors.white};
`;

export const CurrencyLabel = styled.p`
  position: absolute;
  top: 19px;
  transform: translateY(-50%);
  left: 12px;
`;

export const PriceLabel = styled.label`
  opacity: 0.5;
  margin-right: ${({ theme }) => theme.space.sp12};
  text-transform: capitalize;

  ${({ theme }) => theme.media.mdMin} {
    margin-right: ${({ theme }) => theme.space.sp8};
  }

  ${({ theme }) => theme.media.lgMin} {
    margin-right: ${({ theme }) => theme.space.sp12};
  }
`;
