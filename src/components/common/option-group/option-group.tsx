'use client';

import { IFilterItem } from '@/types';
import { Checkbox } from '../checkbox';
import { ComponentScroll } from '../scroll-area';
import { useCustomParams } from '@/hooks';
import s from './option-group.module.scss';

interface OptionGroupProps {
  options: IFilterItem[];
  name: string;
  onChange: (value: string[], type: string) => void;
}

export const OptionGroup = ({ options, name, onChange }: OptionGroupProps) => {
  const { getValuesFromParams } = useCustomParams();

  const normalizedValue = (value: string) => {
    return value.split(' ').join('-');
  };

  const values = getValuesFromParams(name);

  const onChangeValues = (value: string) => {
    const property = normalizedValue(value);
    const isValueIncludes = values.includes(property);

    const newValues = isValueIncludes
      ? values.filter((item) => item !== property)
      : [...values, property];
    onChange(newValues, name);
  };

  return (
    <ComponentScroll>
      <ul className={s.list} role="group">
        {options.map((item) => {
          const title = item.name.toLowerCase();
          const titleForCompare = normalizedValue(title);
          const isChecked = values.includes(titleForCompare);

          return (
            <li key={item._id}>
              <Checkbox
                checked={isChecked}
                value={title}
                onChange={onChangeValues}
              />
            </li>
          );
        })}
      </ul>
    </ComponentScroll>
  );
};
