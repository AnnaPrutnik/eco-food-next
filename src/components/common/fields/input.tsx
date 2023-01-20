import React from 'react';
import { Field, FieldInputProps } from 'formik';
import {
  StyledInput,
  SearchButton,
  SendButton,
  InputLabel,
} from './fields.styled';
import { Box, Search, Check } from 'components';

interface InputProps {
  type: 'search' | 'filter' | 'checkout' | 'email';
  name: string;
  label?: string;
  inputType?: 'text' | 'email' | 'phone';
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Input = ({
  type,
  name,
  label,
  inputType = 'text',
  onClickAction,
}: InputProps) => {
  if (type === 'search') {
    return (
      <Box maxWidth='270px' height='44px' position='relative'>
        <Field name={name}>
          {({ field }: { field: FieldInputProps<any> }) => (
            <StyledInput
              border='none'
              bg='light'
              icon={true}
              placeholder='Search'
              type={inputType}
              {...field}
              autoComplete='off'
            />
          )}
        </Field>
        <SearchButton type='submit'>
          <Search />
        </SearchButton>
      </Box>
    );
  }

  if (type === 'filter') {
    return (
      <Box width='100%' height='40px' position='relative'>
        <Field name={name}>
          {({ field }: { field: FieldInputProps<any> }) => (
            <StyledInput
              border='dark'
              bg='transparent'
              icon={true}
              placeholder='Name of brand'
              type='text'
              {...field}
              autoComplete='off'
            />
          )}
        </Field>
        <SearchButton type='button' onClick={onClickAction}>
          <Search />
        </SearchButton>
      </Box>
    );
  }

  if (type === 'checkout') {
    return (
      <Box width='100%'>
        <InputLabel htmlFor={name} mb={3}>
          {label}
        </InputLabel>
        <Box height='44px'>
          <Field name={name} id={name}>
            {({ field }: { field: FieldInputProps<any> }) => (
              <StyledInput
                border='light'
                bg='light'
                type={inputType}
                {...field}
                autoComplete='off'
              />
            )}
          </Field>
        </Box>
      </Box>
    );
  }

  //As default type==='email'
  return (
    <Box width='100%' height='40px' position='relative'>
      <Field name={name} id={name}>
        {({ field }: { field: FieldInputProps<any> }) => (
          <StyledInput
            border='none'
            bg='light'
            icon={true}
            placeholder='Your email'
            type={inputType}
            {...field}
            autoComplete='off'
          />
        )}
      </Field>

      <SendButton type='submit'>
        <Check />
      </SendButton>
    </Box>
  );
};
