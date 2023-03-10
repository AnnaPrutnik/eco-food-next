import { FC, useState, useEffect } from 'react';
import { Box } from 'components';
import { useDebouncedCallback } from 'use-debounce';
import { PriceLabel, Price, CurrencyLabel } from './price-input.styled';

interface InputProps {
	name: string;
	label: string;
	value: number;
	onChangeInput: (value: number, type: string) => void;
}

export const PriceInput: FC<InputProps> = ({
	name,
	label,
	value,
	onChangeInput,
}) => {
	const [price, setPrice] = useState(() => value);

	const debounced = useDebouncedCallback((value: number) => {
		onChangeInput(value, name);
	}, 700);

	useEffect(() => {
		if (price !== value) {
			setPrice(value);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onChangePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		setPrice(value);
		debounced(value);
	};

	return (
		<Box display='flex' alignItems='center'>
			<PriceLabel htmlFor={name}>{label}:</PriceLabel>
			<Box width='68px' height='40px' position='relative'>
				<Price
					border='dark'
					bg='transparent'
					type='number'
					autoComplete='off'
					id={name}
					name={name}
					onChange={onChangePriceInput}
					value={price}
				/>

				<CurrencyLabel>$</CurrencyLabel>
			</Box>
		</Box>
	);
};
