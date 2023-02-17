import React, { useState, useEffect } from 'react';
import { Box } from 'components';
import { Field, FieldInputProps, useField } from 'formik';
import { useDebouncedCallback } from 'use-debounce';
import { PriceLabel, Price, CurrencyLabel } from './fields.styled';
import { InputProps } from 'types';

interface PriceInputProps extends InputProps {
  trigger: string;
}

export const PriceInput: React.FC<PriceInputProps> = ({
  name,
  label,
  trigger,
}) => {
  const [field, meta, helpers] = useField<string>(name);
  const [trigField, trigMeta, trigHelpers] = useField<boolean>(trigger);
  const [value, setValue] = useState(() => field.value);

  const debounced = useDebouncedCallback((value: string) => {
    helpers.setValue(value);
    trigHelpers.setValue(true);
  }, 700);

  useEffect(() => {
    if (value !== field.value) {
      setValue(field.value);
    }
  }, [field.value]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    debounced(value);
  };

  return (
    <Box display="flex" alignItems="center">
      <PriceLabel htmlFor={name}>{label}:</PriceLabel>
      <Box width="68px" height="40px" position="relative">
        <Price
          border="dark"
          bg="transparent"
          type="text"
          autoComplete="off"
          id={name}
          name={name}
          onBlur={field.onBlur}
          onChange={onChangeInput}
          value={value}
        />

        <CurrencyLabel>$</CurrencyLabel>
      </Box>
    </Box>
  );
};
