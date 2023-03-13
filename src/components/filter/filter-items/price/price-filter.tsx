import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Accordion } from 'components';
import { PriceInput } from './price-input';
import { Slider } from './price-slider';
import { useQueryParams } from 'hooks';

interface PriceFilterProps {
	data: {
		min: number;
		max: number;
	};
}

export const PriceFilter: FC<PriceFilterProps> = ({ data }) => {
	const [minPrice, setMinPrice] = useState(data.min);
	const [maxPrice, setMaxPrice] = useState(data.max);
	const [priceQuery, setPriceQuery] = useState(false);
	const { query } = useRouter();
	const { updateQueryParams, getArrayValueFromQuery } = useQueryParams();

	const min = data.min;
	const max = data.max;

	useEffect(() => {
		if (priceQuery) {
			setPriceInQuery();
			setPriceQuery(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [priceQuery]);

	const setPriceInQuery = () => {
		const priceValue = `${minPrice}_${maxPrice}`;
		query.price = priceValue;
		updateQueryParams();
	};

	useEffect(() => {
		if (query.price) {
			const value = getArrayValueFromQuery('price');
			const minFromQuery = isNaN(Number(value[0]))
				? minPrice
				: Number(value[0]);
			const maxFromQuery = isNaN(Number(value[1]))
				? maxPrice
				: Number(value[1]);

			if (minFromQuery !== minPrice) {
				setMinPrice(minFromQuery);
			}

			if (maxFromQuery !== maxPrice) {
				setMaxPrice(maxFromQuery);
			}

			if (isNaN(Number(value[0])) || isNaN(Number(value[1]))) {
				setPriceInQuery();
			}
		} else {
			if (minPrice !== min) {
				setMinPrice(min);
			}
			if (maxPrice !== max) {
				setMaxPrice(max);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	const onChangePrice = (value: number, type: string) => {
		if (type === 'minPrice') {
			setMinPrice(value);
		}

		if (type === 'maxPrice') {
			setMaxPrice(value);
		}
	};

	const onSetPriceOnQuery = () => {
		setPriceQuery(true);
	};

	const onChangePriceInput = (value: number, type: string) => {
		onChangePrice(value, type);
		onSetPriceOnQuery();
	};

	return (
		<Accordion title='price' defaultOpen={true}>
			<Slider
				minPrice={minPrice}
				maxPrice={maxPrice}
				onChangePrice={onChangePrice}
				onSetPrice={onSetPriceOnQuery}
				min={min}
				max={max}
			/>
			<Box display='flex' alignItems='center' gridGap='sp16'>
				<PriceInput
					value={minPrice}
					name='minPrice'
					label='from'
					onChangeInput={onChangePriceInput}
				/>
				<PriceInput
					name='maxPrice'
					label='to'
					value={maxPrice}
					onChangeInput={onChangePriceInput}
				/>
			</Box>
		</Accordion>
	);
};
