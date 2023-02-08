import React from 'react';
import { Header } from 'components';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </>
  );
};
