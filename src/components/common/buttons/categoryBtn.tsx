import React from 'react';
import { IButtonProps } from 'types';
import { CategoriesIcon } from 'components';
import { Categories } from './buttons.styled';

export const CategoriesBtn: React.FC<IButtonProps> = ({
  title,
  onClickBtn,
}) => {
  return (
    <Categories onClick={onClickBtn}>
      <CategoriesIcon />
      <span>{title}</span>
    </Categories>
  );
};
