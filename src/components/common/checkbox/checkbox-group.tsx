import React from 'react';
import { ICheckBox } from './types';
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
    <CheckboxList role="group">
      {options.map((item) => (
        <Checkbox name={name} value={item.name} key={item.id} />
      ))}
    </CheckboxList>
  );
};
