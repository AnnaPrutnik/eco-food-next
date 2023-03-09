import React from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { ICollectionItem } from 'types';

interface CountryFilterProps {
	data: ICollectionItem[];
}

export const CountryFilter: React.FC<CountryFilterProps> = ({
	data: country,
}) => {
	return (
		<Accordion title='country'>
			<CheckboxGroup options={country} name='country' />
		</Accordion>
	);
};
