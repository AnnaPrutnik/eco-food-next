import React from 'react';
import { CategoryButton } from './buttons.styled';
import { CategoriesIcon } from 'components';

export const CategoryBtn = () => {
  return (
    <CategoryButton>
      <CategoriesIcon />
      <span>Categories</span>
    </CategoryButton>
  );
};
