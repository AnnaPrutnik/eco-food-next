import React from 'react';
import { Field, FieldInputProps } from 'formik';
import FieldBase from './field-base';
import { StyledSelect } from './fields.styled';

interface SelectProps {
  name: string;
  width?: string;
  border?: 'none' | 'light' | 'dark';
  bg?: 'transparent' | 'light';
  label?: string;
  btnType?: 'button' | 'submit' | 'reset';
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Select = ({
  width = '100%',
  bg = 'light',
  border = 'none',
  label,
  btnType = 'button',
  onClickAction,
  name,
  children,
}: SelectProps) => {
  return (
    <FieldBase
      width={width}
      label={label}
      btnType={btnType}
      name={name}
      onClickAction={onClickAction}
    >
      <Field name={name} id={name}>
        {({ field }: { field: FieldInputProps<any> }) => (
          <StyledSelect border={border} bg={bg} {...field}>
            {children}
          </StyledSelect>
        )}
      </Field>
    </FieldBase>
  );
};

export default Select;
