import React from 'react';
import { SelectLabel, FilterSelect } from './fields.styled';
import { Box } from 'components';
import { SelectProps } from 'types';
import { useSelectProps } from 'hooks';

export const ResultFilterInput: React.FC<SelectProps> = ({
  label,
  name,
  options,
}) => {
  const { value, onBlurSelect, onChangeSelect } = useSelectProps(name, options);

  return (
    <Box display="flex" alignItems="center">
      <SelectLabel htmlFor={name} mr={5}>
        {label}
      </SelectLabel>
      <Box width="148px">
        <FilterSelect
          classNamePrefix="custom-select"
          name={name}
          instanceId={name}
          value={value}
          onChange={onChangeSelect}
          onBlur={onBlurSelect}
          options={options}
        />
      </Box>
    </Box>
  );
};
