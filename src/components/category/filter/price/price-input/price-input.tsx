import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import s from './price-input.module.scss';

interface InputProps {
  name: 'min' | 'max';
  label: string;
  value: number;
  min: number;
  max: number;
  onChangeInput: (value: number, type: 'min' | 'max') => void;
}

export const PriceInput = ({
  name,
  label,
  value,
  min,
  max,
  onChangeInput,
}: InputProps) => {
  const [price, setPrice] = useState(() => value);

  const debounced = useDebouncedCallback((value: number) => {
    onChangeInput(value, name);
  }, 700);

  useEffect(() => {
    if (price !== value) {
      setPrice(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrice(value);
    debounced(value);
  };

  const onMobileInputValue = (e: FormEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    setPrice(value);
  };

  return (
    <div className={s.inner}>
      <label htmlFor={name} className={s.label}>
        {label}
      </label>
      <div className={s.wrapper}>
        <input
          type="number"
          step="0.01"
          autoComplete="off"
          id={name}
          name={name}
          onChange={onChange}
          onInput={onMobileInputValue}
          value={price}
          aria-label={`${name} input`}
          className={s.input}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};
