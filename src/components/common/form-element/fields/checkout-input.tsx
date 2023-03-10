import { FC } from 'react';
import { Field, FieldInputProps } from 'formik';
import { Box } from 'components';
import { InputLabel, StyledInput } from './fields.styled';
import { InputProps } from 'types';

export const CheckoutInput: FC<InputProps> = ({ label, name }) => {
	return (
		<Box width='100%'>
			<InputLabel htmlFor={name} mb={3}>
				{label}
			</InputLabel>
			<Box height='44px'>
				<Field name={name} id={name}>
					{({ field }: { field: FieldInputProps<string> }) => (
						<StyledInput
							border='light'
							bg='light'
							{...field}
							autoComplete='off'
						/>
					)}
				</Field>
			</Box>
		</Box>
	);
};
