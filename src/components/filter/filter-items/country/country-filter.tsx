import { FC } from 'react';
import { Accordion } from 'components';
import { OptionGroup } from '../options-group';
import { ICollectionItem } from 'types';

interface CountryFilterProps {
	data: ICollectionItem[];
}

export const CountryFilter: FC<CountryFilterProps> = ({ data: country }) => {
	return (
		<Accordion title='country'>
			<OptionGroup options={country} name='country' />
		</Accordion>
	);
};
