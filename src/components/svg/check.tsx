import React from 'react';
import { IconProps } from 'types';

export const Check: React.FC<IconProps> = ({ width = 16, height = 13 }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
    >
      <path
        d='M1.33301 5.85L6.66634 11.05L14.6663 1.95'
        stroke='inherit'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
