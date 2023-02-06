import React from 'react';
import { IButtonProps } from 'types';
import { CartIcon } from 'components';
import { Cart } from './buttons.styled';

export const CartButton: React.FC<IButtonProps> = ({ title, onClickBtn }) => {
  return (
    <Cart onClick={onClickBtn}>
      <CartIcon />
      <span>{title}</span>
    </Cart>
  );
};
