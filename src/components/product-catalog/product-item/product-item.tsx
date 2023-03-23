import { FC } from 'react';
import { Box, CardTitle } from 'components';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
	ListItem,
	Rating,
	Price,
	OldPrice,
	SaleBox,
	Measure,
	RatingBox,
	ImageBox,
	CardLink,
} from './product-item.styled';
import { AddBtn } from './add-btn';
import { SaleTips } from './sale-tip';
import { Star } from 'components/svg';

interface IProduct {
	id: number;
	url: string;
	title: string;
	description: string;
	image: string;
	price: number;
	oldPrice: number | null;
	size: number;
	deliveryText: string;
	inStock: boolean;
	measure: string;
	rating: number;
}

interface ProductItemProps {
	product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const router = useRouter();

	const linkTo = `${router.asPath}/${product.url}`;

	const transformPrice = (price: number) => {
		return price.toFixed(2);
	};
	return (
		<ListItem>
			<CardLink href={linkTo}>
				<ImageBox className='image-box'>
					<Image
						src={product.image}
						alt={`photo from pixel.com for ${product.title}`}
						fill
						sizes='contain'
					/>
				</ImageBox>
				{product.oldPrice && <SaleTips />}

				<RatingBox>
					<Rating>
						<Box
							width={['12px', '12px', '18px']}
							height={['12px', '12px', '17px']}
							display='flex'
							justifyContent='center'
							alignItems='center'
						>
							<Star />
						</Box>
						<Box>{product.rating}/5</Box>
					</Rating>
				</RatingBox>
				<Box display='flex' alignItems='center' mb={12} flexGrow={1}>
					<CardTitle text={product.title} />
				</Box>
				<Box
					display='flex'
					flexDirection='column'
					alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
					justifyContent='end'
					minHeight={['auto', 'auto', 'auto', '56px']}
				>
					{product.oldPrice ? (
						<SaleBox>
							<Price isSale={true}>$ {transformPrice(product.price)}</Price>
							<OldPrice>$ {transformPrice(product.oldPrice)}</OldPrice>
						</SaleBox>
					) : (
						<Price isSale={false}>$ {transformPrice(product.price)}</Price>
					)}
					<Measure>/ 500g</Measure>
				</Box>
			</CardLink>

			<AddBtn />
		</ListItem>
	);
};
