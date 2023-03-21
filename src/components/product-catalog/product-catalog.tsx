import React from 'react';
import { Box } from 'components';
import { ProductItem } from './product-item';
import { List } from './product-catalog.styled';

const productList: { name: string; id: number }[] = new Array(12)
	.fill({ name: 'product' })
	.map(item => {
		const id = Math.floor(Math.random() * 1000000000000 + 1);
		return { ...item, id };
	});

export const ProductCatalog = () => {
	return (
		<List>
			{productList.map(product => (
				<ProductItem key={product.id} />
			))}
		</List>
	);
};
