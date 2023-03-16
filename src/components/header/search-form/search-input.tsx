import React from 'react';
import { Box } from 'components';
import { SearchIcon } from 'components/svg';
import { Search, IconWrapper } from './search-input.styled';
import { Field, FieldInputProps } from 'formik';

export const SearchInput = () => {
	return (
		<Box height='44px' position='relative'>
			<Field name='filter'>
				{({ field }: { field: FieldInputProps<string> }) => (
					<Search
						border='none'
						bg='light'
						icon={true}
						placeholder='Search'
						type='text'
						{...field}
						autoComplete='off'
					/>
				)}
			</Field>
			<IconWrapper>
				<SearchIcon />
			</IconWrapper>
		</Box>
	);
};
