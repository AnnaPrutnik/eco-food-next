import { FC, useState } from 'react';
import { Accordion } from 'components';
import { OptionGroup } from '../options-group';
import { ICollectionItem } from 'types';

interface FormFilterProps {
	data: ICollectionItem[];
}

export const FormFilter: FC<FormFilterProps> = ({ data: forms }) => {
	return (
		<Accordion title='form'>
			<OptionGroup options={forms} name='form' />
		</Accordion>
	);
};
