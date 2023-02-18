import React from 'react';
import { Box, CheckIcon } from 'components';
import { Field, FieldInputProps } from 'formik';
import { StyledInput, SendButton } from './fields.styled';
import { InputProps } from 'types';

export const SubscribeInput: React.FC<InputProps> = ({ name }) => {
  return (
    <Box width="100%" height="40px" position="relative">
      <Field name={name} id={name}>
        {({ field }: { field: FieldInputProps<string> }) => (
          <StyledInput
            border="none"
            bg="light"
            icon={true}
            placeholder="Your email"
            {...field}
            autoComplete="off"
          />
        )}
      </Field>

      <SendButton type="submit">
        <CheckIcon />
      </SendButton>
    </Box>
  );
};
