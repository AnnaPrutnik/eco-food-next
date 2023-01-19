import styled, { css } from 'styled-components';
import { Field } from 'formik';

interface InputProps {
  bg: 'transparent' | 'light';
  border: 'none' | 'light' | 'dark';
  icon?: React.ReactNode | undefined;
}

//ToDo: change font styled from theme
export const base = css<InputProps>`
  position: relative;
  width: 100%;
  height: 44px;
  font-family: inherit;

  /* font styling*/
  font-size: 15px;
  line-height: 20px;
  /* font styling*/

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

  &::placeholder {
    opacity: 0.5;
  }
`;

//ToDo: change text setting
export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  opacity: 0.8;

  /* font styling*/
  font-size: 13px;
  line-height: 16px;
  /* font styling*/
`;

export const StyledInput = styled.input`
  ${base}
`;

export const StyledSelect = styled.select`
  ${base};

  &::-ms-expand {
    display: none;
  }
`;

export const StyledOption = styled.option`
  padding: 10px 15px;
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
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.text};

  &:hover {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
