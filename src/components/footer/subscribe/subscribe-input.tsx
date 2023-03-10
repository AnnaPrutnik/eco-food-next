import { FC } from 'react';
import { Box } from 'components';
import { Field, FieldInputProps } from 'formik';
import { StyledInput } from 'components';
import { SendBtn } from './send-btn';
import { InputProps } from 'types';

export const SubscribeInput: FC<InputProps> = ({ name }) => {
	return (
		<Box width='100%' height='40px' position='relative'>
			<Field name={name} id={name}>
				{({ field }: { field: FieldInputProps<string> }) => (
					<StyledInput
						border='none'
						bg='light'
						icon={true}
						placeholder='Your email'
						{...field}
						autoComplete='off'
					/>
				)}
			</Field>
			<SendBtn />
		</Box>
	);
};
