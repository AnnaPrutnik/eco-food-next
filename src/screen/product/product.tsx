import React from 'react';
import { Page, Box, Breadcrumbs, CategoryTitle } from 'components';

export const ProductScreen = () => {
	return (
		<Page>
			<Box display='flex' flexDirection='column' gridGap='sp16'>
				<Breadcrumbs />
				<CategoryTitle text='Product Details' />
			</Box>
		</Page>
	);
};
