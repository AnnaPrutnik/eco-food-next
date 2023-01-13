import styled, { css } from 'styled-components';

interface InputProps {
  width?: string;
  bg?: 'transparent' | 'light';
  border: 'none' | 'light' | 'dark';
  icon: boolean;
}

export const base = css<InputProps>`
  position: relative;
  width: ${({ width }) => width};
  height: 40px;
  padding: 12px ${({ icon }) => (icon ? '40' : '16')}px 12px 16px;
  outline: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ bg, theme }) =>
    bg === 'light' ? theme.colors.white : 'transparent'};
  border: ${({ border, theme }) => {
    switch (border) {
      case 'dark':
        return `1px solid ${theme.colors.darkBorder}`;
      case 'light':
        return `1px solid ${theme.colors.lightBorder}`;
      default:
        return 'none';
    }
  }};

  &:placeholder {
    opacity: 0.5;
  }
`;

export const StyledLabel = styled.p`
  margin-bottom: 8px;
  opacity: 0.8;
`;

export const StyledInput = styled.input`
  ${base}
`;

export const StyledSelect = styled.select`
  ${base}
`;

export const StyledButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  padding: 0;
  margin: 0;
  display: block;
  background-color: transparent;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text};
  border: none;
  outline: none;
  display: flex;
`;
