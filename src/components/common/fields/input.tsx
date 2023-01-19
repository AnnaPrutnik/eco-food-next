import React from 'react';
import { Field, FieldInputProps } from 'formik';
import { StyledInput } from './fields.styled';
import FieldBase from './field-base';

interface InputProps {
  name: string;
  width?: string;
  border?: 'none' | 'light' | 'dark';
  bg?: 'transparent' | 'light';
  icon?: React.ReactNode;
  label?: string;
  placeholder?: string;
  btnType?: 'button' | 'submit' | 'reset';
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input = ({
  width = '100%',
  bg = 'light',
  border = 'none',
  icon,
  label,
  placeholder,
  btnType = 'button',
  onClickAction,
  name,
}: InputProps) => {
  return (
    <FieldBase
      width={width}
      icon={icon}
      label={label}
      btnType={btnType}
      name={name}
      onClickAction={onClickAction}
    >
      <Field name={name} id={name}>
        {({ field }: { field: FieldInputProps<any> }) => (
          <StyledInput
            border={border}
            bg={bg}
            icon={icon}
            placeholder={placeholder}
            type='text'
            {...field}
            autoComplete='off'
          />
        )}
      </Field>
    </FieldBase>
  );
};

export default Input;
