import React from 'react';
import Head from 'next/head';
import { Header } from 'components';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const Layout = ({ title = 'Eco food', children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pets project/internet store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
