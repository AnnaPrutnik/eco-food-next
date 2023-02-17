import React from 'react';
import { ICheckBox } from 'types';
import { Checkbox } from './checkbox';
import { CheckboxList } from './checkbox.styled';

interface CheckboxGroupProps {
  name: string;
  options: ICheckBox[];
  trigger: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  options,
  trigger,
}) => {
  return (
    <CheckboxList role="group" className="checkbox-group">
      {options.map((item) => (
        <Checkbox
          name={name}
          value={item.name}
          key={item.id}
          trigger={trigger}
        />
      ))}
    </CheckboxList>
  );
};
