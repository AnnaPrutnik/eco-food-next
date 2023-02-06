import React from 'react';
import { Header, Box } from 'components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box css={{ background: '$mainBackground' }}>
      <Header />
      <main>{children}</main>
    </Box>
  );
};
