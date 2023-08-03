'use client';

import { IFilterItem } from '@/types';
import { Checkbox } from '../checkbox';
import { ComponentScroll } from '../scroll-area';
import { useCustomParams } from '@/hooks';
import s from './option-group.module.scss';

interface OptionGroupProps {
  options: IFilterItem[];
  name: string;
}

export const OptionGroup = ({ options, name }: OptionGroupProps) => {
  const { getValuesFromParams, setNewSearchParams, removePropertyFromParams } =
    useCustomParams();

  const values = getValuesFromParams(name);

  const normalizedValue = (value: string) => {
    return value.split(' ').join('-');
  };
  const onChangeValues = (value: string) => {
    const property = normalizedValue(value);
    const isValueChecked = values.includes(property);
    const newValues = isValueChecked
      ? values.filter((item) => item !== value)
      : [...values, property];

    if (newValues.length > 0) {
      setNewSearchParams(name, newValues.join('_'));
    } else {
      removePropertyFromParams(name);
    }
  };

  return (
    <ComponentScroll>
      <ul className={s.list} role="group">
        {options.map((item) => {
          const title = item.name.toLowerCase();
          const isChecked = values.includes(normalizedValue(title));
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
