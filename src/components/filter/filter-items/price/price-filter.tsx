import { FC, useState, useEffect } from 'react';
import { Box, Accordion } from 'components';
import { PriceInput } from './price-input';
import { Slider } from './price-slider';
import { useQueryParams } from 'hooks';
import { checkValueIsNumber } from 'helpers';
import { QUERY } from 'utils/constans';

interface PriceFilterProps {
	data: {
		min: number;
		max: number;
	};
}

export const PriceFilter: FC<PriceFilterProps> = ({ data }) => {
	const {
		updateQueryParams,
		getArrayValueFromQuery,
		setValueAsPropertyToQuery,
	} = useQueryParams();

	const query = getArrayValueFromQuery(QUERY.price);
	const [minPrice, setMinPrice] = useState(() =>
		query ? checkValueIsNumber(query[0], data.min) : data.min
	);
	const [maxPrice, setMaxPrice] = useState(() =>
		query ? checkValueIsNumber(query[1], data.max) : data.max
	);
	const [priceQuery, setPriceQuery] = useState(false);

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
		setValueAsPropertyToQuery(QUERY.price, priceValue);
		updateQueryParams();
	};

	useEffect(() => {
		if (!query) {
			if (minPrice !== min) {
				setMinPrice(min);
			}
			if (maxPrice !== max) {
				setMaxPrice(max);
			}
			return;
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
			<Box
				display='flex'
				alignItems='center'
				gridGap='sp16'
				position='relative'
				marginBottom='1px'
			>
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
