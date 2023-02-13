import React, { useState } from 'react';
import { Box, SearchIcon } from 'components';
import { StyledInput, SearchButton } from './fields.styled';
import { InputProps } from './types';

export const BrandFilter: React.FC<InputProps> = ({ name, onChangeInput }) => {
  const [filter, setFilter] = useState('');

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    onChangeInput(e.target.value);
  };

  return (
    <Box width="100%" height="40px" position="relative">
      <StyledInput
        border="dark"
        bg="transparent"
        icon={true}
        placeholder="Name of brand"
        type="text"
        name={name}
        onChange={onChangeFilter}
        autoComplete="off"
        value={filter}
      />
      <SearchButton type="button">
        <SearchIcon />
      </SearchButton>
    </Box>
  );
};
