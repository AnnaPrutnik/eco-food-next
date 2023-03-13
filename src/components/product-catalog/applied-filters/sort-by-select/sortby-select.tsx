import React from 'react';
import { SelectLabel, FilterSelect } from './sort-select.styled';
import { Box } from 'components';
import { SelectProps } from 'types';
import { useSelectProps } from 'hooks';

export const SortBySelect: React.FC<SelectProps> = ({
	label,
	name,
	options,
}) => {
	const { value, onBlurSelect, onChangeSelect } = useSelectProps(name, options);

	return (
		<Box
			display='flex'
			alignItems='center'
			width={[311, 311, 'auto']}
			justifyContent={['space-between', 'space-between', 'flex-end']}
		>
			<SelectLabel htmlFor={name} mr='sp16'>
				{label}
			</SelectLabel>
			<Box width={[160, 160, 148]}>
				<FilterSelect
					classNamePrefix='custom-select'
					name={name}
					instanceId={name}
					value={value}
					onChange={onChangeSelect}
					onBlur={onBlurSelect}
					options={options}
					isSearchable={false}
				/>
			</Box>
		</Box>
	);
};
