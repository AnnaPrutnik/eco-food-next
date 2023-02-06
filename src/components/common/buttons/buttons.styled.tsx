import test from 'node:test';
import styled, { css } from 'styled-components';

export const IconBtn = styled.button`
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  stroke: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
export const VisuallyHiddenSpan = styled.span`
  &:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

const btnBase = css`
  height: 44px;
  outline: 0;
  padding-left: ${({ theme }) => theme.space[5]}px;
  padding-right: ${({ theme }) => theme.space[5]}px;
  background: transparent;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.radii[0]}px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: ${({ theme }) => theme.lineHeights.buttons};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  text-transform: capitalize;
  transition: all ${({ theme }) => theme.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  & svg {
    transition: all ${({ theme }) => theme.transition};
  }
`;

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

const transparentBtn = css`
  ${btnBase};
`;

const whiteBtn = css`
  ${btnBase};
  background-color: white;
`;

const colorBtn = css`
  ${btnBase}
`;

export const Categories = styled.button`
  ${transparentBtn};
  ${btnWithIconFill};
  gap: 16px;
  padding: 0;
`;

export const Cart = styled.button`
  ${whiteBtn};
  ${btnWithIconStroke};
  gap: 12px;
`;
