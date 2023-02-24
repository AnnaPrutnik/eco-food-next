import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from 'components';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const Layout = ({ title = 'Eco food', children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && isLoading) {
      setIsLoading(false);
    }
  }, [router.isReady, isLoading]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pets project/internet store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{isLoading ? <>isLoading</> : <>{children}</>}</main>
    </>
  );
};
