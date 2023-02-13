import React from 'react';
import { Box } from 'components';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box
      width={{
        xs: '100%',
        sm: '375px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      }}
      padding={{
        xs: 'sp16',
        md: 'sp24',
        lg: 'sp64',
        xl: 'sp64 sp135',
      }}
      margin="0 auto"
    >
      {children}
    </Box>
  );
};
