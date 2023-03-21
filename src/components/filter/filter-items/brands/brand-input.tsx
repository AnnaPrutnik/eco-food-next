import React, { useState } from 'react';
import { Box, StyledInput } from 'components';
import { SearchIcon } from 'components/svg';
import styled from 'styled-components';

const IconWrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 16px;
	width: 18px;
	height: 18px;
	transform: translateY(-50%);
`;

interface InputProps {
	name: string;
	onChangeInput: (value: string) => void;
}

export const BrandFilterInput: React.FC<InputProps> = ({
	name,
	onChangeInput,
}) => {
	const [filter, setFilter] = useState('');

	const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFilter(value);
		onChangeInput(value);
	};

	return (
		<Box width='100%' minHeight='40px' position='relative'>
			<IconWrapper>
				<SearchIcon />
			</IconWrapper>
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
