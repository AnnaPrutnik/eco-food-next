import { FC } from 'react';
import { Accordion } from 'components';
import { OptionGroup } from '../options-group';
import { ICollectionItem } from 'types';
import { QUERY } from 'utils/constans';

interface FormFilterProps {
	data: ICollectionItem[];
}

export const FormFilter: FC<FormFilterProps> = ({ data: forms }) => {
	return (
		<Accordion title='form'>
			<OptionGroup options={forms} name={QUERY.form} />
		</Accordion>
	);
};
