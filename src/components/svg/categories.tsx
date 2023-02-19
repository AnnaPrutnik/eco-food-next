import React from 'react';

export const CategoriesIcon = ({size = 24, color = "currentColor"}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <circle cx="3" cy="3" r="3" />
      <circle cx="12" cy="3" r="3" />
      <circle cx="21" cy="3" r="3" />
      <circle cx="3" cy="12" r="3" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="21" cy="12" r="3" />
      <circle cx="3" cy="21" r="3" />
      <circle cx="12" cy="21" r="3" />
      <circle cx="21" cy="21" r="3" />
    </svg>
  );
};
