import React from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { ICollectionItem } from 'types';

interface AvailabilityFilterProps {
	data: ICollectionItem[];
}

export const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({
	data: availability,
}) => {
	return (
		<Accordion title='availability'>
			<CheckboxGroup options={availability} name='availability' />
		</Accordion>
	);
};
