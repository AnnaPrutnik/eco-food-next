import React from 'react';
import { Header, Box } from 'components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      css={{ background: '$mainBackground', maxW: '100%', minHeight: '100vh' }}
    >
      <Header />
      <main>{children}</main>
    </Box>
  );
};
