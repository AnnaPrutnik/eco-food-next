import React, { useMemo } from 'react';
import { StyledCheckbox, StyledSpan, StyledLabel } from './checkbox.styled';
import { CheckIcon } from 'components';

interface CheckboxProps {
	value: string;
	name: string;
	onChange: (value: string) => void;
	isChecked: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	value,
	name,
	onChange,
	isChecked,
}) => {
	const normalizedValue = useMemo(() => {
		return value.toLowerCase();
	}, [value]);

	const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<StyledLabel>
			<StyledCheckbox
				value={normalizedValue}
				onChange={onChangeCheckBox}
				type='checkbox'
				// name={name}
			/>
			<StyledSpan isChecked={isChecked} aria-hidden='true'>
				<CheckIcon />
			</StyledSpan>
			<span>{normalizedValue}</span>
		</StyledLabel>
	);
};
