import React from 'react';
import { Btn } from './add-button.styled';
import { AddIcon } from 'components/svg';

export const AddBtn = () => {
	return (
		<Btn>
			<span>Add</span>
			<AddIcon size={12} />
		</Btn>
	);
};
