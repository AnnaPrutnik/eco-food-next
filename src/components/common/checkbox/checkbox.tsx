'use client';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as RadixLabel from '@radix-ui/react-label';
import { CheckIcon } from '@/components';
import s from './checkbox.module.scss';

interface CheckboxProps {
  value: string;
  onChange: (value: string) => void;
  checked: boolean;
}

export const Checkbox = ({ value, onChange, checked }: CheckboxProps) => {
  const onCLick = () => {
    onChange(value);
  };

  return (
    <div className={s.wrapper}>
      <RadixCheckbox.Root
        className={s.root}
        id={value}
        onCheckedChange={onCLick}
        checked={checked}
      >
        <RadixCheckbox.Indicator className={s.indicator}>
          <CheckIcon width={12} height={10} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <RadixLabel.Root htmlFor={value} className={`${s.label}`}>
        {value}
      </RadixLabel.Root>
    </div>
  );
};
