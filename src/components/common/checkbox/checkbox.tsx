import React, { useMemo } from 'react';
import { StyledCheckbox, StyledSpan, StyledLabel } from './checkbox.styled';
import { CheckIcon } from 'components';
import { useField } from 'formik';

interface CheckboxProps {
  value: string;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ value, name }) => {
  const [field] = useField(name);

  const normalizedValue = useMemo(() => {
    return value.toLowerCase();
  }, [value]);

  const isChecked = useMemo(() => {
    if (field.value.length === 0) {
      return false;
    }
    if (typeof field.value === 'boolean') {
      return field.value;
    }
    return !!field.value.find((item: string) => item === normalizedValue);
  }, [field, normalizedValue]);

  const checkboxProps =
    typeof field.value === 'boolean'
      ? { name, type: 'checkbox' }
      : { name, type: 'checkbox', value: normalizedValue };
  return (
    <StyledLabel>
      <StyledCheckbox {...checkboxProps} />
      <StyledSpan isChecked={isChecked} aria-hidden="true">
        <CheckIcon />
      </StyledSpan>
      <span>{normalizedValue}</span>
    </StyledLabel>
  );
};
