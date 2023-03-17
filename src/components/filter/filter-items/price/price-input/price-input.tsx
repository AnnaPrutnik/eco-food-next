import { FC, useState, useEffect } from 'react';
import { Box } from 'components';
import { useDebouncedCallback } from 'use-debounce';
import { PriceLabel, Price, InputWrapper } from './price-input.styled';

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
		const value = Number(e.target.value.slice(2));
		setPrice(value);
		debounced(value);
	};

	const onInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const keyCode = e.which || e.keyCode;
		const keyValue = String.fromCharCode(keyCode);
		if (!/^\d+$/.test(keyValue)) {
			e.preventDefault();
		}
	};

	const onMobileInputValue = (e: React.FormEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		const newValue = Number(value.slice(2));
		if (isNaN(newValue)) {
			return;
		} else {
			setPrice(newValue);
		}
	};

	return (
		<Box display='flex' alignItems='center'>
			<PriceLabel htmlFor={name}>{label}:</PriceLabel>
			<InputWrapper>
				<Price
					border='dark'
					bg='transparent'
					type='text'
					autoComplete='off'
					id={name}
					name={name}
					onChange={onChangePriceInput}
					onKeyPress={onInputValue}
					onInput={onMobileInputValue}
					value={`$ ${price}`}
					aria-label={`${name} input`}
				/>
			</InputWrapper>
		</Box>
	);
};
