import { useState, useEffect, FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header, ScrollArea } from 'components';

interface LayoutProps {
	title?: string;
}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
	title = 'Eco food',
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content='Pet project/internet store' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
};
