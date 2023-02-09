import React from 'react';
import { CategoryButton } from './buttons.styled';
import { CategoriesIcon, LoadMoreIcon } from 'components';

export const CategoryBtn = () => {
  return (
    <CategoryButton>
      <CategoriesIcon />
      Categories
    </CategoryButton>
  );
};
