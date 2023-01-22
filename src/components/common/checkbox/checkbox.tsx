import React, { useMemo } from 'react';
import { StyledCheckbox, StyledSpan, StyledLabel } from './checkbox.styled';
import { Check } from 'components';
import { useField } from 'formik';

interface CheckboxProps {
  id: string;
  value: string;
  name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, value, name }) => {
  const [field] = useField(name);

  const isChecked = useMemo(() => {
    return !!field.value.find((item: string) => item === id);
  }, [field, id]);

  return (
    <StyledLabel>
      <StyledCheckbox
        name={name}
        type='checkbox'
        onChange={field.onChange}
        value={id}
      />
      <StyledSpan isChecked={isChecked} aria-hidden='true'>
        <Check />
      </StyledSpan>
      {value}
    </StyledLabel>
  );
};
