import React from 'react';
import { Box } from '../';
import { StyledLabel, StyledButton } from './fields.styled';

interface FieldBaseProps {
  name: string;
  width: string;
  icon?: React.ReactNode;
  label: string | undefined;
  btnType: 'button' | 'submit' | 'reset';
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const FieldBase = ({
  width,
  icon,
  label,
  btnType,
  onClickAction,
  name,
  children,
}: FieldBaseProps) => {
  return (
    <Box width={width}>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <Box position='relative'>
        {children}
        {icon && (
          <StyledButton onClick={onClickAction} type={btnType}>
            {icon}
          </StyledButton>
        )}
      </Box>
    </Box>
  );
};

export default FieldBase;
