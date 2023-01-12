import React from 'react';
import { Box } from '..';
import {
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledButton,
} from './input.styled';

interface InputProps {
  width?: string;
  bg?: 'transparent' | 'light';
  border: 'none' | 'light' | 'dark';
  hasIcon?: boolean;
  label?: string;
  placeholder?: string;
  type?: 'input' | 'select';
  children?: React.ReactNode;
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Field = ({
  width = '100%',
  bg = 'light',
  border,
  hasIcon = false,
  label,
  placeholder,
  type = 'input',
  children,
  onClickAction,
}: InputProps) => {
  return (
    <Box as="label" width={width} display="block">
      {label && <StyledLabel>{label}</StyledLabel>}
      {type === 'input' ? (
        <Box position="relative">
          <StyledInput
            border={border}
            width={width}
            bg={bg}
            icon={hasIcon}
            placeholder={placeholder}
          />
          {hasIcon && (
            <StyledButton onClick={onClickAction}>{children}</StyledButton>
          )}
        </Box>
      ) : (
        <StyledSelect
          border={border}
          width={width}
          bg={bg}
          icon={hasIcon}
          placeholder={placeholder}
        >
          {children}
        </StyledSelect>
      )}
    </Box>
  );
};

export default Field;
