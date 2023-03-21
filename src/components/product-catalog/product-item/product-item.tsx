import React from 'react';
import { Box } from 'components';
import { ListItem, Rating } from './product-item.styled';

interface IProduct {
	id: number;
	url: string;
	title: string;
	description: string;
	image: string;
	price: number;
	oldPrice: number;
	size: number;
	deliveryText: string;
	inStock: boolean;
	measure: number;
}

const product: IProduct = {
	id: 1,
	url: 'banana',
	title: 'Banana',
	description: 'Tasty for monkeys',
	image: 'https://www.pexels.com/uk-ua/photo/357650/',
	price: 400,
	oldPrice: 500,
	size: 500,
	deliveryText: 'delivery 1-2 days',
	inStock: true,
	measure: 1,
};

export const ProductItem = () => {
	const productRating = 4.8;
	const totalRating = 5;
	return (
		<ListItem>
			<Rating></Rating>
		</ListItem>
	);
};