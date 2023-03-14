import React, { useState } from 'react';
import { Box, StyledInput, SearchInputBtn } from 'components';
import { InputProps } from 'types';

export const BrandFilterInput: React.FC<InputProps> = ({
	name,
	onChangeInput,
}) => {
	const [filter, setFilter] = useState('');

	const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
		onChangeInput(e.target.value);
	};

	return (
		<Box width='100%' minHeight='40px' position='relative'>
			<SearchInputBtn />
			<StyledInput
				border='dark'
				bg='transparent'
				icon={true}
				placeholder='Name of brand'
				type='text'
				name={name}
				onChange={onChangeFilter}
				autoComplete='off'
				value={filter}
			/>
		</Box>
	);
};
