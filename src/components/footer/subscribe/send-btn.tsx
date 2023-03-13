import React from 'react';
import { CheckIcon } from 'components/svg';
import { SendButton } from './subscribe.styled';

export const SendBtn = () => {
	return (
		<SendButton type='submit' aria-label='send icon button'>
			<CheckIcon />
		</SendButton>
	);
};
