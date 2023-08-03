'use client';
import { useState, ChangeEvent } from 'react';
import s from './brand-input.module.scss';
import { SearchIcon } from '@/components';

interface BrandInputProps {
  onChangeInput: (value: string) => void;
}

export const BrandInput = ({ onChangeInput }: BrandInputProps) => {
  const [filter, setFilter] = useState('');

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
    onChangeInput(value);
  };

  return (
    <div className={s.inner}>
      <div className={s.icon}>
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Name of brand"
        name="brand filter"
        onChange={onChangeFilter}
        autoComplete="off"
        value={filter}
        className={s.input}
      />
    </div>
  );
};
