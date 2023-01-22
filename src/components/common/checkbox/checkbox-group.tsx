import React from 'react';
import { ICheckBox } from 'types';
import { Box } from 'components';
import { Checkbox } from './checkbox';
import { CheckboxList } from './checkbox.styled';

interface CheckboxGroupProps {
  name: string;
  options: ICheckBox[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
}) => {
  return (
    <Box role='group'>
      <CheckboxList>
        {options.map((item) => (
          <li key={item.id}>
            <Checkbox name={name} id={item.id} value={item.name} />
          </li>
        ))}
      </CheckboxList>
    </Box>
  );
};
