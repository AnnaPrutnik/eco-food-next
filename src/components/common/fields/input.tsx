import React from 'react';
import { Field, FieldInputProps } from 'formik';
import {
  StyledInput,
  SearchButton,
  SendButton,
  InputLabel,
  PriceInput,
  PriceLabel,
  SearchInput,
} from './fields.styled';
import { Box, Search, Check } from 'components';

interface InputProps {
  type: 'search' | 'filter' | 'checkout' | 'email' | 'price';
  name: string;
  label?: string;
  inputType?: 'text' | 'email' | 'phone';
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  name,
  label,
  inputType = 'text',
  onChangeInput,
}: InputProps) => {
  if (type === 'search') {
    return (
      <Box maxWidth='270px' height='44px' position='relative'>
        <Field name={name}>
          {({ field }: { field: FieldInputProps<any> }) => (
            <SearchInput
              border='none'
              bg='light'
              icon={true}
              placeholder='Search'
              type='text'
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
        <StyledInput
          border='dark'
          bg='transparent'
          icon={true}
          placeholder='Name of brand'
          type='text'
          name={name}
          onChange={onChangeInput}
          autoComplete='off'
        />
        <SearchButton type='button'>
          <Search />
        </SearchButton>
      </Box>
    );
  }

  if (type === 'price') {
    return (
      <Box width='68px' height='40px' position='relative'>
        <Field name={name}>
          {({ field }: { field: FieldInputProps<any> }) => (
            <PriceInput
              border='dark'
              bg='transparent'
              type='number'
              {...field}
              autoComplete='off'
            />
          )}
        </Field>
        <PriceLabel>{label}</PriceLabel>
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
