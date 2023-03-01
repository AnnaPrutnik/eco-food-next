import React from 'react';
import { Box, SearchIcon } from 'components';
import { Field, FieldInputProps } from 'formik';
import { SearchButton, Search } from './fields.styled';

export const SearchInput = () => {
  return (
    <Box height="44px" position="relative">
      <Field name="filter">
        {({ field }: { field: FieldInputProps<string> }) => (
          <Search
            border="none"
            bg="light"
            icon={true}
            placeholder="Search"
            type="text"
            {...field}
            autoComplete="off"
          />
        )}
      </Field>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </Box>
  );
};
