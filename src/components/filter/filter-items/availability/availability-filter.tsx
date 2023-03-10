import { FC } from 'react';
import { Accordion, CheckboxGroup } from 'components';
import { ICollectionItem } from 'types';

interface AvailabilityFilterProps {
	data: ICollectionItem[];
}

export const AvailabilityFilter: FC<AvailabilityFilterProps> = ({
	data: availability,
}) => {
	return (
		<Accordion title='availability'>
			<CheckboxGroup options={availability} name='availability' />
		</Accordion>
	);
};
