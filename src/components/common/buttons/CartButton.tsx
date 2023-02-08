import React from 'react';
import { CartIcon } from 'components';
import { CartButton } from './buttons.styled';
import { ButtonProps } from './types';

interface CartBtnProps extends ButtonProps {
  total?: number;
}

export const CartBtn: React.FC<CartBtnProps> = ({ onClick, total }) => {
  return (
    <CartButton onClick={onClick}>
      <CartIcon />
      <span>Cart{total && total > 0 ? `: ${total}` : ''}</span>
    </CartButton>
  );
};
