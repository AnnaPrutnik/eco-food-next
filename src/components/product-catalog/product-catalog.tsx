import React from 'react';
import { ProductItem } from './product-item';
import { List } from './product-catalog.styled';
import products from './product.json';

export const ProductCatalog = () => {
	return (
		<List>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</List>
	);
};
