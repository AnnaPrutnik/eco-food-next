import React from 'react';
import { Box } from 'components';
import { Field, FieldInputProps } from 'formik';
import { PriceLabel, Price, CurrencyLabel } from './fields.styled';
import { InputProps } from './types';

export const PriceInput: React.FC<InputProps> = ({ name, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <PriceLabel htmlFor={name}>{label}:</PriceLabel>
      <Box width="68px" height="40px" position="relative">
        <Field name={name}>
          {({ field }: { field: FieldInputProps<number> }) => (
            <Price
              border="dark"
              bg="transparent"
              type="number"
              {...field}
              autoComplete="off"
              id={name}
            />
          )}
        </Field>
        <CurrencyLabel>$</CurrencyLabel>
      </Box>
    </Box>
  );
};
