import React, { useState } from 'react';
import { Root, Indicator, Label } from './checkbox.styled';
import { Box } from 'components';
import { CheckIcon } from 'components/svg';

interface CheckboxProps {
	value: string;
	onChange: (value: string) => void;
	defaultChecked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	value,
	onChange,
	defaultChecked,
}) => {
	const onClick = () => {
		onChange(value);
	};

	return (
		<Box display='flex' alignItems='center' gridGap='sp16'>
			<Root
				id={value}
				onCheckedChange={onClick}
				defaultChecked={defaultChecked}
			>
				<Indicator>
					<CheckIcon width={12} height={10} />
				</Indicator>
			</Root>
			<Label htmlFor={value}>{value}</Label>
		</Box>
	);
};
