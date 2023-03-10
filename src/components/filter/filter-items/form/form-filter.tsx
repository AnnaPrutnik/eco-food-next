import { FC } from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { ICollectionItem } from 'types';

interface FormFilterProps {
	data: ICollectionItem[];
}

export const FormFilter: FC<FormFilterProps> = ({ data: forms }) => {
	return (
		<Accordion title='form'>
			<CheckboxGroup options={forms} name='form' />
		</Accordion>
	);
};
