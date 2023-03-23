import React from 'react';
import { ProductItem } from './product-item';
import { List } from './product-catalog.styled';
import { fetcher } from 'helpers';
import useSWR from 'swr';
import { IProduct } from 'types';

export const ProductCatalog = () => {
	const { data: products } = useSWR<IProduct[]>('/api/products', fetcher, {
		refreshInterval: 100000,
	});

	return (
		<List>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</List>
	);
};
