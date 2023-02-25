import React from 'react';
import { Box } from 'components';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box
      width={['100%', '375px', '768px', '1200px', '1440px']}
      padding={['sp16', 'sp16', 'sp36', 'sp64', `64px 135px`]}
      margin="0 auto"
    >
      {children}
    </Box>
  );
};
